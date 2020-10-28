import { Router } from "@lightningjs/sdk";

import Splash from "./Splash";
import Storefront from "./Storefront";

export default {
  root: "splash",
  routes: [
    {
      path: "splash",
      component: Splash
    },
    {
      path: "storefront",
      component: Storefront,
      widgets: ["Menu"]
    }
  ]
}
