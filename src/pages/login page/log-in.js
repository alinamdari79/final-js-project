import { router } from "../../routes/router.js";
import { El } from "../../utils/create-element.js";
export default function logInPage() {
  const vectorIcon = El({
    element: "img",
    src: "./src/assets/Vector.svg",
  });
  const vectorButton = El({
    element: "button",
    children: [vectorIcon],
    className: "",
  });
  const headerBox = El({
    element: "div",
    children: [vectorButton],
    className: "m-7",
  });
  const logoIcon = El({
    element: "img",
    src: "./src/assets/logo2.svg",
    className: "w-[54px] h-[81px] text-black mt-[100px] mx-auto",
  });
  const loginHeader = El({
    element: "h1",
    children: "Login to Your Account",
    className: "mt-[100px] text-center text-3xl	font-semibold",
  });
  const subIcon = El({
    element: "img",
    src: "./src/assets/email.svg",
  });
  const subInput = El({
    element: "input",
    children: [subIcon],
    className: "h-9 w-[320px] mt-5 bg-[#FAFAFA] rounded block mx-auto",
  });
  const email = El({
    element: "div",
    children: [subInput],
    className: "h-9 w-[320px] mt-5 bg-[#FAFAFA] rounded block mx-auto",
  });
  let container = El({
    element: "section",
    children: [headerBox, logoIcon, loginHeader, email],
  });
  return container;
}
