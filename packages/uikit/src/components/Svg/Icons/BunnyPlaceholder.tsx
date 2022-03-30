import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
  <svg width={72} height={72} {...props}>
    <path
      style={{
        fill: "#000000",
        stroke: "none",
      }}
      d="M0 0L0 69L1 69C3.18002 52.8899 10.9972 43.704 27 40L27 35L24 37L24 33L21 35L8 17L32 19L32 17L39 21L44 21L45 17L49 17C52.8901 17.4916 58.2424 14.8294 61.5772 17.8588C66.7306 22.5402 56.0668 29.8267 52 30L50 31L50 34L48 33L47 37L46 37L44 35L44 40C62.4203 43.2734 69.4136 53.8297 71 72L72 72L72 0L0 0z"
    />
    <path
      style={{
        fill: "#393939",
        stroke: "none",
      }}
      d="M32 4L32 8L39 7L39 3L32 4z"
    />
    <path
      style={{
        fill: "#cb6c0d",
        stroke: "none",
      }}
      d="M11 16L11 18L20 19L20 31L28 29L28 33C24.9606 33.1436 24.5058 34.0262 24 37L46 37L47 37L50 34L50 31L52 32C50.7866 24.6468 52.2525 19.0296 60 17L60 16L49 17L45 17L44 21C41.862 18.8372 39.8217 17.2437 39 21C32.0924 16.0648 19.4067 16.3658 11 16z"
    />
    <path
      style={{
        fill: "#834407",
        stroke: "none",
      }}
      d="M8 17L10 25L11 25L11 17L8 17z"
    />
    <path
      style={{
        fill: "#763f08",
        stroke: "none",
      }}
      d="M23 17L23 18L26 18L23 17z"
    />
    <path
      style={{
        fill: "#703c07",
        stroke: "none",
      }}
      d="M32.6667 17.3333L33.3333 17.6667L32.6667 17.3333z"
    />
    <path
      style={{
        fill: "#94581a",
        stroke: "none",
      }}
      d="M57 17L57 18L62 18L60 26C64.7187 21.2672 63.8317 17.2244 57 17z"
    />
    <path
      style={{
        fill: "#a68f8f",
        stroke: "none",
      }}
      d="M10 18C10.579 24.5823 12.9177 29.4646 20 30C19.368 21.9916 18.7178 18.079 10 18z"
    />
    <path
      style={{
        fill: "#a78357",
        stroke: "none",
      }}
      d="M52 25L53 25C54.3978 20.5333 57.5581 19.4583 62 19C56.4243 16.6664 52.45 19.1018 52 25z"
    />
    <path
      style={{
        fill: "#844a12",
        stroke: "none",
      }}
      d="M19 19L19 26L20 26L19 19z"
    />
    <path
      style={{
        fill: "#a68f8f",
        stroke: "none",
      }}
      d="M52 30C58.6184 29.4994 60.9368 25.1509 62 19C54.5082 19.3898 52.3153 22.7915 52 30z"
    />
    <path
      style={{
        fill: "#7c4208",
        stroke: "none",
      }}
      d="M28.6667 23.3333L29.3333 23.6667L28.6667 23.3333z"
    />
    <path
      style={{
        fill: "#452404",
        stroke: "none",
      }}
      d="M28 24L28 26L30 26L30 24L28 24z"
    />
    <path
      style={{
        fill: "#3b2004",
        stroke: "none",
      }}
      d="M41 24L41 26L43 26L43 24L41 24z"
    />
    <path
      style={{
        fill: "#775d4f",
        stroke: "none",
      }}
      d="M51 25L51 30L52 30L51 25z"
    />
    <path
      style={{
        fill: "#9d5427",
        stroke: "none",
      }}
      d="M33 28L38 31L38 28L33 28z"
    />
    <path
      style={{
        fill: "#a0550a",
        stroke: "none",
      }}
      d="M20 31L21 35L28 33L28 29L20 31z"
    />
    <path
      style={{
        fill: "#483425",
        stroke: "none",
      }}
      d="M53 30L53 31L56 31L53 30z"
    />
    <path
      style={{
        fill: "#9d530a",
        stroke: "none",
      }}
      d="M32 33L32 34L41 33L32 33z"
    />
    <path
      style={{
        fill: "#5f3306",
        stroke: "none",
      }}
      d="M27 35L27 40L28 40L27 35z"
    />
    <path
      style={{
        fill: "#96622b",
        stroke: "none",
      }}
      d="M28 35C31.6814 42.0152 39.566 40.4532 44 35C37.5389 37.526 34.3426 38.4891 28 35z"
    />
    <path
      style={{
        fill: "#cb6c0d",
        stroke: "none",
      }}
      d="M43 36C37.5655 40.1418 33.9686 39.9961 28 37L23 42L23 43C30.9787 44.8459 38.0898 47.8067 46 44L43 36z"
    />
    <path
      style={{
        fill: "#7f8082",
        stroke: "none",
      }}
      d="M24 40L24 41L27 42L24 40z"
    />
    <path
      style={{
        fill: "#998574",
        stroke: "none",
      }}
      d="M45 40L50 42L45 40z"
    />
    <path
      style={{
        fill: "#8d8884",
        stroke: "none",
      }}
      d="M16 46L31 53L18 44L23 41L16 46z"
    />
    <path
      style={{
        fill: "#d7d2cf",
        stroke: "none",
      }}
      d="M23 41L23 42L26 42L23 41z"
    />
    <path
      style={{
        fill: "#630006",
        stroke: "none",
      }}
      d="M18 44C29.6206 57.6563 50.4768 60.0882 67 58C62.38 62.3333 54.9085 62.4028 49 61C53.3937 72.592 60.0517 72 71 72C70.3913 58.6778 65.5977 41.1243 49.0895 42.2377C44.9025 42.52 42.3883 46.6257 38 46.5664C30.8068 46.4691 25.387 41.8369 18 44z"
    />
    <path
      style={{
        fill: "#5f5e5e",
        stroke: "none",
      }}
      d="M16 43L17 44L16 43z"
    />
    <path
      style={{
        fill: "#000063",
        stroke: "none",
      }}
      d="M54 72C50.8457 55.6881 26.3514 55.2938 16 44C-0.574804 49.2932 10.0158 55.5326 16.3974 63.5139C18.1971 65.7648 17.7767 69.2824 20.3179 70.9722C27.1419 75.5099 45.8633 72 54 72z"
    />
    <path
      style={{
        fill: "#813808",
        stroke: "none",
      }}
      d="M36 46L36 47L42 47L36 46z"
    />
    <path
      style={{
        fill: "#deddd9",
        stroke: "none",
      }}
      d="M30 53L30 54L41 58L41 57L30 53z"
    />
    <path
      style={{
        fill: "#636363",
        stroke: "none",
      }}
      d="M4 54L1 72L15 72C16.1676 62.357 13.6305 58.0765 4 54z"
    />
    <path
      style={{
        fill: "#82808f",
        stroke: "none",
      }}
      d="M31 54L32 55L31 54z"
    />
    <path
      style={{
        fill: "#7d7b8b",
        stroke: "none",
      }}
      d="M33 55L34 56L33 55z"
    />
    <path
      style={{
        fill: "#bcb9ba",
        stroke: "none",
      }}
      d="M40 58L47 59L40 58z"
    />
    <path
      style={{
        fill: "#6e5354",
        stroke: "none",
      }}
      d="M63 58L63 59L66 59L63 58z"
    />
    <path
      style={{
        fill: "#aaacac",
        stroke: "none",
      }}
      d="M66 58L49 59L49 60C51.5483 60.0428 67.9202 62.6939 66 58z"
    />
    <path
      style={{
        fill: "#e9ecec",
        stroke: "none",
      }}
      d="M45 59L45 60L55 61L45 59z"
    />
    <path
      style={{
        fill: "#898791",
        stroke: "none",
      }}
      d="M46.6667 60.3333L47.3333 60.6667L46.6667 60.3333z"
    />
    <path
      style={{
        fill: "#5c4f4f",
        stroke: "none",
      }}
      d="M63.6667 60.3333L64.3333 60.6667L63.6667 60.3333z"
    />
    <path
      style={{
        fill: "#897979",
        stroke: "none",
      }}
      d="M50 61L50 62L59 62L50 61z"
    />
    <path
      style={{
        fill: "#000000",
        stroke: "none",
      }}
      d="M17 63L15 72L20 72L17 63z"
    />
    <path
      style={{
        fill: "#2a2929",
        stroke: "none",
      }}
      d="M1 65L0 72L1 72L1 65z"
    />
    <path
      style={{
        fill: "#010000",
        stroke: "none",
      }}
      d="M54.3333 70.6667L54.6667 71.3333L54.3333 70.6667z"
    />
  </svg>
  );
};

export default Icon;
