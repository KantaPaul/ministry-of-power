// import Image from "@components/ui/Image";
import Marquee from "react-fast-marquee";
import { useLatestNews } from "@framework/latest-news";
import { LogoDark } from "@components/ui/Logo";

const LatestNews = () => {
  const { latestNews: newsList }: { latestNews: any } = useLatestNews();
  return (
    <div>
      <div className="content_body">
        <div className="hidden lg:flex justify-between md:flex-row flex-col py-5">
          <div>
            <LogoDark />
          </div>
          <div style={{ width: "72%" }}>
            <div className="flex w-full">
              <div
                style={{ width: "85%" }}
                className="px-5 py-2.5 border flex items-center border-border1 rounded-l-md relative overflow-hidden"
              >
                <div>
                  <Marquee pauseOnHover>
                    {newsList.data &&
                      newsList.data.length &&
                      newsList.data.map((el: any) => (
                        <div key={el.id}>
                          <p
                            style={{
                              marginLeft: "30px",
                              fontSize: "16px",
                              fontWeight: "400",
                              lineHeight: "30px",
                              color: "#006A4E",
                              order: `${el.order}`,
                            }}
                          >
                            {el.title}
                          </p>
                        </div>
                      ))}
                  </Marquee>
                </div>
              </div>
              <div
                className="px-5 py-3.5 rounded-r-md"
                style={{ backgroundColor: "#E5F0ED", width: "15%" }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "19.36px",
                    color: "#006A4E",
                  }}
                >
                  Latest News
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col py-5">
          {/* <Image
            imageClassName="flex justify-center"
            // priority
            width={175}
            height={50}
            src="/assets/img/site-logo.png"
            alt="Logo"
            layout="fixed"
          /> */}
          <LogoDark />

          <div className="my-4" style={{ width: "100%" }}>
            <div className="flex w-full">
              <div className="px-2 py-1.5 md:px-5 md:py-2.5 w-[70%] md:w-[85%] border flex items-center border-border1 rounded-l-md">
                <div style={{ width: "100%" }}>
                  <Marquee pauseOnHover>
                    {newsList.data &&
                      newsList.data.length &&
                      newsList.data.map((el: any) => (
                        <div key={el.id}>
                          <p
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                              lineHeight: "30px",
                              color: "#006A4E",
                              order: `${el.order}`,
                            }}
                          >
                            {el.title}
                          </p>
                        </div>
                      ))}
                  </Marquee>
                </div>
              </div>
              <div
                className="px-2 py-1.5 md:px-5 md:py-3.5 rounded-r-md flex justify-center items-center"
                style={{ backgroundColor: "#E5F0ED", width: "136px" }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "19.36px",
                    color: "#006A4E",
                  }}
                >
                  Latest News
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
