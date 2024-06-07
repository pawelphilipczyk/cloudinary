import { scale } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../api";

import { trim } from "@cloudinary/url-gen/actions/reshape";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "./root.css";

function Root({ children }: React.PropsWithChildren) {
  const sample = cld
    .image("samples/cloudinary-icon")
    .format("auto")
    .quality("auto")
    .reshape(trim().colorSimilarity(50).colorOverride("transparent"))
    .resize(scale().height(120));

  return (
    <>
      <header>
        <a href="https://cloudinary.com/documentation/programmable_media_overview" target="_blank">
          <img
            src={sample.toURL()}
            className="logo cloudinary"
            alt="Cloudinary logo"
          />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react spin" alt="React logo" />
        </a>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Root;
