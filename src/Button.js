import { Lightning } from "@lightningjs/sdk";

export default class Button extends Lightning.Component {

  static _template() {
    return {
      flex: {},
      Background: {
        flex: { },
        rtt: true,
        shader: {
          type: Lightning.shaders.RoundedRectangle,
          radius: 20
        },
        rect: true,
        color: 0xff272727,
        transitions: {
          color: { duration: .3, timingFunction: "ease-in-out" },
          scale: { duration: .3, timingFunction: "ease-in-out" }
        },
        Label: {
          flexItem: { marginLeft: 60, marginRight: 60, marginTop: 30, marginBottom: 30 },
          text: { text: "button_title", fontFace: "Roboto", fontSize: 46 },
          color: 0xffadadad,
          transitions: {
            color: { duration: .3, timingFunction: "ease-in-out" },
            scale: { duration: .3, timingFunction: "ease-in-out" },
          }
        }
      }
    }
  }

  _init() {
    this._pulseAnimation = this.animation({duration: .3, repeat: 0, actions: [{
      t: "Background",
      p: "scale",
      v: { 0: 1.08, .5: 1, 1: 1.08 },
    }]});
  }

  set labelText(value) {
    this._label = value;

    this.tag("Label").patch({
      text: { text: this._label }
    });
  }

  _focus() {
    this.patch({
      Background: {
        smooth: { color: 0xffd8d8d8, scale: 1.08 },
        Label: {
          smooth: { color: 0xff000000, scale: 1.08 }
        }
      }
    })
  }

  _unfocus() {
    this.patch({
      Background: {
        smooth: { color: 0xff272727, scale: 1 },
        Label: {
          smooth: { color: 0xffadadad, scale: 1 }
        }
      }
    })
  }

  _handleEnter() {
    this._pulseAnimation.start()
    this.signal("didPressButton")
  }

}
