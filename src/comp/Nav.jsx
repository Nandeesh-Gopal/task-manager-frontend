import { useNavigate } from "react-router-dom";
function nav(){
    const navi=useNavigate();
    return(
        <nav>
            <h1 onClick={()=>navi("/")}>ToDo List</h1>
            <button onClick={()=>navi("/")}>Home</button>
            <button onClick={()=>navi("/login")}>Login</button>
            <button onClick={()=>navi("/signup")}>Sign Up</button>
        </nav>
    )
}
export default nav;