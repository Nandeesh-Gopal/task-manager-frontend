import Nav from "./Nav";
import { useState } from "react";
function Signup() {
    const [formdata,setFormdata]=useState({
        email:"",
        password:""
    });
    const handlechange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})    
    }
    const handlesubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    const data = await res.json(); // ✅ res is now a real Response
    alert(data.message);
  } catch (error) {
    console.error("Error:", error);
    alert("Signup failed!");
  }
};

    return (
        <>
            <Nav/>
            <h1>Signup</h1>
            <form onSubmit={handlesubmit}>
                <input name="email"  onChange={handlechange} type="email" placeholder="abc@gmail.com"/>
                <input name="password" onChange={handlechange} type="password" placeholder="Enter your password"/>
                <button type="submit">Submit</button>
            </form>
        </>
    ) 
}
export default Signup;