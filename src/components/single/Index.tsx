import SinglePostContent from "@components/single/Content";
import { Routes } from "@config/routes";

type SinglePostContentProps = {
  post: any;
  posts: any;
  meta: string;
};

const SinglePost: React.FC<SinglePostContentProps> = ({
  post,
  meta,
  posts,
}) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${Routes?.newsSingle(
    meta,
    post?.data?.news_type,
    post?.data?.id
  )}`;
  return (
    <>
      <div className="py-[60px] lg:py-[120px]">
        <div className="content_body">
          <SinglePostContent
            post={post}
            shareUrl={shareUrl}
            posts={posts}
            meta={meta}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
