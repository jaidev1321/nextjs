"use client"
import {useRouter} from 'next/navigation';
const Login = () => {
    const router = useRouter();
    return (
        <>
        <h1>Login Page</h1>
        <button onClick={()=>router.push("/")}>Go to Home</button>
        <button onClick={()=>router.push("/login/admin")}>Admin Login</button>
        <button onClick={()=>router.push("/login/user")}>User Login</button>
        </>
    )
}

export default Login;