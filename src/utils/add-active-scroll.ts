import { useEffect, RefObject } from "react";

export function addActiveScroll<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  topOffset: number = 0
) {
  useEffect(() => {
    const element = ref?.current;
    const listener = () => {
      if (window.scrollY > topOffset) {
        element?.classList?.add("navbar_fixed");
      } else {
        element?.classList?.remove("navbar_fixed");
      }
    };
    document.addEventListener("scroll", listener);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);
}
