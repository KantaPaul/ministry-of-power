import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import { HttpClient } from "@framework/client/http-client";
import {
  Officers,
  Biography,
  About,
  EServiceProps,
  RunningProject,
  Youtube,
} from "@type/index";
import axios from "axios";

class Client {
  aboutUs = {
    all: (params?: any) =>
      HttpClient.get<About>(API_ENDPOINTS.ABOUT_US, { ...params }),
  };
  biography = {
    all: (params?: any) =>
      HttpClient.get<Biography>(API_ENDPOINTS.BIOGRAPHY, { ...params }),
  };
  e_service = {
    all: (params?: any) =>
      HttpClient.get<EServiceProps>(API_ENDPOINTS.E_SERVICE, { ...params }),
  };
  headerSlider = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.HEADER_SLIDER, { ...params }),
  };
  latestNews = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.LATEST_NEWS, { ...params }),
  };
  menuItem = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.MENU_ITEM, { ...params }),
  };
  energyDivisionNews = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.ENERGY_DIVISION_NEWS, { ...params }),
  };
  energyDivisionOfficeNews = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.ENERGY_DIVISION_OFFICE_NEWS, { ...params }),

    get: (params?: any) =>
      HttpClient.get(`${API_ENDPOINTS.OFFICE_ENERGY}/${params}`),
  };
  powerDivisionNews = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.POWER_DIVISION_NEWS, { ...params }),
  };
  powerDivisionOfficeNews = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.POWER_DIVISION_OFFICE_NEWS, { ...params }),

    get: (params?: any) =>
      HttpClient.get(`${API_ENDPOINTS.OFFICE_POWER}/${params}`),
  };
  partner = {
    all: (params?: any) =>
      HttpClient.get(API_ENDPOINTS.PARTNER_LIST, { ...params }),
  };
  gallery = {
    all: (params?: any) => HttpClient.get(`${API_ENDPOINTS.GALLERY}/${params}`),
  };
  newsPowerSingle = {
    get: (params?: any) =>
      HttpClient.get(`${API_ENDPOINTS.NEWS_POWER}/${params}`),
  };
  newsEnergySingle = {
    get: (params?: any) =>
      HttpClient.get(`${API_ENDPOINTS.NEWS_ENERGY}/${params}`),
  };
  officers = {
    get: (params?: any) =>
      HttpClient.get<Officers>(`${API_ENDPOINTS.OFFICERS_LIST}`, {
        ...params,
      }),
  };
  runningProject = {
    get: (params?: any) =>
      HttpClient.get<RunningProject>(`${API_ENDPOINTS.RUNNING_PROJECT}`, {
        ...params,
      }),
  };
  documentInfo = {
    get: (params?: any) =>
      HttpClient.get<RunningProject>(`${API_ENDPOINTS.DOCUMENT_INFO}`, {
        ...params,
      }),
  };
  youtube = {
    get: async () => {
      const response = await axios.get<Youtube[]>(API_ENDPOINTS.YOUTUBE);
      return response.data;
    },
  };
}

export default new Client();
