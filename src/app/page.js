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
      <Link href="/login">Go to Login</Link>
      <br />
      <Link href="/about">Go to About</Link>

      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={()=>navigate("/about")}>About</button>
    </main>
  );
}
