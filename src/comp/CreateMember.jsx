import { useState } from "react";
import Nav from "./Nav.jsx";
function CreateMember(){
    const [form,setForm]= useState({email:"",password:""})
    const handlechange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const res= await fetch("http://localhost:5000/create-member",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        })
        const data = await res.json();
        alert(data.message)
    }
    return(
        <div>
            <Nav/>
            <h2>create team member</h2>
            <form onSubmit={handlesubmit}>
                <input type="email" name="email" placeholder="member email" onChange={handlechange}/>
                <input type="password" name="password" placeholder="set password" onChange={handlechange}/>
                <button type="submit">CreateMember</button>
            </form>
        </div>
    )
}
export default CreateMember;