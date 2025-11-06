import  Nav from "./nav";
import { useNavigate } from "react-router-dom";
function Home() {
  const navi=useNavigate();
  return(
    <>
        <Nav />
        <h2>Welcome to ToDo List Application</h2>
    </>
    );
}
export default Home;