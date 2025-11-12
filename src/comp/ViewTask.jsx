import { useEffect,useState } from "react";
import Nav from "./Nav.jsx"
function ViewTask(){
    const [tasks,setTasks]=useState([]);
    const token = localStorage.getItem("token");

    const fetchTasks= async () =>{
        const res =await fetch("http://localhost:5000/get-task",{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
        const data= await res.json();
        setTasks(data);
    }
    useEffect(()=>{
        fetchTasks();
    },[])
    const updateStatus=async (taskId,newStatus)=>{
        await fetch(`http://localhost:5000/update/${taskId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify({status:newStatus})
        })
        fetchTasks();
    }
    return(
        <div>
            <Nav/>
            <h2>My tasks</h2>
            {Array.isArray(tasks) && tasks.length > 0 ? (
  tasks.map((t) => (
    <li key={t.id}>
      <strong>{t.title}</strong> - {t.description}
      <br />
      Status: {t.status}
      <select
        onChange={(e) => updateStatus(t.id, e.target.value)}
        value={t.status}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </li>
  ))
) : (
  <p>No tasks found or unauthorized.</p>
)}
        </div>
    )
}
export default ViewTask;