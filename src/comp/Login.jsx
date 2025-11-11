import Nav from "./Nav";
import { useState } from "react";
function Login() {
    const [formdata,setFormdata]=useState({
        email:"",
        password:""
    });
    const handlechange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    const handlesubmit= async (e)=>{
        e.preventDefault();
        try{
        const res = await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formdata)
        })
        const data= await res.json()
        if(res.ok){
            localStorage.setItem("token",data.token)
            alert(data.message)
        }
        else{
            alert(data.message)
        }

    }
        catch(error){
            console.log("error",error)
            alert("some error da mapi")
        }
    }
    return (
        <>  
            <Nav/>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <input name="email" onChange={handlechange} type="email" placeholder="abc@gmail.com"/>
                <input name="password" onChange={handlechange} type="password" placeholder="Enter your password"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Login;