import { router } from "../../../routes/router.js";
import { El } from "../../../utils/create-element.js";
export default function explanationPage3() {
  const customButton = El({
    element: "button",
    children: "Get Started",
    className:
      "bg-gray-900 w-[350px] h-[45px] rounded-3xl mt-6 text-white cursor-pointer hover:bg-gray-700",
    // eventListener: [
    //   {
    //     event: "click",
    //     callback: () => {
    //       router.navigate("/");
    //     },
    //   },
    // ],
  });
  const firstCarousel = El({
    element: "button",
    children: "",
    className: "w-[30px] h-[3px] rounded-full bg-gray-500",
  });
  const secondCarousel = El({
    element: "button",
    children: "",
    className: "w-[30px] h-[3px] rounded-full bg-gray-500",
  });
  const thirdCarousel = El({
    element: "button",
    children: "",
    className: "w-[30px] h-[3px] rounded-full bg-gray-900",
  });
  const carouselIndicators = El({
    element: "div",
    children: [firstCarousel, secondCarousel, thirdCarousel],
    className: "w-[102px] mt-6 mx-auto flex justify-between",
  });
  const head = El({
    element: "h1",
    children: "Let’s fulfill your fashion needs with shoearight now!",
    className: "w-[350px] mt-4 font-semibold text-3xl text-center mx-auto",
  });
  const backgroundImg = El({
    element: "img",
    src: "./src/assets/wallpaper13.jpg",
    className: "w-screen h-[450px]",
  });
  const container = El({
    element: "div",
    children: [backgroundImg, head, carouselIndicators, customButton],
    className: "grid justify-items-center",
  });
  return container;
}
