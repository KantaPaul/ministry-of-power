import { SearchIcon } from "@components/icons/search";
import Fuse from "fuse.js";
import { useState, useMemo, useCallback } from "react";
import Loader from "@components/Loader";
import { useModalAction } from "@components/modal/modal.context";
import { useModalState } from "@components/modal/modal.context";
import { isEmpty } from "lodash";
import Link from "next/link";
import { Routes } from "@config/routes";

const SearchView = () => {
  const {
    data: {
      allData,
      energyLoading,
      energyOfficeLoading,
      powerLoading,
      powerOfficeLoading,
    },
  } = useModalState();

  const [searchText, setSearchText] = useState("");
  const { closeModal } = useModalAction();
  const fuseOptions = {
    minMatchCharLength: 3,
    shouldSort: true,
    threshold: 0.3,
    includeMatches: true,
    includeScore: true,
  };

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [searchText]
  );

  const postsSearch = new Fuse(allData, {
    ...fuseOptions,
    keys: ["title"],
  });

  let searchPosts = useMemo(() => {
    return postsSearch.search(searchText);
  }, [searchText, handleOnChange]);

  if (
    energyLoading ||
    energyOfficeLoading ||
    powerLoading ||
    powerOfficeLoading
  ) {
    return (
      <div className="flex justify-center py-2">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white lg:p-10 p-5">
      <div className="search bg-[#F7F7F7] rounded-[10px] lg:p-[30px] p-4 relative">
        <div className="relative">
          <input
            className="w-full h-[45px] rounded-md px-[15px] outline-none bg-white placeholder:text-[#8F8F8F] placeholder:font-semibold "
            type="text"
            placeholder="Press minimum 3 character"
            value={searchText}
            onChange={handleOnChange}
          />
          <button className="absolute top-[50%] translate-y-[-50%] right-[15px]">
            <SearchIcon />
          </button>
        </div>
        {searchPosts && !isEmpty(searchPosts) ? (
          <div className="absolute top-full left-0 w-full p-4 max-h-96 rounded-bl-md rounded-br-md bg-white mt-4 z-20 shadow-lg overflow-x-hidden overflow-y-auto">
            {searchPosts?.map((item: any, index: number) => {
              return (
                <>
                  <Link
                    href={Routes.newsSingle(
                      item?.item?.meta,
                      item?.item?.news_type,
                      item?.item?.id
                    )}
                    onClick={() => {
                      closeModal();
                      setSearchText("");
                    }}
                    key={index}
                    className="block text-base text-black p-4 border-b border-solid border-b-slate-200 transition-all duration-300 hover:bg-slate-200 border-0 last:border-b-0"
                  >
                    <div>{item?.item?.title}</div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : searchText &&
          searchText?.length > fuseOptions?.minMatchCharLength ? (
          <div className="absolute p-6 left-0 top-full shadow-md bg-white w-full">
            No Content Found
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchView;
