import { Utils, Router } from "@lightningjs/sdk"

import routes from "./routes";
import Menu from "./Menu";

export default class App extends Router.App {

  static getFonts() {
    return [{ family: "Roboto", url: Utils.asset("fonts/Roboto-Regular.ttf") }]
  }

  _setup() {
    Router.startRouter(routes, this);
  }

  static _template() {
    return {
      ...super._template(),
      Widgets: {
        Menu: {
          type: Menu,
          x: 0,
          y: 0,
          zIndex: 100,
          visible: true
        }
      }
    }
  }

}
