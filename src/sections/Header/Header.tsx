"use client";
import { useContext, useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { LANGUAGES, LANGUAGE, NAV_LINKS } from "@/utils/cms-data";
import { useRouter } from "next/navigation";
import ActiveLinkContext from "@/context/ActiveLinkContext";

export interface headerPropsInterface {
  className?: string;
  subLink: string;
  setSubLink: any;
  selectedLanguage: LANGUAGE;
  setSelectedLanguage?: any;
  selectedLink: string;
  setSelectedLink: any;
  changeLanguage?: any;
  lng?: any;
}
const Header = ({ className, lng }: { className?: string; lng: any }) => {
  let selectedLanguage = LANGUAGES.find((language) => language.shortName.toLowerCase() === lng) ?? LANGUAGES[0];

  let { selectedLink, setSelectedLink, subLink, setSubLink } = useContext(ActiveLinkContext);
  return (
    <>
      <DesktopHeader
        subLink={subLink}
        setSubLink={setSubLink}
        selectedLanguage={selectedLanguage}
        // setSelectedLanguage={setSelectedLanguage}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        lng={lng}
      />
      <MobileHeader
        subLink={subLink}
        setSubLink={setSubLink}
        selectedLanguage={selectedLanguage}
        // setSelectedLanguage={setSelectedLanguage}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        lng={lng}
      />
    </>
  );
};

export default Header;

// const [subLink, setSubLink] = useState<string>("");
// // const [selectedLanguage, setSelectedLanguage] = useState<LANGUAGE>(LANGUAGES[0]);
// let selectedLanguage = LANGUAGES.find((language) => language.shortName.toLowerCase() === lng) ?? LANGUAGES[0];
// const [selectedLink, setSelectedLink] = useState<"services" | "solutions" | "contact" | "">("");
// const [links, setLinks] = useState({});
// const [urlParams, setUrlParams] = useState<string[]>([]);

// useEffect(() => {
//   setUrlParams(window.location.href.split("/"));
//   let obj = {};
//   Object.keys(NAV_LINKS).forEach((key) => {
//     let linkArr = NAV_LINKS[key as keyof typeof NAV_LINKS].map(([_, link]) => link.slice(1));
//     Object.assign(obj, { [key]: linkArr });
//   });

//   setLinks(obj);
// }, []);

// useEffect(() => {
//   let set = new Set(urlParams);

//   Object.entries(links).forEach(([_, linksArr]) => {
//     // @ts-ignore
//     linksArr.forEach((link) => {
//       if (link && link !== "#" && set.has(link)) {
//         // @ts-ignore
//         setSelectedLink(_);
//         setSubLink(`/${link}`);
//         return;
//       }
//     });
//   });
// }, [links, urlParams]);
