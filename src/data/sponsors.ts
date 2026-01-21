export type Sponsor = {
  name: string;
  logo: string;
  url?: string;
};

export const sponsors = {
  main: [
    { name: "Market Sutra", logo: "/sponsors/market_sutra_nobackground.png", url: "https://example.com" },
    { name: "Codeqis", logo: "/sponsors/codeqis_nobackground.jpg", url: "https://example.com" },
  ],
  co: [
    { name: "Urban Forge", logo: "/sponsors/urban forge.png", url: "https://example.com" },
    { name: "Topco", logo: "/sponsors/topco.png", url: "https://example.com" },
    { name: "Topco Fair", logo: "/sponsors/fair(topco).png", url: "https://example.com" },
  ],
  sub: [
    { name: "Urbanhub", logo: "/sponsors/UrbanHub.png", url: "https://example.com" },
    { name: "Rawculture", logo: "/sponsors/rawculture.png", url: "https://example.com" },
    { name: "Glinjose", logo: "/sponsors/glinjose.png", url: "https://example.com" },
    { name: "OutWay Holidays", logo: "/sponsors/OutwayPrimaryLogo.png", url: "https://example.com" },
    { name: "UpCode", logo: "/sponsors/UPCODE_LOGO.png", url: "https://example.com" },
    { name: "Infomac", logo: "/sponsors/infomac.png", url: "https://example.com" },
  ],
};
