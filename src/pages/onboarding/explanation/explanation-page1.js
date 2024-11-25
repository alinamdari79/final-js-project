import { router } from "../../../routes/router.js";
import { El } from "../../../utils/create-element.js";
export default function explanationPage1() {
  const customButton = El({
    element: "button",
    children: "Next",
    className:
      "bg-gray-900 w-[350px] h-[45px] rounded-3xl mt-6 text-white cursor-pointer hover:bg-gray-700",
    eventListener: [
      {
        event: "click",
        callback: () => {
          router.navigate("/explanation2");
        },
      },
    ],
  });
  const firstCarousel = El({
    element: "button",
    children: "",
    className: "w-[30px] h-[3px] rounded-full bg-gray-900",
  });
  const secondCarousel = El({
    element: "button",
    children: "",
    className: "w-[30px] h-[3px] rounded-full bg-gray-500",
  });
  const thirdCarousel = El({
    element: "button",
    children: "",
    className: "w-[30px] h-[3px] rounded-full bg-gray-500",
  });
  const carouselIndicators = El({
    element: "div",
    children: [firstCarousel, secondCarousel, thirdCarousel],
    className: "w-[102px] mt-14 mx-auto flex justify-between",
  });
  const head = El({
    element: "h1",
    children: "We provide high quality products just for you",
    className: "w-[380px] mt-4 font-semibold text-3xl text-center mx-auto",
  });
  const backgroundImg = El({
    element: "img",
    src: "./src/assets/wallpaper11.jpg",
    className: "w-screen h-[450px]",
  });
  const container = El({
    element: "div",
    children: [backgroundImg, head, carouselIndicators, customButton],
    className: "grid justify-items-center",
  });
  return container;
}
