import { Lightning, Log, Router, Utils } from "@lightningjs/sdk"
import Button from "./Button";

export default class Storefront extends Lightning.Component {

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        // color: 0xfffbb03b,
        src: Utils.asset("images/storefront-background.png")
      },
      Button: {
        type: Button,
        labelText: "Storefront Button",
        x: 960,
        y: 540,
        mountX: .5,
        signals: {
          didPressButton: "_didPressedStorefrontButton"
        }
      }
    }
  }

  pageTransition() {
    return "crossFade";
  }

  _getFocused() {
    return this.tag("Button");
  }

  _handleLeft() {
    Router.focusWidget("menu");
  }

  _didPressedStorefrontButton() {
    Log.info("Storefront::_didPressedStorefrontButton")
  }

}
