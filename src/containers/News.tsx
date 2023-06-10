import News from "@components/News";
import {
  useEnergyDivisionNews,
  useEnergyDivisionOfficeNews,
} from "@framework/energy-division-news";
import {
  usePowerDivisionNews,
  usePowerDivisionOfficeNews,
} from "@framework/power-division-news";
import NewsCard from "@components/news/NewsCard";

const NewsContainer = () => {

  const params = {
    limit: 3,
  };

  const { energyNews } = useEnergyDivisionNews(params);
  const { energyOfficeNews } = useEnergyDivisionOfficeNews(params);

  const { powerNews } = usePowerDivisionNews(params);
  const { powerOfficeNews } = usePowerDivisionOfficeNews(params);

  const ministerOfPower = [
    {
      id: 1,
      title: "News",
      className: "font-medium text-white px-4 rounded-2xl h-[30px]",
      component: NewsCard,
      data: powerNews,
    },
    {
      id: 2,
      title: "Office",
      className: "font-medium text-white px-4 rounded-2xl h-[30px]",
      component: NewsCard,
      data: powerOfficeNews,
    },
  ];

  const ministerOfEnergy = [
    {
      id: 1,
      title: "News",
      className: "font-medium text-white px-4 rounded-2xl h-[30px]",
      component: NewsCard,
      data: energyNews,
    },
    {
      id: 2,
      title: "Office",
      className: "font-medium text-white px-4 rounded-2xl h-[30px]",
      component: NewsCard,
      data: energyOfficeNews,
    },
  ];

  return (
    <>
      <News
        heading="Ministry of power"
        subHeading="News"
        color="#F8FAFF"
        data={ministerOfPower}
        meta="power"
      />
      <News
        heading="Ministry of energy"
        subHeading="News"
        data={ministerOfEnergy}
        meta="energy"
      />
    </>
  );
};

export default NewsContainer;
