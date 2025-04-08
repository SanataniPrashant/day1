import Link from "next/link";


export default function Headder() {
  return (
    <>
    <div  className="header">

      <h1>Digital Store</h1>
      <div className="nav">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#blog">Blog</Link>
      </div>
    </div>
    </>
  )
}