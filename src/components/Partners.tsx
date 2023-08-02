import { Fragment } from "react";
import { usePartners } from "@framework/partner";
import { isEmpty } from "lodash";
import Link from "next/link";
// import Image from "next/image";
import { useMemo, useCallback, useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

const Partner = () => {
  const { partners, isLoading }: { partners: any; isLoading: boolean } =
    usePartners();

  const types = useMemo(() => {
    const typeArray = partners?.data?.map((item: any) => item?.type);
    // @ts-ignore
    return [...new Set(typeArray)];
  }, [partners, isLoading]);

  const [filterType, setFilterType] = useState(types[0]);

  const handleClick = useCallback(
    (type: string) => {
      setFilterType(type);
    },
    [filterType]
  );

  const partnerLists = useMemo(() => {
    return partners?.data?.filter((item: any) =>
      filterType ? item?.type === filterType : item?.type === types[0]
    );
  }, [filterType, partners, isLoading]);

  if (isEmpty(partners?.data)) {
    return <div className="sr-only">Partners</div>;
  }

  return (
    <div className="partner-part py-[60px] lg:py-[120px]">
      <div className="content_body">
        <div className="title text-center">
          <h3 className="text-4xl font-semibold text-[#000225] mt-[-9px]">
            মন্ত্রণালয়ের প্রতিষ্ঠানসমূহ
          </h3>
          <p className="max-w-3xl mx-auto text-base text-[#8F8F8F] mt-[20px]">
            বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ মন্ত্রণালয়ের অধীনস্থ বিভিন্ন দপ্তর,
            সংস্থা ও কোম্পানির ওয়েব সাইট এর লিঙ্ক
          </p>
        </div>
        {!isEmpty(types) && types && (
          <div className="partner-tab relative">
            <Tab.Group>
              <Tab.List className="tab-btn flex mt-[27px] justify-center gap-3 relative z-10">
                {types?.map((type, index) => {
                  return (
                    <Tab as={Fragment} key={index}>
                      {({ selected }) => (
                        <span
                          onClick={() => handleClick(type)}
                          className={classNames(
                            "font-medium text-white px-4 rounded-2xl h-[30px] flex items-center capitalize cursor-pointer",
                            selected ? "bg-primary active" : "bg-secondary"
                          )}
                        >
                          {index === 0
                            ? type?.replace("electricity", "বিদ্যুৎ বিভাগ")
                            : type?.replace(
                                "emrd",
                                "জ্বালানি ও খনিজ সম্পদ বিভাগ"
                              )}
                        </span>
                      )}
                    </Tab>
                  );
                })}
              </Tab.List>
              <Tab.Panels>
                {types &&
                  types?.map((_, index: number) => {
                    return (
                      <Tab.Panel
                        className={
                          "mt-14 card-group flex flex-wrap justify-center gap-[10px]"
                        }
                        key={index}
                      >
                        {partnerLists &&
                          !isEmpty(partnerLists) &&
                          partnerLists?.map((partner: any, index: number) => (
                            <Link
                              href={partner?.url}
                              className={classNames(
                                "card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle relative"
                              )}
                              target="_blank"
                              rel="nofollow"
                              title={partner?.title}
                              key={index}
                              style={{
                                order: Number(partner?.order),
                              }}
                            >
                              <img
                                src={partner?.image}
                                alt={partner?.title}
                                className="object-cover rounded-lg max-w-full"
                              />
                            </Link>
                          ))}
                      </Tab.Panel>
                    );
                  })}
              </Tab.Panels>
            </Tab.Group>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partner;
