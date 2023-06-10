import { NextSeo, NextSeoProps } from "next-seo";
interface SeoProps extends NextSeoProps {
  url?: string;
  images?: any[] | null;
}
const Seo = ({ title, description, images, url, ...props }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      openGraph={{
        ...(Boolean(url) && {
          url: url,
        }),
        title,
        description,
        ...(Boolean(images) && {
          images: images?.map((item) => ({
            url: item,
            alt: title,
          })),
        }),
      }}
      {...props}
    />
  );
};

export default Seo;
