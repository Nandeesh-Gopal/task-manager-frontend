import { useNavigate } from "react-router-dom";
function nav(){
    const navi=useNavigate();
    return(
        <nav>
            <h1>ToDo List</h1>
            <button >Login</button>
            <button onClick={()=>navi("/signup")}>Sign Up</button>
        </nav>
    )
}
export default nav;