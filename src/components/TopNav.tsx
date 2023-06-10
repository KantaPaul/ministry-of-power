import { useState } from "react";
import classNames from "classnames";
import { siteSettings } from "@settings/site-settings";
import { isEmpty } from "lodash";
import Link from "next/link";
import { getIcon } from "@lib/get-icon";
import * as socialIcons from "@components/icons/social";

const TopNav = () => {
  const [language, setLanguage] = useState("bangla");
  const { social } = siteSettings;
  return (
    <div className="bg-secondary">
      <div className="content_body">
        <div className="flex justify-between">
          {social ? (
            <div className="social-icon flex gap-x-5 items-center">
              {social && !isEmpty(social)
                ? social?.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        className="text-white hover:text-primary transition-colors duration-300"
                        href={link?.path}
                        target={link?.target}
                        rel={link?.rel}
                        title={link?.label}
                      >
                        {getIcon({
                          iconList: socialIcons,
                          iconName: link?.icon,
                          className: "h-[13px]",
                        })}
                      </Link>
                    );
                  })
                : ""}
            </div>
          ) : (
            ""
          )}

          <div className="flex">
            <p
              className={classNames(
                "px-2.5 py-1.5 text-white top_nev_font",
                language === "bangla" ? "bg-primary" : "bg-secondary"
              )}
              onClick={() => setLanguage("bangla")}
              // style={{
              //   backgroundColor: `${
              //     language === "bangla" ? "#F42A41" : "#006A4E"
              //   }`,
              // }}
            >
              Bangla
            </p>
            <p
              className={classNames(
                "px-2.5 py-1.5 text-white top_nev_font",
                language === "english" ? "bg-primary" : "bg-secondary"
              )}
              onClick={() => setLanguage("english")}
              // style={{
              //   backgroundColor: `${
              //     language === "english" ? "#F42A41" : "#006A4E"
              //   }`,
              // }}
            >
              English
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
