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
    // Frontend improvements
const handlesubmit = async (e) => {
  e.preventDefault();
  
  // Add frontend validation
  if (!formdata.email || !formdata.password) {
    alert("Please fill in all fields");
    return;
  }
  
  if (formdata.password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }
  
  try {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    
    if (data.message === "Database error") {
      alert("Registration failed. Email may already exist.");
    } else {
      alert(data.message);
      if (data.message === "User registered successfully!") {
      }
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Signup failed! Please check your connection and try again.");
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