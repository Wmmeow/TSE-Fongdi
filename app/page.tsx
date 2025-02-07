import Link from 'next/link';
import styles from './LoginPage/styles.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className='text-4xl'>Welcome to the App</h1>
      <Link href="/LoginPage">Go to Login</Link>
    </main>
  );
}
