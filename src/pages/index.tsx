import Biography from "@components/Biography";
import Header from "@components/Header";
import NewsContainer from "@containers/News";
import Partner from "@components/Partners";
import SideSocial from "@components/common/SideSocial";
import { useEffect, useState } from "react";
import Gallery from "@components/Gallery";
import LatestNews from "@components/latest-news/LatestNews";
// import ApexChart from "@components/Chart";
export { getStaticProps } from "@framework/ssr/home-page.ssr";

export default function Home() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div>
      {/* <div className={scrollPosition < 400 ? "hidden" : ""}>
        <div className="fixed bottom-0 right-0 z-50">
          <SideSocial />
        </div>
      </div> */}
      <Header />
      <div className="lg:pb-32 pb-16">
        <div className="lg:pb-[503px] pb-5 bg-[#F8FAFF]">
          <Biography />
        </div>
        <div className="lg:-mt-96">
          <Gallery />
        </div>
      </div>
      {/* <ApexChart
        heading="Energy in Statistics "
        subHeading="Responsible for policy-making and implementation in all matters related to transmission & distribution. Power sector is inextricably linked to all three functions generation."
      /> */}
      <NewsContainer />
      <LatestNews />
      <Partner />
    </div>
  );
}
