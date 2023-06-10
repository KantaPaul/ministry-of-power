import { LogoLight } from "@components/ui/Logo";
import { siteSettings } from "@settings/site-settings";
import { isEmpty } from "lodash";
import Link from "next/link";
import { getIcon } from "@lib/get-icon";
import * as socialIcons from "@components/icons/social";

const Footer = () => {
  const { footer_links, contact, social, copyright } = siteSettings;

  return (
    <div className="bg-[#000225] pt-[50px]">
      <div className="content_body">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 lg:col-span-2">
            <LogoLight className="logo" />
          </div>
          {footer_links ? (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              {footer_links?.title ? (
                <h3 className="font-medium text-2xl text-white leading-[29px] mb-[20px]">
                  {footer_links?.title}
                </h3>
              ) : (
                ""
              )}
              {footer_links?.menu && !isEmpty(footer_links?.menu) ? (
                <ul>
                  {footer_links?.menu?.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className="text-[#E1E2E6] text-lg leading-[32px] hover:text-primary duration-300"
                          href={link?.path}
                          target={link?.target}
                          rel={link?.rel}
                          title={link?.label}
                        >
                          {link?.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          {contact ? (
            <div className="col-span-12 sm:col-span-6 lg:col-span-5">
              {contact?.title ? (
                <h3 className="font-medium text-2xl text-white leading-[29px] mb-[20px]">
                  {contact?.title}
                </h3>
              ) : (
                ""
              )}
              {contact?.mails && !isEmpty(contact?.mails)
                ? contact?.mails?.map((link, index) => {
                    return (
                      <Link
                        className="text-[#E1E2E6] text-lg leading-[32px] hover:text-primary duration-300"
                        href={link?.path}
                        key={index}
                        title={link?.label}
                      >
                        {link?.label}
                      </Link>
                    );
                  })
                : ""}
              <br />

              <div className="phone-number flex flex-wrap gap-x-3 gap-y-1">
                <p className="text-[#E1E2E6] text-lg leading-[32px]">Tel:</p>
                {contact?.tels && !isEmpty(contact?.tels)
                  ? contact?.tels?.map((link, index) => {
                      return (
                        <Link
                          className="text-[#E1E2E6] text-lg leading-[32px] hover:text-primary duration-300"
                          href={link?.path}
                          key={index}
                          title={link?.label}
                        >
                          {link?.label}
                        </Link>
                      );
                    })
                  : ""}
              </div>
            </div>
          ) : (
            ""
          )}

          {social ? (
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <div className="social-icon flex gap-3">
                {social && !isEmpty(social)
                  ? social?.map((link, index) => {
                      return (
                        <Link
                          key={index}
                          className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-secondary text-white hover:bg-primary  duration-300"
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
            </div>
          ) : (
            ""
          )}
        </div>
        {copyright ? (
          <div className="footer-bottom text-center py-[36px] border-t-[1px] border-[#333551] mt-[50px]">
            <p className="text-white">
              {copyright?.text}
              <Link
                className="text-primary"
                href={copyright?.path}
                target={copyright?.target}
                rel={copyright?.rel}
                title={copyright?.label}
              >
                {" "}
                {copyright?.label}
              </Link>
              .
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Footer;
