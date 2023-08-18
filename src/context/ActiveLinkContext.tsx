import { LANGUAGES, NAV_LINKS, NAV_LINKSInterface } from "@/utils/cms-data";
import { createContext, useEffect, useState } from "react";

let ActiveLinkContext = createContext({
  selectedLink: "",
  subLink: "",
  setSelectedLink: (props: keyof typeof NAV_LINKS | "") => {},
  setSubLink: (props: string) => {},
});

export const ActiveLinkProvider = (props: any) => {
  const [subLink, setSubLink] = useState<string>("");

  let selectedLanguage = LANGUAGES.find((language) => language.shortName.toLowerCase() === props.lng) ?? LANGUAGES[0];
  const [selectedLink, setSelectedLink] = useState<keyof typeof NAV_LINKS | "">("");
  const [links, setLinks] = useState({});
  const [urlParams, setUrlParams] = useState<string[]>([]);

  useEffect(() => {
    setUrlParams(window.location.href.split("/"));
    let obj = {};
    Object.keys(NAV_LINKS).forEach((key) => {
      let linkArr = NAV_LINKS[key as keyof typeof NAV_LINKS].map(([_, link]) => link.slice(1));
      Object.assign(obj, { [key]: linkArr });
    });

    setLinks(obj);
  }, []);

  useEffect(() => {
    let set = new Set(urlParams);

    Object.entries(links).forEach(([_, linksArr]) => {
      // @ts-ignore
      linksArr.forEach((link) => {
        if (link && link !== "#" && set.has(link)) {
          // @ts-ignore
          setSelectedLink(_);
          setSubLink(`/${link}`);
          return;
        }
      });
    });
  }, [links, urlParams]);

  let context = {
    selectedLink,
    subLink,
    setSelectedLink,
    setSubLink,
  };
  // @ts-ignore
  return <ActiveLinkContext.Provider value={context}>{props.children}</ActiveLinkContext.Provider>;
};
export default ActiveLinkContext;
