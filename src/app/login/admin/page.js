"use client"
import {useRouter} from 'next/navigation';
const Admin = () => {
    const router = useRouter();
    return (
        <>
        <h1>Admin Login Page</h1>
        <button onClick={()=>router.push("/")}>Go to Home</button>
        </>
    )
}

export default Admin;