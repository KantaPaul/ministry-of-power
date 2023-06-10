import { useRunningProject } from "@framework/running-project";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import { RunningProject } from "@type/index";
import Image from "@components/ui/Image";
import DOMPurify from "isomorphic-dompurify";
import TabFeed from "@components/latest-news/TabFeed";

const LatestNews = () => {
  const {
    runningProject,
    isLoading,
    error,
  }: { runningProject: RunningProject; isLoading: boolean; error: any } =
    useRunningProject();

  if (isLoading) {
    return (
      <div className="py-[60px] md:py-[120px] flex justify-center">
        <div className="content_body">
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-40">
        <div className="container mx-auto">
          <Alert type="error" message={error?.message} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFF] py-[60px] md:py-[120px]">
      <div className="content_body">
        <div className="grid grid-cols-12 lg:gap-[30px] gap-y-[60px]">
          <div className="col-span-12 lg:col-span-8">
            <div className="title">
              <div className="fancy_title relative">
                <h2 className="font-semibold sm:text-[21px] text-primary pl-2.5 leading-[24.41px] uppercase">
                  Ministry of power
                </h2>
              </div>
              {runningProject?.title ? (
                <h3
                  className="text-2xl sm:text-4xl py-4 font-semibold text-[#000225] mt-[-9px]"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(runningProject?.title),
                  }}
                />
              ) : (
                ""
              )}
            </div>
            <div className="latest-project-item mt-[27px]">
              <Image
                src={runningProject?.image}
                alt={runningProject?.description}
              />

              {runningProject?.title ? (
                <p className="text-[#555555;] font-semibold text-[16px] sm:text-2xl mt-[18px] leading pr-0 md:pr-16">
                  {runningProject?.description}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="feed py-8 bg-white rounded-[20px] max-h-[740px]">
              <div className="content">
                <TabFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
