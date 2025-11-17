import { useState } from "react";
import Nav from "./Nav.jsx";
const host = import.meta.env.VITE_HOST;

function CreateMember(){
    const [form,setForm]= useState({email:"",password:""})
    const handlechange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const token =localStorage.getItem("token")
        const res= await fetch(`http://${host}/create-member`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
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