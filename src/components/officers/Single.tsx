import { Officers } from "@type/index";
import Image from "@components/ui/Image";
import DOMPurify from "isomorphic-dompurify";
import Seo from "@components/Seo";
import { isEmpty } from "lodash";
import { Routes } from "@config/routes";

const OfficerSingle = ({ data }: { data: Officers }) => {
  const SEOUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${Routes?.officer(
    data?.id?.toString() as string
  )}`;
  return (
    <>
      <Seo
        title={data?.officer_name}
        url={SEOUrl}
        images={!isEmpty(data?.image) ? [data?.image] : []}
      />
      <div className="officer-details-part py-[60px] md:py-[120px]">
        <div className="content_body">
          <div className="md:flex items-center">
            <div className="left md:w-[40%] mt-[-80px]">
              <div className="officer-image md:inline-block text-center bg-[#F7F7F7] py-6 md:py-0 rounded-[10px]">
                <Image
                  src={data?.image}
                  alt={data?.officer_name}
                  // style={{ height: "100%", width: "100%" }}
                  // fill
                  imageClassName="inline-block md:mt-[30px] lg:mt-[80px] md:ml-[30px] lg:ml-[80px] md:mb-[-83px] lg:mb-[-80px] md:mr-[-80px] rounded-[10px] max-w-full md:max-w-[230px]"
                />
              </div>
            </div>
            <div className="right md:w-[60%] mt-[60px] md:mt-0">
              <div className="officer-details-info bg-[#F7F7F7] rounded-[10px] p-[30px] md:p-[60px]">
                <h3 className="text-2xl md:text-4xl text-[#000225] font-semibold">
                  {data?.officer_name}
                </h3>
                <p className="text-[#555555] font-semibold uppercase mt-2">
                  {data?.designation} ({data?.organizations})
                </p>
                <p
                  className="text-[#8F8F8F] mt-6 leading-8"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.description),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficerSingle;
