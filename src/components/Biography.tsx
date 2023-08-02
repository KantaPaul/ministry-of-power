import FancyTitle from "./common/FancyTitle";
import Image from "next/image";
import { useAbout } from "@framework/about-us";
import { useBiography } from "@framework/biography";
import { isEmpty } from "lodash";
import { Routes } from "@config/routes";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { Biography, About } from "@type/index";
// import Loader from "@components/Loader";
import Alert from "@components/Alert";
import NextImage from "next/image";
import { useCallback } from "react";
import { useModalAction } from "@components/modal/modal.context";
import { ReadMoreIcon } from "@components/icons/readmore";

const Biography = () => {
  const {
    about: aboutData,
    // isLoading: aboutLoading,
    error: aboutError,
  }: { about: About; isLoading: boolean; error: any } = useAbout();

  const {
    biography,
    // isLoading,
    error,
  }: { biography: Biography[]; isLoading: boolean; error: any } =
    useBiography();

  const truncate = useCallback((str: string, n: number) => {
    if (str) {
      return str.length > n ? str.slice(0, n - 1) + "..." : str;
    }
  }, []);

  const { openModal } = useModalAction();

  const handleMoreInfoModal = useCallback((data: string) => {
    return openModal("CONTENT_VIEW", {
      content: data,
    });
  }, []);

  // if (isLoading || aboutLoading) {
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
          <Alert type="error" message={error?.message} />
        </div>
      </div>
    );
  }

  if (aboutError) {
    return (
      <div className="my-40">
        <div className="container mx-auto">
          <Alert type="error" message={aboutError?.message} />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[60px] lg:pt-24 relative overflow-hidden">
      <div className="content_body z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-7">
          {biography && !isEmpty(biography) ? (
            <div className="flex flex-col md:flex-row justify-center item-center gap-4 lg:gap-6 z-10">
              <Link href={Routes?.biography(biography[0]?.id)}>
                <div className="flex justify-center">
                  <div className="about_img cursor-pointer">
                    <Image
                      width={300}
                      height={446}
                      className="rounded-lg"
                      src={biography[0]?.image}
                      alt={biography[0]?.title}
                      layout="fixed"
                    />
                    <div className="about_img_box p-2 lg:p-3.5 rounded-tr-lg">
                      <p className="about_img_title">{biography[0]?.title}</p>
                      <p className="about_img_sub-title pt-2">
                        {truncate(biography[0]?.short_description, 60)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex flex-col justify-between items-center gap-4">
                <div className="about_img about_img2 cursor-pointer">
                  <Link href={Routes?.biography(biography[1]?.id)}>
                    <Image
                      width={300}
                      height={210}
                      className="rounded-lg"
                      src={biography[1]?.image}
                      alt={biography[1]?.title}
                      layout="fixed"
                    />
                    <div className="about_img_box p-3.5 rounded-tr-lg">
                      <p className="about_img_title">{biography[1]?.title}</p>
                      <p className="about_img_sub-title pt-2">
                        {truncate(biography[1]?.short_description, 50)}
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="about_img about_img2 cursor-pointer">
                  <Link href={Routes?.biography(biography[2]?.id)}>
                    <Image
                      width={300}
                      height={210}
                      className="rounded-lg"
                      src={biography[2]?.image}
                      alt={biography[2]?.title}
                      layout="fixed"
                    />
                    <div className="about_img_box p-3.5 rounded-tr-lg">
                      <p className="about_img_title">{biography[2]?.title}</p>
                      <p className="about_img_sub-title pt-2">
                        {biography[2]?.short_description}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="my-[60px] md:my-2">
            <FancyTitle title={"মন্ত্রণালয় সম্পর্কিত"} />
            <p className="py-4 heading_text">{aboutData?.title}</p>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "#8F8F8F",
              }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(aboutData?.description),
              }}
              className="mb-10 truncate_text"
            />
            <button
              className="btn btn-sm rounded-3xl h-[42px]"
              style={{ backgroundColor: "#000225" }}
            >
              <span
                className="flex justify-center items-center gap-2 px-2 py-1 cursor-pointer"
                onClick={() =>
                  handleMoreInfoModal(
                    DOMPurify.sanitize(aboutData?.description)
                  )
                }
              >
                <ReadMoreIcon />
                <p className="text-white">বিস্তারিত</p>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-7 right-0 z-0">
        <NextImage
          width={644}
          height={900}
          src={"/assets/img/map.png"}
          // layout="fixed"
          alt="map"
        />
      </div>
      <div className="mt-16 px-3 lg:px-0 hidden md:block">
        <NextImage
          width={865}
          height={147}
          src={"/assets/img/light.png"}
          alt="light"
          // layout="fixed"
        />
      </div>
    </div>
  );
};

export default Biography;
