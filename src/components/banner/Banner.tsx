import Image from "@components/ui/Image";

type BannerProps = {
  innerBannerBgImg: any;
  tag: string;
  title: string;
  subTitle: string;
};

const Banner: React.FC<BannerProps> = ({
  innerBannerBgImg,
  tag,
  title,
  subTitle,
}) => {
  return (
    <div className="inner-banner py-[30px] lg:py-[120px] max-h-[468px]">
      <div className="absolute inset-0">
        <Image
          src={innerBannerBgImg}
          // style={{ height: "100%", width: "100%" }}
          // fill
          className="h-full"
          quality={100}
          imageClassName="w-full image"
          alt={title}
        />
      </div>
      <div className="content_body">
        <div className="inner flex flex-wrap items-start gap-5 relative z-10 bg-white rounded-[10px] px-7 py-7 sm:px-14 sm:py-20">
          <div className="flex items-center gap-5">
            <span className="text-[#000225] font-semibold leading-5 duration-300">
              {tag}
            </span>
            <span className="line w-10 sm:w-28 h-px bg-[#000225]"></span>
          </div>
          <div className="inner-title">
            <h5 className="text-[#000225] font-semibold leading-5">{title}</h5>
            <h3 className="text-[#000225] font-semibold text-2xl sm:text-4xl leading-10 uppercase mt-[10px] sm:mt-[30px]">
              {subTitle}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
