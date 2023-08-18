import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Ecosystem"),
    items: [
      {
        label: t("Trade"),
        href: "/swap",
      },
      {
        label: t("Earn"),
        href: "/farms",
      },
      {
        label: t("Game"),
        href: "/prediction",
      },
      {
        label: t("NFT"),
        href: "/nfts",
      },
      {
        label: t("Tokenomics"),
        href: "https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics",
      },
      {
        label: t("Litepaper"),
        href: "https://assets.pancakeswap.finance/litepaper/v2litepaper.pdf",
      },
      {
        label: t("CAKE Emission Projection"),
        href: "https://analytics.pancakeswap.finance/",
      },
      {
        label: t("Terms Of Service"),
        href: "https://pancakeswap.finance/terms-of-service",
      },
      {
        label: "—",
      },
      {
        label: t("Merchandise"),
        href: "https://merch.pancakeswap.finance/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Business",
    items: [
      {
        label: t("Farms and Syrup Pools"),
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfQNsAfh98SAfcqJKR3is2hdvMRdnvfd2F3Hql96vXHgIi3Bw/viewform",
      },
      {
        label: t("IFO"),
        href: "https://docs.google.com/forms/d/e/1FAIpQLSf0Vmy3k0KyXtXwqxr8QLjD8Xd6KBAmkYxcBRRVTUYJVX17fA/viewform",
      },
      {
        label: t("NFT Marketplace"),
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdLjOEiJT4s8No2QT2TKknuUSlVMndARFgng4MDJMsoFQjR-A/viewform",
      },
      {
        label: t("Multichain Deployment"),
        href: "https://docs.pancakeswap.finance/multichain",
      },
      // {
      //   label: t("Etherum Expansion"),
      //   href: "/swap",
      // },
      // {
      //   label: t("Aptos Development"),
      //   href: "/swap",
      // },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: t("Contributing"),
        href: "https://docs.pancakeswap.finance/developers/contributing",
      },
      {
        label: t("Github"),
        href: "https://github.com/pancakeswap",
      },
      {
        label: t("Bug Bounty"),
        href: "https://docs.pancakeswap.finance/developers/bug-bounty",
      },
      // {
      //   label: t("Audits"),
      //   href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      // },
    ],
  },
  {
    label: t("Support"),
    items: [
      {
        label: t("Contact"),
        href: "https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      // {
      //   label: t("Customer Support"),
      //   href: "https://docs.pancakeswap.finance/contact-us/customer-support",
      // },
      {
        label: t("Troubleshooting"),
        href: "https://docs.pancakeswap.finance/readme/help/troubleshooting",
      },
      {
        label: t("Documentation"),
        href: "https://docs.pancakeswap.finance/",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      {
        label: t("Terms Of Service"),
        href: "https://pancakeswap.finance/terms-of-service",
      },
      {
        label: t("Blog"),
        href: "https://blog.pancakeswap.finance/",
      },
      {
        label: t("Brand Assets"),
        href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/brand",
      },
      {
        label: t("Careers"),
        href: "https://docs.pancakeswap.finance/team/become-a-chef",
      },
    ],
  },
];
