import { cld } from "../api";
import { scale } from "@cloudinary/url-gen/actions/resize";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "./root.css";

function Root({ children }: React.PropsWithChildren) {
  const sample = cld
    .image("samples/cloudinary-icon")
    .format("auto")
    .quality("auto")
    .resize(scale().height(150));

  return (
    <>
      <header>
        <img src={sample.toURL()} alt="Cloudinary logo" />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Root;
