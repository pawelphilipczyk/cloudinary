import { trim } from "@cloudinary/url-gen/actions/reshape";
import { scale } from "@cloudinary/url-gen/actions/resize";
import styled from "styled-components";

import { cld } from "../api";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: inline-block;
  }
`;

const LogoImage = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  &.cloudinary {
    height: 5em;
  }
  &.cloudinary:hover {
    filter: drop-shadow(0 0 2em #3847bf);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .spin {
      animation: logo-spin infinite 20s linear;
    }
  }
`;

export function PageHeader() {
  const sample = cld
    .image("samples/cloudinary-icon")
    .format("auto")
    .quality("auto")
    .reshape(trim().colorSimilarity(50).colorOverride("transparent"))
    .resize(scale().height(120));

  return (
    <Header>
      <a
        href="https://cloudinary.com/documentation/programmable_media_overview"
        target="_blank"
      >
        <LogoImage
          src={sample.toURL()}
          className="cloudinary"
          alt="Cloudinary logo"
        />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <LogoImage src={viteLogo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <LogoImage src={reactLogo} className="react spin" alt="React logo" />
      </a>
    </Header>
  );
}
