import cn from "classnames";
import { useOfficersGetBySlug } from "@framework/officers";
import Heading from "@components/officers/widgets/Heading";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import Image from "@components/ui/Image";
import { isEmpty, isArray } from "lodash";
import { OfficersNew } from "@type/index";
import Link from "next/link";
// import { useMemo } from "react";

const OfficerCard = ({
  title,
  slug,
  className,
  showTitle = true,
  limit,
  ...props
}: {
  title?: string;
  slug: string;
  showTitle?: boolean;
  className?: string;
  limit?: number;
}) => {
  const { items, isLoading, error, loadMore, hasMore } =
    useOfficersGetBySlug({
      slug: slug,
      ...(limit && { limit: limit }),
    });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    // @ts-ignore
    return <Alert type="error" message={error?.message} />;
  }

  const listItemTitleClassName = "min-w-[4.375rem] truncate";
  const listItemClassName = "text-base font-medium flex items-center";
  const wrapperClassName =
    "col-span-full p-[1.875rem] rounded-[1.25rem] bg-white";

  return (
    <div className={cn("w-full", className)} {...props}>
      {showTitle ? <Heading title={title as string} /> : ""}
      {!isEmpty(items) && isArray(items) && items ? (
        <div className="space-y-5">
          {items?.map((item: OfficersNew, index: number) => {
            return (
              <div className="grid grid-cols-12 gap-3" key={index}>
                <div className={cn(wrapperClassName, "md:col-span-7")}>
                  <div className="flex flex-wrap items-center gap-7">
                    <div className="shrink-0 md:h-36 md:w-32 w-full">
                      <Image
                        src={item?.image}
                        alt={item?.name_en}
                        className="h-full"
                        imageClassName="object-cover rounded-[0.625rem]"
                      />
                    </div>
                    <div className="w-full md:w-auto">
                      <ul className="space-y-2">
                        {item?.mobile ? (
                          <li
                            className={cn(
                              listItemClassName,
                              "text-[#000225] !mb-5"
                            )}
                          >
                            <span className={cn(listItemTitleClassName)}>
                              নাম:
                            </span>
                            <span>{item?.name_bn}</span>
                          </li>
                        ) : (
                          ""
                        )}

                        {item?.designation ? (
                          <li className={cn(listItemClassName)}>
                            <span className={cn(listItemTitleClassName)}>
                              পদবী:
                            </span>
                            <span>{item?.designation}</span>
                          </li>
                        ) : (
                          ""
                        )}
                        {item?.type ? (
                          <li className={cn(listItemClassName)}>
                            <span className={cn(listItemTitleClassName)}>
                              অফিস:
                            </span>
                            <span>{item?.type}</span>
                          </li>
                        ) : (
                          ""
                        )}

                        {item?.email ? (
                          <li className={cn(listItemClassName)}>
                            <span className={cn(listItemTitleClassName)}>
                              ইমেইল:
                            </span>
                            <Link
                              href={`mailto:${item?.email}`}
                              className="hover:text-primary transition-colors duration-300"
                            >
                              {item?.email}
                            </Link>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={cn(wrapperClassName, "md:col-span-5")}>
                  <ul className="space-y-2">
                    {item?.mobile ? (
                      <li className={cn(listItemClassName)}>
                        <span
                          className={cn(
                            listItemTitleClassName,
                            "min-w-[6.875rem]"
                          )}
                        >
                          মোবাইল:
                        </span>
                        <Link
                          href={`tel:${item?.mobile}`}
                          className="hover:text-primary transition-colors duration-300"
                        >
                          {item?.mobile}
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    {item?.phone_office ? (
                      <li className={cn(listItemClassName)}>
                        <span
                          className={cn(
                            listItemTitleClassName,
                            "min-w-[6.875rem]"
                          )}
                        >
                          ফোন (অফিস):
                        </span>
                        <Link
                          href={`tel:${item?.phone_office}`}
                          className="hover:text-primary transition-colors duration-300"
                        >
                          {item?.phone_office}
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    {item?.phone_home ? (
                      <li className={cn(listItemClassName)}>
                        <span
                          className={cn(
                            listItemTitleClassName,
                            "min-w-[6.875rem]"
                          )}
                        >
                          ফোন (বাসা):
                        </span>
                        <Link
                          href={`tel:${item?.phone_home}`}
                          className="hover:text-primary transition-colors duration-300"
                        >
                          {item?.phone_home}
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    {item?.fax ? (
                      <li className={cn(listItemClassName)}>
                        <span
                          className={cn(
                            listItemTitleClassName,
                            "min-w-[6.875rem]"
                          )}
                        >
                          ফ্যাক্স:
                        </span>
                        <span>{item?.fax}</span>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {hasMore && (
        <div className="flex justify-center mt-8 lg:mt-12">
          <button
            // loading={isLoadingMore}
            onClick={loadMore}
            className="text-sm font-semibold h-11 md:text-base"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default OfficerCard;
