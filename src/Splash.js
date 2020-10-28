import { Lightning, Utils, Router } from "@lightningjs/sdk"

export default class Splash extends Lightning.Component {

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset("images/background.png"),
      },
      Logo: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 600,
        src: Utils.asset("images/logo.png"),
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: "MaxStorefront",
          fontFace: "Roboto",
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
    }
  }

  pageTransition() {
    return "crossFade";
  }

  _init() {
    this._colorAnimation = this.animation({duration: 1, repeat: -1, actions: [{
      t: "Background",
      p: "color",
      v: { 0: { v: 0xfffbb03b }, 0.5: { v: 0xfff46730 }, 0.8: { v: 0xfffbb03b } },
    }]});

    this.tag("Logo").on("txLoaded", () => {
      this.tag("Logo").setSmooth("alpha", 1);
      this.tag("Logo").setSmooth("y", 540);
    });

    setTimeout(() => {
      // Route to storefront, and delete history
      Router.navigate("storefront", false);
    }, 4000);
  }

  _active() {
    this._colorAnimation.start();
  }

  _inactive() {
    this._colorAnimation.stop();
  }

}
