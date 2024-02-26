'use client';
import {useRouter} from 'next/navigation';
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const router = useRouter();
  const navigate = (routeName) => {
    router.push(routeName);
  }
  return (
    <main className={styles.main}>
      <Link href="/about/company">About Company</Link>
      <br />
      <Link href="/about/team">About Team</Link>

      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={()=>navigate("/about")}>About</button>
    </main>
  );
}
