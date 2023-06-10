export const Routes = {
  newsSingle: (meta: string, type: string, slug: string) => {
    return `/${encodeURIComponent(
      meta.toLowerCase() as string
    )}/${encodeURIComponent(type)}/${encodeURIComponent(slug)}`;
  },
  news: (meta: string, type: string) => {
    return `/${encodeURIComponent(
      meta.toLowerCase() as string
    )}/${encodeURIComponent(type)}`;
  },
  officer: (slug: string) => {
    return `/officers/${encodeURIComponent(slug)}`;
  },
  biography: (slug: string) => {
    return `/biography/${encodeURIComponent(slug)}`;
  },
};
