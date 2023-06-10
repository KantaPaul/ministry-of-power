import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { useHeaderSlider } from "@framework/header-slider";
import Loader from "@components/Loader";
import Alert from "@components/Alert";

import "swiper/css/effect-fade";

const Header = () => {
  const { headerSlider: headerData, isLoading, error } = useHeaderSlider();

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
      <div className="swiper-container">
        <Swiper
          modules={[Autoplay, EffectFade]}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          effect={"fade"}
          centeredSlides={true}
        >
          {headerData?.data &&
            headerData?.data?.length &&
            headerData?.data?.map((el) => (
              <SwiperSlide key={el.id}>
                <div
                  className="hero_banner hidden md:flex"
                  style={{
                    backgroundImage: `url(${el.image})`,
                  }}
                >
                  <div className="hero_banner_text">
                    <h1
                      style={{
                        fontSize: "72px",
                        fontWeight: "700",
                        lineHeight: "85.32px",
                        width: "80%",
                        maxWidth: "1290px",
                      }}
                    >
                      {el.caption}
                    </h1>
                    <p
                      className="py-11"
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                        width: "80%",
                        maxWidth: "1290px",
                        color: "white",
                      }}
                    >
                      {el.short_description}
                    </p>
                  </div>
                </div>
                <div
                  className="hero_banner md:hidden flex"
                  style={{
                    backgroundImage: `url(${el.image})`,
                  }}
                >
                  <div className="hero_banner_text">
                    <h1
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        lineHeight: "45.32px",
                        width: "90%",
                        maxWidth: "1290px",
                      }}
                    >
                      {el.caption}
                    </h1>
                    <p
                      className="py-7"
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "32px",
                        width: "80%",
                        maxWidth: "1290px",
                        color: "white",
                      }}
                    >
                      {el.short_description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Header;
