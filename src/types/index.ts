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