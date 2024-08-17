'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { useUser } from '@/logic/UserContext';
export default function Home() {
  const { user, logout } = useUser();





  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  my-5 py-5">

      register
      <br />
      <h1>{user ? (<> welcome {user.name}</>) : (<>you must login first</>)}</h1>

    </main>
  );
}
