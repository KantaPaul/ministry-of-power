import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } from "@lib/index";

export const API_ENDPOINTS = {
  ABOUT_US: "/about-us",
  BIOGRAPHY: "/biography",
  E_SERVICE: "/public-service-category",
  HEADER_SLIDER: "/header-slider",
  LATEST_NEWS: "/latest-news",
  MENU_ITEM: "/menu-item",
  ENERGY_DIVISION_NEWS: "/energy-division-news",
  POWER_DIVISION_NEWS: "/power-division-news",
  ENERGY_DIVISION_OFFICE_NEWS: "/energy-office-doptor-news",
  POWER_DIVISION_OFFICE_NEWS: "/power-office-doptor-news",
  PARTNER_LIST: "/partner-list",
  GALLERY: "/photo-video",
  NEWS_POWER: "/news/power",
  NEWS_ENERGY: "/news/energy",
  OFFICERS_LIST: "/officer-list",
  RUNNING_PROJECT: "/running-project",
  DOCUMENT_INFO: "/document-type-info",
  OFFICE_ENERGY: "/office/energy",
  OFFICE_POWER: "/office/power",
  YOUTUBE: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=1000`,
};
