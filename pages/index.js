import Link from "next/link";

export default function Home() {
    return <div>
      <h1>Welcome Page</h1>
      <div>
        <Link href='/cabins'>Cabins</Link>
        <Link href='/about'>About</Link>
      </div>
    </div>
    
}


