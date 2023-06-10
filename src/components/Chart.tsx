import React from "react";
import NextImage from "next/image";
import LineChart from "@components/LineChart";

const ApexChart = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <>
      <div className="pb-[60px] lg:pb-[120px] relative">
        <div className="content_body relative z-10">
          <div className="title text-center mb-16">
            <h3 className="text-4xl font-semibold text-[#000225] mt-[-9px]">
              {heading}
            </h3>
            <p className="max-w-3xl mx-auto text-base text-[#8F8F8F] mt-[20px]">
              {subHeading}
            </p>
          </div>
          <div className="bg-[#F8FAFF] rounded-lg p-11 border border-solid border-slate-[rgba(0, 0, 0, 0.03)]">
            <LineChart />
          </div>
        </div>
        <div className="absolute -top-5 left-0 z-0">
          <NextImage
            width={644}
            height={900}
            src={"/assets/img/map.png"}
            // layout="fixed"
            alt="map"
          />
        </div>
      </div>
    </>
  );
};
export default ApexChart;
