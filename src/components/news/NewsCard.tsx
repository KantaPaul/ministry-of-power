import Link from "next/link";
import Image from "@components/ui/Image";
import { Routes } from "@config/routes";
import { isEmpty } from "lodash";

const NewsCard = ({ news, meta }: { news: any; meta: "news" | "office" }) => {
  return (
    <div className="news-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-[30px]">
      {!isEmpty(news?.data) &&
        news?.data?.data?.map((item: any, index: number) => {
          return (
            <Link
              href={Routes?.newsSingle(meta, item?.news_type, item?.id)}
              className="news-card inline-block"
              key={index}
            >
              {item?.image ? (
                <Image
                  className="h-[245px] overflow-hidden"
                  src={item?.image}
                  alt={item?.title}
                  // style={{ height: "100%", width: "100%" }}
                  // fill
                  imageClassName="object-cover rounded-lg"
                />
              ) : (
                ""
              )}
              <p className="text-[16px] sm:text-[21px] ease-in-out hover:underline hover:underline-offset-4 font-semibold text-[#555555] leading-[26px] sm:leading-[31px] mt-2.5 sm:mt-[22px]  line-clamp-2">
                {item?.title}
              </p>
            </Link>
          );
        })}
    </div>
  );
};

export default NewsCard;
