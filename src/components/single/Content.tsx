import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import Seo from "@components/Seo";
import { isEmpty } from "lodash";
import Image from "@components/ui/Image";
import { formatDate } from "@lib/format-date";
import RelatedPosts from "@components/single/RelatedPosts";
import SideBarLinks from "@components/single/Links";
import SearchWidget from "@components/widgets/Search";
import DOMPurify from "isomorphic-dompurify";

type SinglePostContentProps = {
  post: any;
  posts: any;
  shareUrl: string;
  meta: string;
};

const SinglePostContent: React.FC<SinglePostContentProps> = ({
  post,
  posts,
  shareUrl,
  meta,
}) => {
  return (
    <>
      <Seo
        title={post?.data?.title}
        // url={shareUrl}
        images={!isEmpty(post?.data?.image) ? [post?.data?.image] : []}
      />
      <div className="news-title md:px-[110px]">
        <div className="meta flex gap-5 items-center">
          {/* <a
                href="https://mpemr.gov.bd/news"
                className="uppercase font-semibold text-[#555555] hover:text-[#F42A41] duration-300"
              >
                Blog
              </a> */}
          {/* <span className="w-[5px] h-[5px] bg-[#D9D9D9] rounded-full"></span> */}
          <p className="uppercase font-semibold text-[#555555]">
            {formatDate(post?.data?.news_date)}
          </p>
        </div>
        <h3 className="text-[#000225] font-semibold text-2xl sm:text-4xl leading-[34px] sm:leading-[44px] mt-[26px]">
          {post?.data?.title}
        </h3>
      </div>
      <div className="thumbnail-img my-[30px] sm:my-[60px] text-center">
        <Image
          src={post?.data?.image}
          alt={post?.data?.title}
          // style={{ height: "100%", width: "100%" }}
          // fill
          className="max-w-full max-h-[640px] relative overflow-hidden"
          imageClassName="object-cover"
        />
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-[60px]">
        <div className="news-body lg:col-span-8 mb-16 lg:mb-0">
          <div className="news-details-content">
            <p
              className="text-[#707070] leading-[30px]"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post?.data?.details),
              }}
            ></p>
            <div className="share mt-10 sm:mt-20 flex gap-3 items-center bg-[#E6F6ED] text-[#07A74D] px-[25px] py-3 rounded-full">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={25} round />
              </FacebookShareButton>

              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={25} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div className="side-bar lg:col-span-4">
          <SearchWidget posts={posts?.data} meta={meta} />

          <RelatedPosts posts={posts} meta={meta} />

          <SideBarLinks />
        </div>
      </div>
    </>
  );
};

export default SinglePostContent;
