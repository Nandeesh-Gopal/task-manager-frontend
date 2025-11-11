import { useNavigate } from "react-router-dom";
function Nav(){
    const navi=useNavigate();
    const handlelogout=()=>{
        localStorage.removeItem("token")
        alert("logout successfully")
        navi("/login")
    }
    const token =localStorage.getItem("token")
    const ses= !!token;
    return(
        <nav>
            <h1 onClick={()=>navi("/")}>ToDo List</h1>
            <button onClick={()=>navi("/")}>Home</button>{
            ses?(<button onClick={handlelogout}>logout</button>):(
                <>
            <button onClick={()=>navi("/login")}>Login</button>
            <button onClick={()=>navi("/signup")}>Sign Up</button>
            </>)}

        </nav>
    )
}
export default Nav;