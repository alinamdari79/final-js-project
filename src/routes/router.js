import Navigo from "navigo";
// import {El} from "../utils/create-element";
import { changePage } from "../utils/change-page";
import loadingPage from "../pages/onboarding/loading/loading.js";
import welcomePage from "../pages/onboarding/welcome/welcome.js";
import explanationPage1 from "../pages/onboarding/explanation/explanation-page1.js";
import explanationPage2 from "../pages/onboarding/explanation/explanation-page2.js";
import explanationPage3 from "../pages/onboarding/explanation/explanation-page3.js";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(loadingPage);
  })
  .on("/welcome", () => {
    changePage(welcomePage);
  })
  .on("/explanation1", () => {
    changePage(explanationPage1);
  })
  .on("/explanation2", () => {
    changePage(explanationPage2);
  })
  .on("/explanation3", () => {
    changePage(explanationPage3);
  });
