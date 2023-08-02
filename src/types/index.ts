export type Officers = {
  id: number;
  officer_name: string;
  officer_name_en?: string;
  designation: string;
  designation_en?: string;
  organizations: string;
  description: string;
  description_en: string;
  image: string;
  order: string;
};

export type Biography = {
  id: string;
  title: string;
  title_en: string;
  short_description: string;
  short_description_en: string;
  description: string;
  description_en: string;
  image: string;
};

export type About = {
  id: number;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
};

export type EServiceProps = {
  id: number;
  image: string;
  internal_link: string;
  order: string;
  title: string;
  title_en: string;
  type: string;
};

export type RunningProject = {
  id: string;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  image: string;
  order: string;
};

export type Documentation = {
  id: number;
  document_type: string;
  title: string;
  title_en: string;
  publication_date: string;
  file_link: string;
  word_file: string;
  doc_file: string;
  description: string;
  description_en: string;
  image: string;
  order: string;
};

export type Youtube = {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: Date;
    publishedAt: Date;
    thumbnails: {
      high: {
        height: number;
        url: string;
        width: number;
      };
    };
    title: string;
  };
};

export type OfficersNew = {
  designation: string;
  designation_en: string;
  email: string;
  fax: string;
  id: number;
  image: string;
  mobile: string;
  name_bn: string;
  name_en: string;
  order: string;
  phone_home: string;
  phone_office: string;
  type: string;
  type_slug: string;
};

export type OfficerType = {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  order: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export interface MenuItem {
  id: number;
  menu_id: string;
  parent_id: string;
  title: string;
  title_en: string;
  link: string;
  order: string;
}

export interface NavMenu extends MenuItem {
  extranal_link: string;
  children: [MenuItem[]];
}

export interface PaginatorInfo<T> {
  currentPage: number;
  data: T[];
  perPage: number;
  count: number;
  total: number;
  last_page: number;
}

export interface HeaderSlider {
  caption: string;
  caption_en: string;
  id: number;
  image: string;
  order: string;
  short_description: string;
  short_description_en: string;
}

export interface AchievementImage {
  caption_bn: string;
  caption_en: string;
  id: number;
  image: string;
}

export interface Achievement {
  album_type_id: number;
  album_type_title_bn: string;
  album_type_title_en: string;
  id: number;
  images: AchievementImage[];
  order: string;
  title_bn: string;
  title_en: string;
  video_url: null;
}

export interface OfficerPaginator extends PaginatorInfo<Officers> {}
