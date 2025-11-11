import { useEffect,useState } from "react";
import Nav from "./Nav.jsx"
function AssignTask(){
    const [member,setMembers]=useState([]);
    const [task,setTask]=useState({member_id:"",title:"",description:""})
    const handlechange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value});
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const res= await fetch("http://localhost:5000/assign-task",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
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
                    {
                        member.map((m)=>(
                            <option key={m.id} value={m.id}>
                                {m.email}
                            </option>
                        ))
                    }
                </select>
                <input type="text" name="title" placeholder="Task title" onChange={handlechange}/>
                <textarea name="description" placeholder="Task Description" onChange={handlechange}/>
                <button type="submit">assign</button>
            </form>
        </div>
    )
}