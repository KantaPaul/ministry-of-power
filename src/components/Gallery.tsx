import { useGallery } from "@framework/gallery";
import { isEmpty } from "lodash";
import Image from "@components/ui/Image";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "reactjs-popup/dist/index.css";
import { PlayIcon } from "@components/icons/play";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import { useModalAction } from "@components/modal/modal.context";
import React from "react";

const Gallery = () => {
  const {
    gallery,
    isLoading,
    error,
  }: { gallery: any; isLoading: boolean; error: any } = useGallery(4);

  const { openModal } = useModalAction();

  const handleVideoInfoModal = React.useCallback((data: string) => {
    return openModal("YOUTUBE_VIEW", {
      video: data,
    });
  }, []);

  if (!gallery) {
    return <span className="sr-only">Gallery</span>;
  }

  if (isEmpty(gallery?.data)) {
    return <span className="sr-only">Item not found</span>;
  }

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
    <>
      <div className="content_body">
        <div className="gallery-grid grid grid-cols-12 gap-[30px]">
          {gallery?.data?.map((item: any, index: number) => (
            <div
              className={classNames(
                "relative",
                index === 0
                  ? "video-big rounded-[20px] overflow-hidden col-span-12"
                  : "small-video rounded-[20px] overflow-hidden col-span-12 sm:col-span-4"
              )}
              key={index}
            >
              {!isEmpty(item?.images) ? (
                <Swiper
                  modules={[Pagination]}
                  loop={true}
                  speed={1000}
                  // autoplay={{ delay: 3000 }}
                  slidesPerView={1}
                  effect={"fade"}
                  // centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  className="gallery-slider"
                >
                  {item?.images?.map((image: any, index: number) => (
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

              {item?.video_url ? (
                <span
                  className={classNames(
                    "w-[5.625rem] cursor-pointer h-[5.625rem] flex bg-primary rounded-full hover:bg-secondary transition-all duration-300 absolute z-10",
                    index === 0
                      ? "right-7 bottom-7"
                      : "inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  )}
                  onClick={() =>
                    handleVideoInfoModal(
                      item?.video_url.indexOf("embed") > -1
                        ? item?.video_url
                        : item?.video_url.replace("watch?v=", "embed/")
                    )
                  }
                >
                  <PlayIcon className="text-white m-auto" />
                </span>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
