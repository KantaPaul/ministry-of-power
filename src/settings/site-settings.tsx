import { ROUTES } from "@utils/routes";

export const siteSettings = {
  name: "Ministry of Power, Energy and Mineral Resources",
  logo: {
    darkUrl: "/assets/img/site-logo.png",
    lightUrl: "/assets/img/logo-light.svg",
    alt: "Ministry of Power, Energy and Mineral Resources",
    href: "/",
    width: 168,
    height: 48,
  },
  footer_links: {
    title: "Development Partner",
    menu: [
      {
        id: 1,
        path: ROUTES?.WORLD_BANK,
        label: "World Bank",
        target: "_blank",
        rel: "nofollow",
      },
      {
        id: 2,
        path: ROUTES?.ADB,
        label: "ADB",
        target: "_blank",
        rel: "nofollow",
      },
      {
        id: 3,
        path: ROUTES?.JICA,
        label: "JICA",
        target: "_blank",
        rel: "nofollow",
      },
    ],
  },
  contact: {
    title: "Contact",
    mails: [
      {
        id: 1,
        path: "mailto:info@mpemr.gov.bd",
        label: "info@mpemr.gov.bd",
      },
    ],
    tels: [
      {
        id: 1,
        path: "tel:9551261",
        label: "9551261",
      },
      {
        id: 2,
        path: "tel:9555962",
        label: "9555962",
      },
      {
        id: 3,
        path: "tel:9566099",
        label: "9566099",
      },
      {
        id: 4,
        path: "tel:9572097",
        label: "9572097",
      },
      {
        id: 5,
        path: "tel:9554664",
        label: "9554664",
      },
    ],
  },
  social: [
    {
      id: 1,
      icon: "FacebookIcon",
      path: ROUTES?.FACEBOOK,
      target: "_blank",
      rel: "nofollow",
      label: "Facebook",
    },
    {
      id: 2,
      icon: "TwitterIcon",
      path: ROUTES?.TWITTER,
      target: "_blank",
      rel: "nofollow",
      label: "Twitter",
    },
    {
      id: 3,
      icon: "YouTubeIcon",
      path: ROUTES?.YOUTUBE,
      target: "_blank",
      rel: "nofollow",
      label: "Youtube",
    },
    {
      id: 4,
      icon: "InstagramIcon",
      path: ROUTES?.INSTAGRAM,
      target: "_blank",
      rel: "nofollow",
      label: "Youtube",
    },
  ],
  copyright: {
    text: `Copyright @ ${new Date().getFullYear()} All rights reserved. Power by`,
    label: "absolutionit.com",
    path: ROUTES?.CREATOR_SITE_URL,
    target: "_blank",
    rel: "nofollow",
  },
  necessary_links: [
    {
      title: "Information",
      data: [
        {
          id: 1,
          path: ROUTES?.PRIME_MINISTER_OFFICE,
          label: "Prime Minister's Office",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 2,
          path: ROUTES?.BANGLADESH_PARLIAMENT,
          label: "Bangladesh Parliament",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 3,
          path: ROUTES?.ACCESS_TO_INFO,
          label: "Access To Information (a2i)",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 4,
          path: ROUTES?.NATIONAL_WEB_PORTAL,
          label: "National Web Portal of Bangladesh",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 5,
          path: ROUTES?.NATIONAL_E_SERVICE,
          label: "National E-Service",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 6,
          path: ROUTES?.FORMS_SERVICE,
          label: "All Forms of Service",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 7,
          path: ROUTES?.SEBA_KUNJA,
          label: "Sebakunja",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 8,
          path: ROUTES?.POST_CODE,
          label: "Post Code",
          target: "_blank",
          rel: "nofollow",
        },
      ],
    },
    {
      title: "Service",
      data: [
        {
          id: 1,
          path: ROUTES?.DESCO,
          label: "e-Services (DESCO)",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 2,
          path: ROUTES?.BPDB,
          label: "Customer Care (BPDB)",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 3,
          path: ROUTES?.DPDC,
          label: "Bill Payment (DPDC)",
          target: "_blank",
          rel: "nofollow",
        },
      ],
    },
    {
      title: "General Report",
      data: [
        {
          id: 1,
          path: ROUTES?.MAXIMUM_GENERATION,
          label: "Maximum Generation",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 2,
          path: ROUTES?.DAILY_GENERATION_ARCHIVE,
          label: "Daily Generation Archive",
          target: "_blank",
          rel: "nofollow",
        },
        {
          id: 3,
          path: ROUTES?.DAILY_GENERATION_REPORT,
          label: "BPDB Daily Generation Report",
          target: "_blank",
          rel: "nofollow",
        },
      ],
    },
  ],
};
