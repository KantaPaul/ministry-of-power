import { Tab } from "@headlessui/react";
import { useState, useCallback, useMemo } from "react";
import classNames from "classnames";
import dynamic from "next/dynamic";
const Facebook = dynamic(() => import("@components/feeds/Facebook"));
const TwitterFeed = dynamic(() => import("@components/feeds/Twitter"));
const YoutubeFeed = dynamic(() => import("@components/feeds/Youtube"));
import { isEmpty } from "lodash";

const TabFeed = () => {
  const [tab, setTab] = useState(0);

  let tabItem = [
    {
      icon: "Twitter",
      component: TwitterFeed,
    },
    {
      icon: "Facebook",
      component: Facebook,
    },
    {
      icon: "YouTube",
      component: YoutubeFeed,
    },
  ];

  const handleClick = useCallback(
    (index: number) => {
      setTab(index);
    },
    [tab]
  );

  const FeedComponent = useMemo(() => {
    const NewsMethod = tabItem[tab];

    return NewsMethod?.component;
  }, [tab]);

  return !isEmpty(tabItem) ? (
    <Tab.Group>
      <Tab.List
        className={
          "flex flex-nowrap justify-between px-6 border-b-[1px] border-solid border-[#E8E8E8]"
        }
      >
        {tabItem?.map((tab, index) => {
          return (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "py-4 mb-[-1px] px-4 sm:px-6 focus:outline-none text-black",
                  selected
                    ? "border border-solid border-[#E8E8E8] border-b-transparent rounded-tl rounded-tr bg-white -mb-px text-primary"
                    : ""
                )
              }
              onClick={() => handleClick(index)}
            >
              {tab?.icon}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels
        className={
          "mt-8 px-8 max-h-[550px] overflow-x-hidden overflow-y-auto flex flex-col gap-y-8"
        }
      >
        {tabItem?.map((_, index) => {
          return (
            <Tab.Panel key={index}>
              <FeedComponent />
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  ) : (
    <span className="sr-only">No tab content found</span>
  );
};

export default TabFeed;
