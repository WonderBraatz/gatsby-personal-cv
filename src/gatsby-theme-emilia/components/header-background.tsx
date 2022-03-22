/** @jsx jsx */
import * as React from "react";
import { jsx, useColorMode } from "theme-ui";
import BGPattern from "/Volumes/Samsung_T5/Privat/CV Website/gatsby-personal-cv/src/gatsby-theme-emilia/assets/bg-pattern2";

const HeaderBackground = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <React.Fragment>
      <div
        sx={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: `100%`,
          height: `200%`,
          color: `backgroundPattern`,
          svg: {
            height: `200%`,
            width: `100%`,
          },
        }}
      >
        <BGPattern />
      </div>
      <div
        sx={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 34.99%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, ${
            isDark ? `0.35` : `0.15`
          }) 100%)`,
        }}
      />
    </React.Fragment>
  );
};

export default HeaderBackground;
