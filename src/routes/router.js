import Navigo from "navigo";
// import {El} from "../utils/create-element";
import { changePage } from "../utils/change-page";
import loadingPage from "../pages/onboarding/loading/loading.js";
import welcomePage from "../pages/onboarding/welcome/welcome.js"

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(loadingPage);
  })
  .on("/welcome", () => {
    changePage(welcomePage);
  });
