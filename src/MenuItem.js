import {Lightning, Log, Router, Utils} from '@lightningjs/sdk';

export default class MenuItem extends Lightning.Component {

  static _template() {
    return {
      Label: {
        text: { text: "item_title", fontFace: "Roboto", fontSize: 46 },
        color: 0xff000000,
        transitions: {
          color: { duration: .3, timingFunction: "ease-in-out" },
          scale: { duration: .3, timingFunction: "ease-in-out" },
        }
      },
      Rectangle: {
        rect: true,
        w: 0, h: 10,
        x: -20, y: 75,
        color: 0xffffffff,
        transitions: {
          w: { duration: .3, timingFunction: "ease-out" }
        }
      }
    }
  }

  _init() {
    this._pulseAnimation = this.animation({duration: .3, repeat: 0, actions: [
      {
        t: "Label",
        p: "scale",
        v: { 0: 1.2, .5: .9, 1: 1.2 }
      },
      {
        t: "Rectangle",
        p: "scale",
        v: { 0: 1, .5: .7, 1: 1 }
      }
    ]});
  }

  set labelText(value) {
    this._label = value;

    this.tag("Label").patch({
      text: { text: this._label }
    });
  }

  set id(value) {
    this._id = value;
  }

  get id() {
    return this._id;
  }

  // Focus/Unfocus Appearance
  _focus() {
    this.patch({
      Label: {
        smooth: { color: 0xffffffff, scale: 1.2 }
      },
      Rectangle: {
        smooth: { w: 200 }
      }
    })
  }

  _unfocus() {
    this.patch({
      Label: {
        smooth: { color: 0xff000000, scale: 1 }
      },
      Rectangle: {
        smooth: { w: 0 }
      }
    })
  }

  // Actions
  _handleEnter() {
    this._pulseAnimation.start()
    this.signal("didPressMenuItem", this.id)
  }

}
