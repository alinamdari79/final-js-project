import { router } from "../../../routes/router.js";
import { El } from "../../../utils/create-element.js";
export default function welcomePage() {
  const head1 = El({
    element: "h2",
    children: "Welcome to 👋",
    className: "text-white font-medium text-[30px]",
  });
  const head2 = El({
    element: "h1",
    children: "Shoea",
    className: "text-white font-bold text-[60px]",
  });
  const para = El({
    element: "p",
    children:
      "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
    className: "text-white font-medium mt-[40px] text-[16px]",
  });
  const welcomeBox = El({
    element: "div",
    children: [head1, head2, para],
    className: "px-[32px] pt-[220px] bg-gradient-to-b from-[#00000000] to-[#000000CC] w-screen h-screen",
  });
  const backgroundImg = El({
    element: "div",
    children: [welcomeBox],
    className: "bg-[url('./src/assets/wallpaper1.svg')] bg-no-repeat bg-center",
  });
  const container = El({
    element: "div",
    children: [backgroundImg],
  });
  setTimeout(function () {
    router.navigate("/explanation1");
  }, 2000);
  return container;
}
