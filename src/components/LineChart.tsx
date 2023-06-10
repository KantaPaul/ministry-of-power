import Chart from "@components/ui/Chart";

const LineChart = () => {
  //   const options = {
  //     options: {
  //       chart: {
  //         type: "line",
  //         dropShadow: {
  //           enabled: true,
  //           color: color,
  //           top: 18,
  //           left: 0,
  //           blur: 3.5,
  //           opacity: 0.15,
  //         },
  //         toolbar: {
  //           show: false,
  //         },
  //       },
  //       stroke: {
  //         width: 7,
  //         curve: "smooth",
  //       },
  //       xaxis: {
  //         categories: categories,
  //         labels: {
  //           show: false,
  //         },
  //         axisBorder: {
  //           show: false,
  //         },
  //         axisTicks: {
  //           show: false,
  //         },
  //         crosshairs: {
  //           show: true,
  //           width: 5,
  //           tickWidth: 0,
  //           position: "back",
  //           opacity: 1,
  //           stroke: {
  //             color: "#b6b6b6",
  //             width: 0,
  //             dashArray: 0,
  //           },
  //           fill: {
  //             type: "solid",
  //             color: "#F2F3FC",
  //           },
  //         },
  //         tooltip: {
  //           enabled: false,
  //         },
  //       },
  //       yaxis: {
  //         show: true,
  //         labels: {
  //           show: true,
  //           style: {
  //             color: "#161F6A",
  //             fontSize: "14px",
  //             fontFamily: "'Lato', sans-serif",
  //           },
  //         },
  //       },
  //       grid: {
  //         borderColor: "#F7F7F7",
  //       },
  //       colors: color,
  //       markers: {
  //         size: 0,
  //         opacity: 1,
  //         colors: color,
  //         strokeColor: "#fff",
  //         strokeWidth: 4,
  //         hover: {
  //           size: 8,
  //         },
  //       },
  //     },
  //     series: [
  //       {
  //         name: seriesName,
  //         data: series,
  //       },
  //     ],
  //   };

  const options = {
    xaxis: {
      categories: ["২০০৯", "২০১৯"],
    },
  };
  const series = [
    {
      name: "বিদ্যুৎ কেন্দ্রের সংখ্যা",
      data: [27, 138],
    },
    {
      name: "অবসরকৃত বিদ্যুৎ কেন্দ্রের সংখ্যা",
      data: [0, 5],
    },
    {
      name: "বিদ্যুৎ উৎপাদন ক্ষমতা (মেঃওঃ)",
      data: [4942, 23548],
    },
    {
      name: "সর্বোচ্চ বিদ্যুৎ উৎপাদন (মেঃওঃ)",
      data: [3268, 12893],
    },
    {
      name: "মোট সঞ্চালন লাইন (সা.কি.মি.)",
      data: [8000, 12293],
    },
    {
      name: "গ্রিড সাব-ষ্টেশন ক্ষমতা (এমভিএ)",
      data: [15870, 47304],
    },
    {
      name: "বিদ্যুৎ আমদানি (মেঃ ওঃ)",
      data: [0, 1160],
    },
    {
      name: "বিতরণ লাইন (কি.মি.)",
      data: [260000, 582000],
    },
    {
      name: "বিদ্যুৎ সুবিধাপ্রাপ্ত জনগোষ্ঠী (%)",
      data: [47, 97],
    },
    {
      name: "মাথাপিছু বিদ্যুৎ উৎপাদন (কি.ও.ঘণ্টা)",
      data: [220, 512],
    },
    {
      name: "বিদ্যুৎ গ্রাহক সংখ্যা",
      data: [10800000, 30790000],
    },
    {
      name: "সেচ সংযোগ সংখ্যা",
      data: [234000, 362000],
    },
    {
      name: "বার্ষিক উন্নয়ন কর্মসূচি বরাদ্দ (কোটিতে)",
      data: [2667, 27637],
    },
    {
      name: "বিতরণ সিষ্টেম লস (%)",
      data: [14.33, 8.73],
    },
  ];

  return (
    <div className="h-full w-full rounded bg-light shadow-sm">
      <div className="w-full">
        <Chart
          options={options}
          series={series}
          height="350"
          type="line"
          width="97%"
        />
      </div>
    </div>
  );
};

export default LineChart;
