import Link from "next/link";
import './page.css';

export default function({children}){
    return <div>
        <ul className="navbar-menu">
            <li><h4>Navbar</h4></li>
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/login">Login</Link></li>
            <li> <Link href="/about/company">Company</Link></li>
            <li> <Link href="/about/team">Team</Link></li>
        </ul>

        {children}
    </div>
}