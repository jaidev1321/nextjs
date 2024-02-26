import Link from "next/link";
import '@/app/login/page.css'
export default function Layout({children}){
    return (
        <div>
            <ul className="login-menu">
                <li> <h4>Login Navbar </h4></li>
                <li> <Link href="/login/admin"> Admin Login </Link></li>
                <li> <Link href="/login/user"> User Login </Link></li>
                <li> <Link href="/login"> Main Login </Link></li>
            </ul>
            {
                children
            }
        </div>
    )
}