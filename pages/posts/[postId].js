import { Button } from "@mui/material";
import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <>
      <h1>{`POST ID ${postId}`}</h1>
      <Button variant="contained">Click</Button>
    </>
  );
};

export default PostId;
