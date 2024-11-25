import { router } from "../../../routes/router.js";
import { El } from "../../../utils/create-element.js";
export default function loadingPage() {
  const logoIcon = El({
    element: "img",
    src: "./src/assets/logo.svg",
    className: "w-[28.54px] h-[39.93px]",
  });
  const logo = El({
    element: "div",
    children: [logoIcon],
    className:
      "bg-black rounded-full w-[59px] h-[59px] grid justify-center items-center",
  });
  const logoName = El({
    element: "h1",
    children: "Shoea",
    className: "color-black text-5xl font-medium text-logo font-sans ml-2",
  });
  const loading = El({
    element: "img",
    src: "./src/assets/spinner.svg",
    className: "absolute mt-[280px] animate-spin",
  });
  let container = El({
    element: "div",
    children: [logo, logoName, loading],
    className: "w-screen flex justify-center mt-[200px]",
  });
  let page = El({
    element: "section",
    children: [container],
  });
  setTimeout(function () {
    router.navigate("/welcome");
  }, 2000);
  return page;
}
