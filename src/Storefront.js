import { Lightning, Utils } from "@lightningjs/sdk"


export default class Storefront extends Lightning.Component {

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        scale: .9,
        alpha: .001,
        src: Utils.asset("images/storefront-background.png"),
        transitions: {
          scale: {duration: .3, timingFunction: "ease-in-out"},
          alpha: {duration: .3, timingFunction: "ease-in-out"},
        }
      }

    }
  }

  _init() {

    this.tag("Background").on("txLoaded", () => {
      this.tag("Background").setSmooth("alpha", 1);
      this.tag("Background").setSmooth("scale", 1);
    });
  }

}
