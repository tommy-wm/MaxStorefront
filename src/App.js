import { Lightning, Utils, Router } from '@lightningjs/sdk'

import routes from "./routes";

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  _setup() {
    Router.startRouter(routes, this);
  }
}
