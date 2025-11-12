import { useEffect,useState } from "react";
import Nav from "./Nav.jsx"
import { data } from "react-router-dom";
function AssignTask(){
    const [member,setMembers]=useState([]);
    const [task,setTask]=useState({member_id:"",title:"",description:""})
    const token =localStorage.getItem("token")
    useEffect(()=>{
        fetch("http://localhost:5000/get-members",{
            headers:{Authorization:`Bearer ${token}`}
        })
        .then((res)=>res.json())
        .then((data)=>setMembers(data))
        .catch(()=>setMembers([]))
    },[token])
    const handlechange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value});
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const res= await fetch("http://localhost:5000/assign-task",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                ,Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(task)
        })
        const data= await res.json()
        alert(data.message)
    }
    return(
        <div>
            <Nav/>
            <h2>Assign Task</h2>
            <form onSubmit={handlesubmit}>
                <select name="member_id" onChange={handlechange} required>
                    {Array.isArray(member) && member.length > 0 ? (
  member.map((m) => (
    <option key={m.id} value={m.id}>{m.email}</option>
  ))
) : (
  <option disabled>No members found</option>
)}

                </select>
                <input type="text" name="title" placeholder="Task title" onChange={handlechange}/>
                <textarea name="description" placeholder="Task Description" onChange={handlechange}/>
                <button type="submit">assign</button>
            </form>
        </div>
    )
}
export default AssignTask;