// Footer.tsx

import React from "react";
import footerData from "../assets/footerUtility";
import { FooterDataProps } from "../assets/types";

const Footer: React.FC<FooterDataProps> = () => {
  return (
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
  );
};

export { Footer };
