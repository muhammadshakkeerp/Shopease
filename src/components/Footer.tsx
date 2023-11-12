// Footer.tsx

import React from "react";
import { footerData, footerLinks } from "../assets/footerUtility";
import { FooterDataProps } from "../assets/types";
import { Link } from "react-router-dom";

const Footer: React.FC<FooterDataProps> = () => {
  return (
    <div>
      <div>
        {Object.keys(footerData).map((key, index) => {
          const section: {
            heading: string;
            content: string;
          } = footerData[key];
          return (
            <div key={index} className="opacity-40">
              <p className="primary-font capitalize">{key}</p>
              <h5 className="text-[12px]">{section.heading}</h5>
              <div
                className="text-[7px]"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              <br />
            </div>
          );
        })}
      </div>
      <footer className="footer-bg flex justify-between md:py-10 md:px-10">
        {footerLinks?.map((item, index) => (
          <ul key={index}>
            {" "}
            <li className="text-gray-500 text-[20px]">{item.title}</li>{" "}
            <div className="flex flex-col gap-5 md:mt-5">
              {item?.links.map((subLink, index) => (
                <Link to="" key={index}>
                  {" "}
                  <li className="text-white primary-font font-bold">
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

export { Footer };
