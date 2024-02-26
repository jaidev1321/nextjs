"use client"
import { useRouter } from "next/navigation";
const About = () => {
    const router = useRouter();
    return <>
    <h1>About Page</h1>
    <button onClick={()=>router.push('/')}>Go to Home</button>
    </>
}

export default About;