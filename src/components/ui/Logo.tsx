import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";

export const LogoDark: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={siteSettings?.logo?.href}
      className={cn("d-block", className)}
      {...props}
    >
      <Image
        src={siteSettings?.logo?.darkUrl}
        alt={siteSettings?.logo?.alt}
        height={siteSettings?.logo?.height}
        width={siteSettings?.logo?.width}
        layout="fixed"
        // loading="eager"
      />
    </Link>
  );
};

export const LogoLight: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={siteSettings?.logo?.href}
      className={cn("d-block", className)}
      {...props}
    >
      <Image
        src={siteSettings?.logo?.lightUrl}
        alt={siteSettings?.logo?.alt}
        height={siteSettings?.logo?.height}
        width={siteSettings?.logo?.width}
        layout="fixed"
        // loading="eager"
      />
    </Link>
  );
};
