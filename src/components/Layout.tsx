import LatestNews from "@components/LatestNews";
import NavBar from "@components/NavBar";
import TopNav from "@components/TopNav";
import Footer from "@components/Footer";
import { NextSeo } from "next-seo";
import { siteSettings } from "@settings/site-settings";
import { addActiveScroll } from "@utils/add-active-scroll";
import React, { useRef } from "react";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const { name, description }: any = siteSettings;
  const siteHeaderRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef);
  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        title={name}
        description={description}
        canonical={process?.env?.NEXT_PUBLIC_SITE_URL}
        openGraph={{
          url: process?.env?.NEXT_PUBLIC_SITE_URL,
          title: name,
          description,
          images: [
            {
              url: "/favicon.ico",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "/favicon.ico",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
        }}
      />
      <TopNav />
      <LatestNews />
      <div ref={siteHeaderRef}>
        <NavBar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
