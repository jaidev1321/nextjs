"use client"
import {useRouter} from 'next/navigation';
const Login = () => {
    const router = useRouter();
    return (
        <>
        <h1>Login Page</h1>
        <button onClick={()=>router.push("/")}>Go to Home</button>
        </>
    )
}

export default Login;