import { Biography } from "@type/index";
import Image from "@components/ui/Image";
import DOMPurify from "isomorphic-dompurify";

const BiographyContent = ({ data }: { data: Biography }) => {
  return (
    <div className="biography-part py-[60px] md:py-[120px]">
      <div className="content_body">
        {data?.short_description ? (
          <div className="name">
            <h3 className="text-[#000225] font-semibold text-4xl">
              {data?.short_description}
            </h3>
            <p className="text-[#555555] uppercase font-semibold mt-[18px]">
              {data?.title}
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="bio-info mt-[45px]">
          <div className="text-justify text-[#707070] leading-[30px]">
            <div className="md:float-right w-full sm:max-w-[40%] sm:pl-10 pb-10">
              <Image
                src={data?.image}
                alt={data?.short_description}
                // style={{ height: "100%", width: "100%" }}
                // fill
                className="image"
              />
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.description),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiographyContent;
