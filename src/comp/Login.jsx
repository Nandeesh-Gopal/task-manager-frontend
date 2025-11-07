import Nav from "./Nav";
function Login() {
    return (
        <>  
            <Nav/>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="abc@gmail.com"/>
                <input type="password" placeholder="Enter your password"/>
                <button >Submit</button>
            </form>
        </>
    )
}
export default Login;