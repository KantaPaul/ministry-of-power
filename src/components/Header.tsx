import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { useHeaderSlider } from "@framework/header-slider";
// import Loader from "@components/Loader";
import Alert from "@components/Alert";
import Image from "@components/ui/Image";
import { HeaderSlider } from "@type/index";

import "swiper/css/effect-fade";

const Header = () => {
  const { headerSlider: headerData, error } = useHeaderSlider();

  // if (isLoading) {
  //   return (
  //     <div className="py-[60px] md:py-[120px] flex justify-center">
  //       <div className="content_body">
  //         <Loader />
  //       </div>
  //     </div>
  //   );
  // }

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

  return (
    <>
      {headerData && headerData?.length ? (
        <>
          <div className="swiper-container">
            <Swiper
              modules={[Autoplay, EffectFade]}
              loop={true}
              speed={1000}
              // autoplay={{ delay: 3000 }}
              slidesPerView={1}
              effect={"fade"}
              centeredSlides={true}
            >
              {headerData?.map((el: HeaderSlider, index: number) => (
                <SwiperSlide key={index}>
                  <div className="hero_banner">
                    <div className="lg:block hidden absolute top-0 left-0 h-full w-full blur-[33px]">
                      <Image
                        src={el?.image}
                        alt={el?.caption}
                        className="h-full xl:h-auto"
                        imageClassName="object-cover"
                      />
                    </div>
                    <div className="content_body lg:my-14">
                      <div className="relative">
                        <Image
                          src={el?.image}
                          alt={el?.caption}
                          // className="h-full xl:h-auto"
                        />
                        <div className="hero_banner_text relative lg:absolute lg:bottom-0 lg:left-0 lg:pb-12 lg:px-14 z-50 p-4">
                          <div className="lg:h-96 h-full w-full absolute bottom-0 left-0 lg:bg-gradient-to-b lg:from-black/0 lg:to-black bg-black lg:bg-transparent"></div>
                          <div className="relative z-50">
                            {el?.caption ? (
                              <h1 className="md:text-6xl font-bold md:w-4/5 max-w-7xl text-2xl w-11/12 mb-8">
                                {el?.caption}
                              </h1>
                            ) : (
                              ""
                            )}
                            {el?.short_description ? (
                              <p className="lg:text-lg text-base font-normal w-4/5 text-white max-w-7xl">
                                {el?.short_description}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
