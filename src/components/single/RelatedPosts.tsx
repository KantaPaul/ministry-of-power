import { isEmpty } from "lodash";
import Link from "next/link";
import { Routes } from "@config/routes";
import Image from "@components/ui/Image";
import { formatDate } from "@lib/format-date";

type RelatesPostsProps = {
  posts: any;
  meta: string;
};

const RelatedPosts: React.FC<RelatesPostsProps> = ({ posts, meta }) => {
  return posts && !isEmpty(posts?.data) ? (
    <div className="recent-news  bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px]">
      <h4 className="text-[#000225] font-semibold text-[21px] leading-none">
        Related News
      </h4>
      <>
        {posts?.data?.map((item: any, index: number) => {
          return (
            <Link
              href={`${Routes?.newsSingle(meta, item?.news_type, item?.id)}`}
              className="news-card flex gap-[20px] mt-[30px] pb-[30px] border-solid border-b-[1px] border-[#D9D9D9] last:border-b-0 last:pb-0"
              key={index}
              title={item?.title}
            >
              <div className="small-thumb-img w-[80px] min-w-[80px]">
                <Image
                  className="small-img w-full h-[90px] rounded-md relative overflow-hidden"
                  src={item?.image}
                  alt={item?.title}
                  // style={{ height: "100%", width: "100%" }}
                  // fill
                  imageClassName="object-cover"
                />
              </div>
              <div className="details flex flex-col justify-between">
                <p className="text-[#8F8F8F;] uppercase text-[13px] leading-[13px] mb-2">
                  {formatDate(item?.news_date)}
                </p>
                <h4 className="recent-news-title text-[#000225] font-bold">
                  {item?.title}
                </h4>
                <Link
                  className="text-primary font-medium text-[13px]"
                  href={`${Routes?.newsSingle(
                    meta,
                    item?.news_type,
                    item?.id
                  )}`}
                  title={item?.title}
                >
                  Read More
                </Link>
              </div>
            </Link>
          );
        })}
      </>
    </div>
  ) : (
    <span className="sr-only">No post found</span>
  );
};

export default RelatedPosts;
