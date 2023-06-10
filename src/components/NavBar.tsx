import Image from "@components/ui/Image";
import { useState } from "react";
import { useMenuItems } from "@framework/menu-item";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import Link from "next/link";
import { VideoIcon } from "@components/icons/video-icons";
import { SearchIcon } from "@components/icons/search-icon";
import { useCallback, useMemo } from "react";
import { useModalAction } from "@components/modal/modal.context";
import {
  useEnergyDivisionNews,
  useEnergyDivisionOfficeNews,
} from "@framework/energy-division-news";
import {
  usePowerDivisionNews,
  usePowerDivisionOfficeNews,
} from "@framework/power-division-news";

const NavBar = () => {
  const {
    menuItems: navData,
    isLoading,
    error,
  }: { menuItems: any; isLoading: boolean; error: any } = useMenuItems();
  const [token, setToken] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const params = {
    limit: 1000,
  };
  const { energyNews, isLoading: energyLoading } =
    useEnergyDivisionNews(params);

  const { energyOfficeNews, isLoading: energyOfficeLoading } =
    useEnergyDivisionOfficeNews(params);

  const { powerNews, isLoading: powerLoading } = usePowerDivisionNews(params);

  const { powerOfficeNews, isLoading: powerOfficeLoading } =
    usePowerDivisionOfficeNews(params);

  const { openModal } = useModalAction();

  const energyNewsData = useMemo(() => {
    // @ts-ignore
    return energyNews?.data?.data?.map((news: any) => ({
      ...news,
      meta: "news",
    }));
  }, [energyNews, energyLoading]);

  const powerNewsData = useMemo(() => {
    // @ts-ignore
    return powerNews?.data?.data?.map((news: any) => ({
      ...news,
      meta: "news",
    }));
  }, [powerNews, powerLoading]);

  const energyOfficeNewsData = useMemo(() => {
    // @ts-ignore
    return energyOfficeNews?.data?.data?.map((news: any) => ({
      ...news,
      meta: "office",
    }));
  }, [energyOfficeNews, energyOfficeLoading]);

  const powerOfficeNewsData = useMemo(() => {
    // @ts-ignore
    return powerOfficeNews?.data?.data?.map((news: any) => ({
      ...news,
      meta: "office",
    }));
  }, [powerOfficeNews, powerOfficeLoading]);

  const allData = useMemo(() => {
    let arr = [
      energyNewsData,
      powerNewsData,
      energyOfficeNewsData,
      powerOfficeNewsData,
    ];
    const newArr = Array?.prototype?.concat(...arr);
    return newArr;
  }, [
    energyNewsData,
    powerNewsData,
    energyOfficeNewsData,
    powerOfficeNewsData,
  ]);

  const handleSearchInfoModal = useCallback(() => {
    return openModal("SEARCH_VIEW", {
      allData,
      energyLoading,
      energyOfficeLoading,
      powerLoading,
      powerOfficeLoading,
    });
  }, [
    allData,
    energyLoading,
    energyOfficeLoading,
    powerLoading,
    powerOfficeLoading,
  ]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-2">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-40">
        <div className="container mx-auto">
          <Alert type="error" message={error?.message} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F2F2F2" }} className="relative z-50">
      <div className="content_body">
        <div className="hidden min-[1200px]:flex justify-between">
          <div className="flex item-center">
            <ul className="flex items-center gap-x-5">
              {navData?.data && navData?.data?.length
                ? navData?.data?.map((el: any) => (
                    <li
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setToken(el.id)}
                      onMouseLeave={() => setToken(0)}
                      className="nav_text menu_parent px-2 py-5"
                      key={el.id}
                    >
                      {el.children[0] && el.children[0].length ? (
                        <Link
                          href="#"
                          className="hover:text-primary transition-colors duration-300"
                        >
                          {el.title}{" "}
                          <span>
                            <span>+</span>
                          </span>
                        </Link>
                      ) : (
                        <Link
                          href={el.link}
                          className="hover:text-primary transition-colors duration-300"
                        >
                          {el.title}{" "}
                        </Link>
                      )}
                      {el.children[0] && el.children[0].length ? (
                        <ul className="menu_child rounded-b-md">
                          {el.children[0].map((el2: any) => (
                            <li
                              key={el2.id}
                              style={{
                                display: `${
                                  token == el2.parent_id ? "block" : "none"
                                }`,
                              }}
                              className="nav_text py-3 px-6 first:pt-6 last:pb-6"
                            >
                              <Link
                                href={el2.link}
                                className="hover:text-primary transition-colors duration-300"
                              >
                                {el2.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
          <div className="flex gap-x-5 py-5 text-black">
            <div onClick={handleSearchInfoModal} className="cursor-pointer">
              <SearchIcon />
            </div>
            <div className="border border-gray-300 rounded mx-1"></div>
            <Link
              href="https://www.youtube.com/@MpemrGovBd"
              target="_blank"
              rel="nofollow"
              className="block"
            >
              <VideoIcon />
            </Link>
          </div>
        </div>
        <div className="flex min-[1200px]:hidden justify-between items-center px-1">
          <div onClick={() => setOpenMenu(!openMenu)}>
            <Image
              width={20}
              height={20}
              imageClassName="cursor-pointer"
              src="/assets/img/icon/icon-menu.svg"
              alt="Icon"
              layout="fixed"
            />
          </div>
          <div className="flex gap-x-5 py-5 text-black">
            <div onClick={handleSearchInfoModal} className="cursor-pointer">
              <SearchIcon />
            </div>
            <div className="border border-gray-300 rounded mx-1"></div>
            <Link
              href="https://www.youtube.com/@MpemrGovBd"
              target="_blank"
              rel="nofollow"
              className="block"
            >
              <VideoIcon />
            </Link>
          </div>
        </div>
        <div>
          {openMenu ? (
            <div>
              <ul className="flex flex-col items-start px-3 h-96 lg:h-auto overflow-auto lg:overflow-hidden	">
                {navData.data && navData.data.length
                  ? navData.data.map((el: any) => (
                      <li
                        style={{ cursor: "pointer" }}
                        className="nav_text menu_parent px-2 py-5"
                        key={el.id}
                      >
                        {el.children[0] && el.children[0].length ? (
                          <a
                            onClick={() =>
                              setToken(token === el.id ? 0 : el.id)
                            }
                          >
                            {el.title}{" "}
                          </a>
                        ) : (
                          <Link href={el.link}>{el.title} </Link>
                        )}
                        <span>
                          {el.children[0] && el.children[0].length ? (
                            <span className="px-2">
                              {token === el.id ? (
                                <span onClick={() => setToken(0)}>-</span>
                              ) : (
                                <span onClick={() => setToken(el.id)}>+</span>
                              )}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                        {el.children[0] && el.children[0].length ? (
                          <ul>
                            {el.children[0].map((el2: any) => (
                              <li
                                key={el2.id}
                                style={{
                                  display: `${
                                    token == el2.parent_id ? "block" : "none"
                                  }`,
                                }}
                                className="nav_text py-3 px-6 first:py-6 last:pb-6"
                              >
                                <Link href={el2.link}>{el2.title}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
