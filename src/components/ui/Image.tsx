import NextImage, { ImageProps } from "next/image";
import cn from "classnames";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Image = ({
  src,
  layout = "fill",
  className,
  imageClassName,
  width,
  height,
  quality,
  alt,
  ...props
}: {
  className?: string;
  width?: ImageProps["width"];
  height?: ImageProps["height"];
  imageClassName?: string;
  src: ImageProps["src"];
  layout?: ImageProps["layout"];
  quality?: ImageProps["quality"];
  alt: ImageProps["alt"];
}) => {
  return (
    <div className={cn("image-container", className)}>
      <NextImage
        {...props}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        className={cn("image", imageClassName)}
        src={src}
        layout={layout}
        style={{ height: "100%", width: "100%" }}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default Image;
