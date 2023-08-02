import Loader from "@components/Loader";
import Alert from "@components/Alert";
import Image from "@components/ui/Image";
import { isEmpty } from "lodash";
import TabFeed from "@components/latest-news/TabFeed";
import { useAchievement } from "@framework/achievement";
import { Swiper, SwiperSlide } from "swiper/react";
import { AchievementImage } from "@type/index";
import { Pagination } from "swiper";

const LatestNews = () => {
  const { achievement, isLoading, error } = useAchievement({
    type: 3,
  });

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
          {/* @ts-ignore */}
          <Alert type="error" message={error?.message} />
        </div>
      </div>
    );
  }

  console.log(achievement);

  return (
    <div className="bg-[#F8FAFF] py-[60px] md:py-[120px]">
      <div className="content_body">
        <div className="grid grid-cols-12 lg:gap-[30px] gap-y-[60px]">
          <div className="col-span-12 lg:col-span-8">
            <div className="title">
              <div className="fancy_title relative">
                <h2 className="font-semibold sm:text-[21px] text-primary pl-2.5 leading-[24.41px] uppercase">
                  এক নজরে
                </h2>
              </div>
            </div>
            {!isEmpty(achievement) ? (
              <Swiper
                modules={[Pagination]}
                loop={true}
                speed={1000}
                autoplay={{ delay: 3000 }}
                slidesPerView={1}
                effect={"fade"}
                // centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                className="gallery-slider latest-news-slider mt-8"
              >
                {achievement?.map((image: AchievementImage, index: number) => (
                  <SwiperSlide key={index}>
                    <Image
                      imageClassName="w-full image"
                      src={image?.image}
                      alt={image?.caption_bn}
                      key={index}
                      quality={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              ""
            )}
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
