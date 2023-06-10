import { siteSettings } from "@settings/site-settings";
import Link from "next/link";
import { isEmpty } from "lodash";

export default function SideBarLinks() {
  const { necessary_links } = siteSettings;
  return necessary_links && !isEmpty(necessary_links) ? (
    <div>
      {necessary_links?.map((link, index) => {
        return (
          <div
            className="link-card bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px] last:mb-0"
            key={index}
          >
            <h4 className="text-[#000225] font-semibold text-[21px] leading-none">
              {link?.title}
            </h4>
            {link?.data && !isEmpty(link?.data) ? (
              <ul className="mt-[10px]">
                {link?.data?.map((item, index) => {
                  return (
                    <li key={index} className="group">
                      <Link
                        className="block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-primary hover:pl-[5px] duration-300 group-last:border-b-0"
                        href={item?.path}
                        target={item?.target}
                        rel={item?.rel}
                        title={item?.label}
                      >
                        {item?.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <span className="sr-only">No links found</span>
  );
}
