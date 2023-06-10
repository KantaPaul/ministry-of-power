import Image from "@components/ui/Image";
import Link from "next/link";
import SideBarLinks from "@components/single/Links";
import { EServiceProps } from "@type/index";

const EService = ({ eService }: { eService: EServiceProps[] }) => {
  return (
    <div className="eService-page py-[60px] md:py-[120px]">
      <div className="content_body">
        <div className="grid grid-cols-12 gap-[30px] lg:gap-[60px]">
          <div className="card-group col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 gap-[30px]">
              {eService && eService?.length
                ? eService?.map((el: EServiceProps, i: number) => (
                    <div
                      key={i + "e-service"}
                      className="card-item hover:shadow-md duration-300 rounded-[10px] border-solid border-[1px] border-[#F7F7F7] overflow-hidden col-span-12 sm:col-span-6"
                    >
                      {el.image ? (
                        <div className="top flex justify-center bg-[#F7F7F7]">
                          <Image
                            src={el.image}
                            alt={el.title}
                            // width={120}
                            // height={120}
                            // layout="fixed"
                            // imageClassName="w-[120px] h-[120px] object-cover rounded-full"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="info p-[30px]">
                        <h3 className="text-[#000225] text-[20px] font-semibold min-h-[60px]">
                          {el?.title}
                        </h3>
                        <p className="text-[#555555] text-[13px] uppercase font-semibold mt-2 mb-3">
                          {el?.type}
                        </p>
                        <Link
                          className="text-secondary text-[13px] uppercase font-semibold"
                          href={el?.internal_link}
                        >
                          Show Details
                        </Link>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <div className="links col-span-12 md:col-span-4">
            <SideBarLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EService;
