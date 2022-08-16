import Link from "next/link"
const index = () => {
  return (
    <>
    <h1>index</h1>
    <Link href="/posts/first-post">First Post</Link>
    </>
  )
}

export default index