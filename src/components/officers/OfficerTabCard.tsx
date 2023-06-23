import { OfficerType } from "@type/index";
import cn from "classnames";
import { Tab } from "@headlessui/react";
import Heading from "@components/officers/widgets/Heading";
import { Fragment } from "react";
import { isEmpty } from "lodash";
import OfficerCard from "@components/officers/OfficerCard";

const OfficerTabCard = ({
  types,
  title,
  className,
  ...props
}: {
  types: OfficerType[];
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn(className)} {...props}>
      <Heading title={title} className="lg:!mb-0" />
      {!isEmpty(types) && types && (
        <div className="lg:-mt-10">
          <Tab.Group>
            <Tab.List className="tab-btn flex flex-wrap lg:justify-end gap-3 relative z-10">
              {types?.map((type: OfficerType, index: number) => {
                return (
                  <Tab as={Fragment} key={index}>
                    {({ selected }) => (
                      <span
                        className={cn(
                          "font-medium text-white px-4 rounded-2xl h-[30px] flex items-center capitalize cursor-pointer",
                          selected ? "bg-primary active" : "bg-secondary"
                        )}
                      >
                        {type?.name}
                      </span>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
            <Tab.Panels>
              {types?.map((type: OfficerType, index: number) => {
                return (
                  <Tab.Panel
                    className={
                      "md:mt-11 mt-6 card-group flex flex-wrap justify-center gap-[10px]"
                    }
                    key={index}
                  >
                    <OfficerCard slug={type?.slug} showTitle={false} />
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      )}
    </div>
  );
};

export default OfficerTabCard;
