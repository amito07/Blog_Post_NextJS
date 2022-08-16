import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();
  const { postId } = router.query;
  return <div>{`POST ID ${postId}`}</div>;
};

export default PostId;
