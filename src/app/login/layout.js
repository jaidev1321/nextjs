"use client"
import Link from "next/link";
import '@/app/login/page.css'
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            {
                pathName === '/login/admin'
                    ?
                    <ul className="login-menu">
                        <li> <h4>Login Navbar </h4></li>
                        <li> <Link href="/login/admin"> Admin Login </Link></li>
                        <li> <Link href="/login/user"> User Login </Link></li>
                        <li> <Link href="/login"> Main Login </Link></li>
                    </ul>
                    : <Link href="/">Home</Link>
            }

            {
                children
            }
        </div>
    )
}