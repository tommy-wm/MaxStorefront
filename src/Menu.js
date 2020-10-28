import { Lightning, Log, Router, Utils } from "@lightningjs/sdk"

import MenuItem from "./MenuItem"

export default class Menu extends Lightning.Component {

  static _template() {
    return {
      Container: {
        rect: true,
        x: -651,
        y: 0,
        transitions: {
          x: { duration: .3, timingFunction: "ease-in-out" }
        },
        Background: {
          w: 651,
          h: 1080,
          src: Utils.asset("images/menu-background.png"),
        },
        MenuItems: {
          rect: true,
          x: 200,
          y: 200,
          w: 651,
          h: 1080,
          color: 0x00000000,
          Featured: {
            x: -651,
            y: 0,
            id: "featured",
            type: MenuItem,
            labelText: "Featured",
            transitions: {
              x: { duration: .3, timingFunction: "ease-in-out" }
            },
            signals: {
              didPressMenuItem: "_didPressMenuItem"
            }
          },
          WatchList: {
            x: -651,
            y: 175,
            id: "watchlist",
            type: MenuItem,
            labelText: "WatchList",
            transitions: {
              x: { duration: .3, timingFunction: "ease-in-out" }
            },
            signals: {
              didPressMenuItem: "_didPressMenuItem"
            }
          },
          Search: {
            x: -651,
            y: 350,
            id: "search",
            type: MenuItem,
            labelText: "Search",
            transitions: {
              x: { duration: .3, timingFunction: "ease-in-out" }
            },
            signals: {
              didPressMenuItem: "_didPressMenuItem"
            }
          },
          Profile: {
            x: -651,
            y: 525,
            id: "profile",
            type: MenuItem,
            labelText: "Profile",
            transitions: {
              x: { duration: .3, timingFunction: "ease-in-out" }
            },
            signals: {
              didPressMenuItem: "_didPressMenuItem"
            }
          }
        }
      }
    }
  }

  _init() {
    this._index = 0
  }

  _focus() {
    this.tag("Container").setSmooth("x", 0, { delay: .001 })
    this.tag("Featured").setSmooth("x", 0, { delay: .1 })
    this.tag("WatchList").setSmooth("x", 0, { delay: .2 })
    this.tag("Search").setSmooth("x", 0, { delay: .3 })
    this.tag("Profile").setSmooth("x", 0, { delay: .4 })
  }

  _unfocus() {
    this.tag("Profile").setSmooth("x", -651, { delay: .001 })
    this.tag("Search").setSmooth("x", -651, { delay: .1 })
    this.tag("WatchList").setSmooth("x", -651, { delay: .2 })
    this.tag("Featured").setSmooth("x", -651, { delay: .3 })
    this.tag("Container").setSmooth("x", -651, { delay: .4 })
  }

  _getFocused() {
    return this.tag("MenuItems").children[this._index]
  }

  _handleRight() {
    Router.restoreFocus();
  }

  _handleUp() {
    if (this._index > 0) {
      this._index -= 1
    }
  }

  _handleDown() {
    if (this._index < (this.tag("MenuItems").children.length - 1)) {
      this._index += 1
    }
  }

  _didPressMenuItem(id) {
    Log.info(`Menu::_didPressMenuItem with id: ${id}`);
  }

}
