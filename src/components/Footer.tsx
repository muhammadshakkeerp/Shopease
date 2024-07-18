import React from "react";
import { footerData, footerLinks } from "../assets/footerUtility";
import { FooterDataProps } from "../types/layoutTypes";
import { Link } from "react-router-dom";

export const Footer: React.FC<FooterDataProps> = () => {
  return (
    <div>
      <div>
        {Object.keys(footerData).map((key, index) => {
          const section: {
            heading: string;
            content: string;
          } = footerData[key];
          return (
            <div key={index} className="opacity-40 m-0 md:mx-5">
              <p className="primary-font capitalize">{key}</p>
              <h5 className="text-[0.5em] md:text-[0.75em]">{section.heading}</h5>
              <div
                className="text-[0.25em] md:text-[0.8em]"
              // dangerouslySetInnerHTML={{ __html: section.content }}
              >{section.content}
              </div>
              <br />
            </div>

          );
        })}
      </div>
      <footer className="footer-bg flex flex-col md:flex-row justify-between px-2 py-3 md:py-10 md:px-10">
        {footerLinks?.map((item, index) => (
          <ul key={index}>
            {" "}
            <li className="text-gray-500 text-[20px] underline">{item.title}</li>{" "}
            <div className="flex flex-col md:gap-5 md:mt-5">
              {item?.links.map((subLink, index) => (
                <Link to="" key={index}>
                  {" "}
                  <li className="text-white/80 primary-font md:font-bold">
                    {subLink.text}
                  </li>{" "}
                </Link>
              ))}
            </div>
          </ul>
        ))}
      </footer>
    </div>
  );
};


