// import { Tab } from "@headlessui/react";
// import cn from "classnames";
import Link from "next/link";
// import { useCallback, useState, useMemo } from "react";
import { Routes } from "@config/routes";

const News = ({
  heading,
  // subHeading,
  color = "#FFFFFF",
  data,
  meta,
}: {
  heading: string;
  subHeading?: string;
  color?: string;
  data: any;
  meta: "power" | "energy";
}) => {
  // const [tab, setTab] = useState(0);

  // const handleClick = useCallback(
  //   (index: number) => {
  //     setTab(index);
  //   },
  //   [tab]
  // );

  // const NewsComponent = useMemo(() => {
  //   const NewsMethod = data[tab];

  //   return NewsMethod?.component;
  // }, [tab]);

  const NewsComponent = data?.component;

  return (
    <div
      className="news-part py-[60px] lg:py-[120px]"
      style={{ backgroundColor: color }}
    >
      <div className="content_body">
        <div className="title">
          <div className="fancy_title relative">
            <h2 className="font-semibold sm:text-[21px] text-secondary pl-2.5 leading-[24.41px] uppercase">
              {heading}
            </h2>
          </div>
          {/* <h3 className="text-2xl sm:text-4xl py-4 font-semibold text-[#000225] mt-[-9px]">
                {subHeading}
              </h3> */}
        </div>

        <NewsComponent news={data?.data} meta={data?.title} />

        <div className="text-center mt-[20px] sm:mt-[50px]">
          <Link
            className="all-news-btn h-[30px] px-[18px] py-1 rounded-3xl text-black"
            style={{ border: "1px solid #00000033" }}
            href={Routes.news(data?.title?.toLowerCase(), meta)}
          >
            সকল খবর
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
