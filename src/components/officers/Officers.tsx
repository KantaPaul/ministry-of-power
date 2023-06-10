import { isEmpty } from "lodash";
import Image from "@components/ui/Image";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import Link from "next/link";
import { Officers } from "@type/index";
import { Routes } from "@config/routes";

type OfficersProps = {
  officers: Officers[];
  isLoading: boolean;
  error: any;
};

const Officers: React.FC<OfficersProps> = ({ officers, isLoading, error }) => {
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

  return !isEmpty(officers) ? (
    <>
      <div className="content_body">
        <div className="officers-list grid grid-cols-12 gap-x-[30px] gap-y-[45px]">
          {officers?.map((officer: Officers, index: number) => {
            return (
              <div
                className="officer-card col-span-6 md:col-span-4 lg:col-span-3"
                key={index}
              >
                <Link
                  className="text-secondary text-[13px] uppercase font-semibold"
                  href={Routes.officer(officer?.id?.toString() as string)}
                >
                  <Image
                    className="rounded-[10px] w-full sm:h-[360px] relative overflow-hidden"
                    src={officer?.image}
                    alt={officer?.officer_name}
                    // style={{ height: "100%", width: "100%" }}
                    // fill
                    imageClassName="object-cover"
                  />
                </Link>
                <div className="officer-info mt-[10px]">
                  {officer?.officer_name ? (
                    <h4 className="text-[#000225] text-lg leading-[34px] font-semibold">
                      {officer?.officer_name}
                    </h4>
                  ) : (
                    ""
                  )}
                  <p className="text-[#555555] text-[13px] py-1 font-semibold uppercase">
                    {officer?.designation} ({officer?.organizations})
                  </p>
                  <Link
                    className="text-secondary text-[13px] uppercase font-semibold"
                    href={Routes.officer(officer?.id?.toString() as string)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div className="my-40">
      <div className="content_body">
        <Alert type="info" message="No content found." />
      </div>
    </div>
  );
};

export default Officers;
