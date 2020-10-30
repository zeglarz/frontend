import React from 'react';
import { IProps } from './Logo.model';
import { LogoWrapper, StyledLogo, StyledLogoText } from './Logo.styled';

const Logo = ({ logoOnly = false, textPlacement = 'horizontal' }: IProps): JSX.Element => {
  const logoText = (
    <g height="41">
      {/* 'programmers' text */}
      <path
        d="M80.46 17.25H77.31C75.49 17.25 74.09 17.73 73.13 18.68V18.13C73.13 17.6 72.79 17.25 72.29 17.25H71.7C71.2 17.25 70.86 17.6 70.86 18.13V45.55C70.86 46.08 71.2 46.43 71.7 46.43H72.29C72.79 46.43 73.13 46.08 73.13 45.55V38.5C74.08 39.45 75.48 39.93 77.31 39.93H80.46C82.32 39.93 83.83 39.35 84.96 38.21C86.08 37.07 86.65 35.53 86.65 33.65V23.53C86.65 21.64 86.08 20.11 84.95 18.97C83.84 17.83 82.32 17.25 80.46 17.25ZM77.4 19.44H80.46C81.74 19.44 82.69 19.79 83.37 20.51C84.04 21.23 84.38 22.26 84.38 23.57V33.6C84.38 34.93 84.05 35.93 83.37 36.66C82.7 37.38 81.75 37.73 80.46 37.73H77.4C76.09 37.73 75.08 37.39 74.28 36.7C73.51 36.03 73.13 35.08 73.13 33.81V23.36C73.13 22.08 73.51 21.13 74.28 20.46C75.07 19.79 76.12 19.44 77.4 19.44Z"
        fill="black"
      />
      <path
        d="M100.36 17.25H98.66C97.33 17.25 96.22 17.52 95.36 18.05C94.96 18.3 94.61 18.56 94.32 18.84V18.14C94.32 17.61 93.98 17.26 93.48 17.26H92.88C92.38 17.26 92.04 17.61 92.04 18.14V39.06C92.04 39.59 92.38 39.94 92.88 39.94H93.48C93.98 39.94 94.32 39.59 94.32 39.06V24C94.32 22.56 94.7 21.47 95.5 20.65C96.29 19.84 97.31 19.44 98.63 19.44H100.37C100.9 19.44 101.25 19.1 101.25 18.6V18.09C101.24 17.59 100.89 17.25 100.36 17.25Z"
        fill="black"
      />
      <path
        d="M114.3 17.25H110.69C108.83 17.25 107.32 17.83 106.19 18.97C105.06 20.11 104.49 21.64 104.49 23.53V33.65C104.49 35.54 105.06 37.07 106.19 38.21C107.32 39.35 108.83 39.93 110.69 39.93H114.3C116.16 39.93 117.67 39.35 118.8 38.21C119.93 37.07 120.5 35.53 120.5 33.65V23.53C120.5 21.64 119.93 20.11 118.8 18.97C117.68 17.83 116.16 17.25 114.3 17.25ZM114.3 37.74H110.69C109.41 37.74 108.45 37.39 107.78 36.67C107.1 35.94 106.77 34.94 106.77 33.61V23.57C106.77 22.26 107.11 21.23 107.78 20.51C108.45 19.79 109.41 19.44 110.69 19.44H114.3C115.58 19.44 116.53 19.79 117.21 20.51C117.88 21.23 118.22 22.26 118.22 23.57V33.6C118.22 34.91 117.88 35.94 117.21 36.66C116.54 37.39 115.59 37.74 114.3 37.74Z"
        fill="black"
      />
      <path
        d="M140.62 17.25H131.86C130 17.25 128.49 17.83 127.36 18.97C126.23 20.11 125.66 21.64 125.66 23.53V32.37C125.66 34.25 126.23 35.79 127.36 36.93C128.49 38.07 130 38.65 131.86 38.65H135.01C136.83 38.65 138.23 38.17 139.19 37.22V39.26C139.19 40.57 138.85 41.6 138.18 42.32C137.51 43.04 136.56 43.39 135.27 43.39H127.66C127.13 43.39 126.78 43.73 126.78 44.23V44.74C126.78 45.24 127.14 45.58 127.66 45.58H135.27C137.13 45.58 138.64 45 139.77 43.86C140.9 42.72 141.47 41.18 141.47 39.3V18.13C141.46 17.6 141.12 17.25 140.62 17.25ZM134.92 36.47H131.86C130.58 36.47 129.63 36.12 128.95 35.4C128.28 34.68 127.94 33.65 127.94 32.34V23.58C127.94 22.27 128.28 21.24 128.95 20.52C129.62 19.8 130.57 19.45 131.86 19.45H139.18V32.55C139.18 33.83 138.8 34.77 138.03 35.45C137.26 36.12 136.21 36.47 134.92 36.47Z"
        fill="black"
      />
      <path
        d="M155.58 17.25H153.88C152.55 17.25 151.44 17.52 150.58 18.05C150.18 18.3 149.83 18.56 149.54 18.84V18.14C149.54 17.61 149.2 17.26 148.7 17.26H148.1C147.6 17.26 147.26 17.61 147.26 18.14V39.06C147.26 39.59 147.6 39.94 148.1 39.94H148.7C149.2 39.94 149.54 39.59 149.54 39.06V24C149.54 22.56 149.92 21.47 150.72 20.65C151.51 19.84 152.53 19.44 153.85 19.44H155.59C156.12 19.44 156.47 19.1 156.47 18.6V18.09C156.47 17.59 156.11 17.25 155.58 17.25Z"
        fill="black"
      />
      <path
        d="M174.67 17.25H165.91C164.05 17.25 162.54 17.83 161.41 18.97C160.28 20.11 159.71 21.64 159.71 23.53V33.65C159.71 35.54 160.28 37.07 161.41 38.21C162.54 39.35 164.05 39.93 165.91 39.93H169.06C170.88 39.93 172.28 39.45 173.24 38.5V39.05C173.24 39.58 173.58 39.93 174.08 39.93H174.68C175.18 39.93 175.52 39.58 175.52 39.05V18.13C175.51 17.6 175.17 17.25 174.67 17.25ZM168.98 37.74H165.92C164.63 37.74 163.68 37.39 163.01 36.67C162.34 35.95 162 34.92 162 33.61V23.57C162 22.26 162.34 21.23 163.01 20.51C163.68 19.79 164.63 19.44 165.92 19.44H173.24V33.82C173.24 35.1 172.86 36.04 172.09 36.72C171.3 37.41 170.28 37.74 168.98 37.74Z"
        fill="black"
      />
      <path
        d="M201.88 17.25H200.18C199.03 17.25 197.88 17.52 196.75 18.07C195.9 18.48 195.24 19.03 194.77 19.73C193.69 18.09 191.96 17.26 189.64 17.26H187.77C185.95 17.26 184.55 17.74 183.59 18.69V18.14C183.59 17.61 183.25 17.26 182.75 17.26H182.15C181.65 17.26 181.31 17.61 181.31 18.14V39.06C181.31 39.59 181.65 39.94 182.15 39.94H182.75C183.25 39.94 183.59 39.59 183.59 39.06V23.36C183.59 22.08 183.96 21.13 184.73 20.46C185.51 19.78 186.56 19.43 187.85 19.43H189.63C190.91 19.43 191.87 19.78 192.54 20.5C193.21 21.22 193.55 22.25 193.55 23.56V39.04C193.55 39.57 193.89 39.92 194.39 39.92H194.99C195.49 39.92 195.83 39.57 195.83 39.04V23.57C195.83 22.29 196.22 21.3 197.01 20.55C197.81 19.8 198.85 19.43 200.18 19.43H201.88C203.16 19.43 204.12 19.78 204.79 20.5C205.46 21.22 205.8 22.25 205.8 23.56V39.04C205.8 39.57 206.14 39.92 206.64 39.92H207.23C207.73 39.92 208.07 39.57 208.07 39.04V23.53C208.07 21.64 207.5 20.11 206.37 18.97C205.25 17.83 203.74 17.25 201.88 17.25Z"
        fill="black"
      />
      <path
        d="M234.23 17.25H232.53C231.38 17.25 230.23 17.52 229.1 18.07C228.25 18.48 227.59 19.03 227.12 19.73C226.04 18.09 224.31 17.26 221.99 17.26H220.12C218.3 17.26 216.9 17.74 215.94 18.69V18.14C215.94 17.61 215.6 17.26 215.1 17.26H214.5C214 17.26 213.66 17.61 213.66 18.14V39.06C213.66 39.59 214 39.94 214.5 39.94H215.1C215.6 39.94 215.94 39.59 215.94 39.06V23.36C215.94 22.08 216.31 21.13 217.09 20.46C217.87 19.78 218.92 19.43 220.21 19.43H222C223.28 19.43 224.23 19.78 224.91 20.5C225.58 21.22 225.92 22.25 225.92 23.56V39.04C225.92 39.57 226.26 39.92 226.76 39.92H227.36C227.86 39.92 228.2 39.57 228.2 39.04V23.57C228.2 22.29 228.59 21.3 229.38 20.55C230.18 19.8 231.22 19.43 232.55 19.43H234.25C235.53 19.43 236.48 19.78 237.16 20.5C237.83 21.22 238.17 22.25 238.17 23.56V39.04C238.17 39.57 238.51 39.92 239.01 39.92H239.6C240.1 39.92 240.44 39.57 240.44 39.04V23.53C240.44 21.64 239.87 20.11 238.74 18.97C237.6 17.83 236.09 17.25 234.23 17.25Z"
        fill="black"
      />
      <path
        d="M255.53 17.25H251.79C249.93 17.25 248.42 17.83 247.29 18.97C246.16 20.11 245.59 21.64 245.59 23.53V33.65C245.59 35.54 246.16 37.07 247.29 38.21C248.42 39.35 249.93 39.93 251.79 39.93H260.5C261.03 39.93 261.38 39.59 261.38 39.09V38.58C261.38 38.08 261.02 37.74 260.5 37.74H251.79C250.5 37.74 249.55 37.39 248.88 36.67C248.2 35.94 247.87 34.94 247.87 33.61V29.86H260.84C261.38 29.86 261.72 29.5 261.72 28.94V23.54C261.72 21.65 261.15 20.12 260.02 18.98C258.9 17.83 257.39 17.25 255.53 17.25ZM251.79 19.44H255.53C256.81 19.44 257.76 19.79 258.44 20.51C259.11 21.23 259.45 22.26 259.45 23.57V27.66H247.87V23.57C247.87 22.26 248.21 21.23 248.88 20.51C249.55 19.79 250.5 19.44 251.79 19.44Z"
        fill="black"
      />
      <path
        d="M275.21 17.25H273.51C272.18 17.25 271.07 17.52 270.21 18.05C269.81 18.3 269.46 18.56 269.17 18.84V18.14C269.17 17.61 268.83 17.26 268.33 17.26H267.73C267.23 17.26 266.89 17.61 266.89 18.14V39.06C266.89 39.59 267.23 39.94 267.73 39.94H268.33C268.83 39.94 269.17 39.59 269.17 39.06V24C269.17 22.56 269.55 21.47 270.35 20.65C271.14 19.84 272.16 19.44 273.48 19.44H275.22C275.75 19.44 276.1 19.1 276.1 18.6V18.09C276.09 17.59 275.74 17.25 275.21 17.25Z"
        fill="black"
      />
      <path
        d="M292.33 30.25C291.81 29.15 290.72 28.36 289.11 27.91L283.53 25.91C282.62 25.6 281.95 25.22 281.54 24.79C281.16 24.39 280.98 23.8 280.98 23.03V21.88C280.98 21.25 281.24 20.71 281.78 20.2C282.32 19.7 283.18 19.44 284.35 19.44H291.19C291.72 19.44 292.07 19.1 292.07 18.6V18.09C292.07 17.59 291.72 17.25 291.19 17.25H284.35C280.63 17.25 278.66 19.07 278.66 22.51C278.66 23.98 278.99 25.15 279.63 25.98C280.27 26.81 281.36 27.49 282.94 28.04L288.55 30C289.39 30.3 289.97 30.72 290.28 31.26C290.6 31.84 290.77 32.61 290.77 33.57V34.84C290.77 36.09 290.38 37.74 286.98 37.74H279.75C279.22 37.74 278.87 38.08 278.87 38.58V39.09C278.87 39.59 279.22 39.93 279.75 39.93H286.98C289 39.93 290.52 39.5 291.52 38.64C292.54 37.77 293.06 36.37 293.06 34.5C293.06 32.71 292.81 31.28 292.33 30.25Z"
        fill="black"
      />
      {/* dot sign */}
      <path
        d="M319.3 17.25H315.69C313.83 17.25 312.32 17.83 311.19 18.97C310.06 20.11 309.49 21.64 309.49 23.53V33.65C309.49 35.54 310.06 37.07 311.19 38.21C312.32 39.35 313.83 39.93 315.69 39.93H319.3C321.16 39.93 322.68 39.35 323.8 38.21C324.93 37.07 325.5 35.53 325.5 33.65V23.53C325.5 21.64 324.93 20.11 323.8 18.97C322.67 17.83 321.15 17.25 319.3 17.25ZM319.3 37.74H315.69C314.41 37.74 313.46 37.39 312.78 36.67C312.11 35.95 311.77 34.92 311.77 33.61V23.57C311.77 22.26 312.11 21.23 312.78 20.51C313.45 19.79 314.4 19.44 315.69 19.44H319.3C320.59 19.44 321.54 19.79 322.21 20.51C322.88 21.23 323.22 22.26 323.22 23.57V33.6C323.22 34.91 322.88 35.94 322.21 36.66C321.53 37.39 320.58 37.74 319.3 37.74Z"
        fill="#0D54A5"
      />
      {/* 'only' text */}
      <path
        d="M340.47 17.25H337.32C335.5 17.25 334.1 17.73 333.14 18.68V18.13C333.14 17.6 332.8 17.25 332.3 17.25H331.7C331.2 17.25 330.86 17.6 330.86 18.13V39.05C330.86 39.58 331.2 39.93 331.7 39.93H332.3C332.8 39.93 333.14 39.58 333.14 39.05V23.36C333.14 22.08 333.52 21.13 334.29 20.46C335.07 19.78 336.12 19.43 337.41 19.43H340.47C341.76 19.43 342.71 19.78 343.38 20.5C344.05 21.22 344.39 22.25 344.39 23.56V39.04C344.39 39.57 344.73 39.92 345.23 39.92H345.83C346.33 39.92 346.67 39.57 346.67 39.04V23.53C346.67 21.64 346.1 20.11 344.97 18.97C343.84 17.83 342.32 17.25 340.47 17.25Z"
        fill="#0D54A5"
      />
      <path
        d="M376.32 17.55C376.22 17.41 376.03 17.25 375.66 17.25H374.98C374.78 17.25 374.3 17.32 374.09 17.96L367.55 35.83L361.01 17.97C360.79 17.32 360.31 17.25 360.11 17.25H359.43C359.06 17.25 358.87 17.41 358.77 17.55C358.67 17.69 358.58 17.93 358.7 18.31L365.92 38.06C366.04 38.43 366.29 38.67 366.61 38.76C366.44 39.24 366.19 39.85 365.86 40.58L365.33 41.67C365.02 42.3 364.81 42.53 364.72 42.61C364.49 42.8 364.14 43.1 363.66 43.52C363.29 43.84 362.58 44.01 361.59 44.01H360.36C359.83 44.01 359.48 44.35 359.48 44.85V45.36C359.48 45.86 359.83 46.2 360.36 46.2H361.59C363.94 46.17 365.8 45.12 367.11 43.07C367.59 42.29 368.25 40.66 369.15 38.09L376.38 18.31C376.52 17.93 376.42 17.69 376.32 17.55Z"
        fill="#0D54A5"
      />
      <path
        d="M360.67 39.0902V38.5802C360.67 38.0802 360.32 37.7402 359.79 37.7402H359.05C357.73 37.7402 356.71 37.3402 355.92 36.5302C355.13 35.7102 354.74 34.6202 354.74 33.1802V6.30016C354.74 5.67016 354.23 5.16016 353.6 5.16016H345.67V7.43016H352.46V33.1702C352.46 37.4602 354.87 39.9202 359.08 39.9202H359.78C360.32 39.9302 360.67 39.5902 360.67 39.0902Z"
        fill="#0D54A5"
      />
      <path
        d="M302.29 39.4303H300.26C299.25 39.4303 298.44 38.6103 298.44 37.6103V35.5803C298.44 34.5703 299.26 33.7603 300.26 33.7603H302.29C303.29 33.7603 304.11 34.5703 304.11 35.5803V37.6103C304.11 38.6203 303.29 39.4303 302.29 39.4303Z"
        fill="#0D54A5"
      />
    </g>
  );
  const logo = (
    <g width="58" height="58">
      {/* p sign inside brackets */}
      <path
        d="M31.05 17.25H27.9C26.08 17.25 24.68 17.73 23.72 18.68V18.13C23.72 17.6 23.38 17.25 22.88 17.25H22.28C21.78 17.25 21.44 17.6 21.44 18.13V45.55C21.44 46.08 21.78 46.43 22.28 46.43H22.88C23.38 46.43 23.72 46.08 23.72 45.55V38.5C24.67 39.45 26.07 39.93 27.9 39.93H31.05C32.91 39.93 34.42 39.35 35.55 38.21C36.67 37.07 37.24 35.53 37.24 33.65V23.53C37.24 21.64 36.67 20.11 35.54 18.97C34.42 17.83 32.9 17.25 31.05 17.25ZM27.99 19.44H31.05C32.33 19.44 33.28 19.79 33.96 20.51C34.63 21.23 34.97 22.26 34.97 23.57V33.6C34.97 34.93 34.64 35.93 33.96 36.66C33.29 37.38 32.34 37.73 31.05 37.73H27.99C26.68 37.73 25.67 37.39 24.87 36.7C24.1 36.03 23.72 35.08 23.72 33.81V23.36C23.72 22.08 24.09 21.13 24.87 20.46C25.65 19.79 26.7 19.44 27.99 19.44Z"
        fill="black"
      />
      {/* right bracket */}
      <path
        d="M55.86 26.5502C53.54 26.5502 51.64 24.6602 51.64 22.3402V8.00023C51.64 3.86023 48.27 0.490234 44.13 0.490234H41.58L40.3 4.08024H44.13C45.73 4.08024 48.04 6.39024 48.04 7.99024V22.3202C48.04 24.9002 49.15 27.2202 50.92 28.8302C49.15 30.4402 48.04 32.7702 48.04 35.3402V49.6702C48.04 51.2802 45.73 53.5802 44.13 53.5802H25.11L23.83 57.1802H24.32H44.14C48.28 57.1802 51.65 53.8102 51.65 49.6702V35.3602C51.65 33.0302 53.54 31.1502 55.87 31.1502V31.1402H56.7V26.5502H55.86Z"
        fill="#B7BDC8"
      />
      {/* left bracket */}
      <path
        d="M8.64 8.00023C8.64 6.39023 10.95 4.09023 12.55 4.09023H31.58L32.86 0.490234H32.37H12.55C8.41 0.490234 5.04 3.86023 5.04 8.00023V22.3302C5.04 24.6502 3.15 26.5502 0.82 26.5502H0V31.1402H0.83V31.1502C3.16 31.1502 5.05 33.0402 5.05 35.3702V49.7002C5.05 53.8402 8.42 57.2102 12.56 57.2102H15.11L16.39 53.6102H12.56C10.96 53.6102 8.65 51.3002 8.65 49.7002V35.3602C8.65 32.7802 7.54 30.4602 5.77 28.8502C7.54 27.2402 8.65 24.9102 8.65 22.3402V8.00023H8.64Z"
        fill="#0D54A5"
      />
    </g>
  );
  const renderLogo = () => {
    if (logoOnly) {
      return (
        <svg width="58" height="58">
          {logo}
        </svg>
      );
    }
    if (textPlacement === 'horizontal') {
      return (
        <svg width="377" height="58">
          {logoText}
          {logo}
        </svg>
      );
    }
    return (
      <>
        <StyledLogo>{logo}</StyledLogo>
        <StyledLogoText>{logoText}</StyledLogoText>
      </>
    );
  };

  return (
    <LogoWrapper textPlacement={textPlacement} logoOnly={logoOnly}>
      {renderLogo()}
    </LogoWrapper>
  );
};

export default Logo;