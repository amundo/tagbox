"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Tagbox = (function () {
  function Tagbox(el) {
    _classCallCheck(this, Tagbox);

    this.el = el;
    this.listen();
  }

  _createClass(Tagbox, {
    extractTags: {
      value: function extractTags(text) {
        var tags = text.split(/[ \.\?\!]+/g).filter(function (w) {
          return w.startsWith("#");
        }).map(function (t) {
          return t.slice(1, t.length);
        });

        return tags;
      }
    },
    parseTags: {
      value: function parseTags(ev) {
        this.tags = this.extractTags(ev.target.value);
      }
    },
    tags: {
      set: function (tags) {
        this.el.dataset.tags = JSON.stringify(tags);
        this.render();
        return JSON.stringify(tags);
      },
      get: function () {
        return JSON.parse(this.el.dataset.tags);
      }
    },
    listen: {
      value: function listen() {
        var _this = this;

        this.el.addEventListener("keyup", function (ev) {
          return _this.parseTags(ev);
        });
      }
    },
    render: {
      value: function render() {
        var ul = document.createElement("ul");
        ul.innerHTML = this.tags.map(function (t) {
          return "<li class=tag>" + t + "</li>";
        }).join("");
        this.el.nextElementSibling.remove();
        this.el.insertAdjacentHTML("afterend", ul.outerHTML);
      }
    }
  });

  return Tagbox;
})();
