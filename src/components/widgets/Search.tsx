import { SearchIcon } from "@components/icons/search";
import Fuse from "fuse.js";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import SearchPostContent from "@components/single/SearchPosts";

type SearchWidgetContentProps = {
  posts: any;
  meta: string;
};

const SearchWidget: React.FC<SearchWidgetContentProps> = ({ posts, meta }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const fuseOptions = {
    // minMatchCharLength: 3,
    // shouldSort: true,
    threshold: 0.3,
    // location: 0,
    // distance: 100,
    includeMatches: true,
    includeScore: true,
    // useExtendedSearch: true,
  };

  const postsSearch = new Fuse(posts, {
    ...fuseOptions,
    keys: ["title"],
  });

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [searchText]
  );

  let searchPosts = useMemo(() => {
    return postsSearch.search(searchText);
  }, [searchText, handleOnChange]);

  useEffect(() => {
    setSearchText("");
  }, [router?.query]);

  return (
    <>
      <div className="search bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px] relative">
        <div className="relative">
          <input
            className="w-full h-[45px] rounded-md px-[15px] outline-none bg-white placeholder:text-[#8F8F8F] placeholder:font-semibold "
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleOnChange}
          />
          <button className="absolute top-[50%] translate-y-[-50%] right-[15px]">
            <SearchIcon />
          </button>

          <SearchPostContent posts={searchPosts} meta={meta} />
        </div>
      </div>
    </>
  );
};

export default SearchWidget;
