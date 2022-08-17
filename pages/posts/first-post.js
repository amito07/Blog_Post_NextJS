import { Button } from "@mui/material";
import Link from "next/link";
const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/posts">Back to home</Link>
      </h2>
    </>
  );
};
export default FirstPost;
