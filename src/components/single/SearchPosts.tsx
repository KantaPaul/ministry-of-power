import { isEmpty } from "lodash";
import Link from "next/link";
import { Routes } from "@config/routes";

type SearchPostContentProps = {
  posts: any;
  meta: string;
};

const SearchPostContent: React.FC<SearchPostContentProps> = ({
  posts,
  meta,
}) => {
  return (
    <>
      {posts && !isEmpty(posts) ? (
        <div className="absolute top-full left-0 w-full p-4 max-h-96 rounded-bl-md rounded-br-md bg-white mt-4 z-20 shadow-lg">
          {posts?.map((item: any, index: number) => {
            return (
              <>
                <Link
                  href={Routes.newsSingle(
                    meta,
                    item?.item?.news_type,
                    item?.item?.id
                  )}
                  key={index}
                  className="block text-sm text-black p-2 border-b border-solid border-b-slate-200 transition-all duration-300 hover:bg-slate-200 border-0 last:border-b-0"
                >
                  <div>{item?.item?.title}</div>
                </Link>
              </>
            );
          })}
        </div>
      ) : (
        <div className="sr-only">No Content Found</div>
      )}
    </>
  );
};

export default SearchPostContent;
