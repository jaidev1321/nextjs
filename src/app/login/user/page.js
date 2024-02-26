"use client"
import {useRouter} from 'next/navigation';
const User = () => {
    const router = useRouter();
    return (
        <>
        <h1 className='heading'>User Login Page</h1>
        <button onClick={()=>router.push("/")}>Go to Home</button>
        </>
    )
}

export default User;