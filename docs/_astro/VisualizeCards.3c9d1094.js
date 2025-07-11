import { a as t } from "./e.52ba2300.61282c30.js";
import { j as i } from "./jsx-runtime.47a19089.js";
import { C as m } from "./CardStack.60aa6daa.js";
import "./index.26f5e802.js";
import "./use-force-update.df9cacee.js";
function e({
  className: s = "",
  imgFile: r,
  imgWidth: a,
  imgHeight: g,
  imgAlt: l,
}) {
  return i.jsx("div", {
    className: `${t.card} ${t.sticker} ${s}`,
    children: i.jsx("figure", {
      children: i.jsx("img", {
        src: `/react.gg-visualized/img/${r}`,
        width: a,
        height: g,
        alt: l,
      }),
    }),
  });
}
function u() {
  return i.jsx("ul", {
    className: "grid card-stack",
    children: i.jsxs(m, {
      children: [
        i.jsx(
          e,
          {
            className: "purple",
            imgFile: "sticker-will-it-render.svg",
            imgWidth: "366",
            imgHeight: "222",
            imgAlt:
              "a blender with a React logo inside and the caption “Will it re-render?”",
          },
          "child-1"
        ),
        i.jsx(
          e,
          {
            className: "red",
            imgFile: "sticker-functions.svg",
            imgWidth: "258",
            imgHeight: "216",
            imgAlt:
              "an electrified retro computer with Functions written in rainbow colors on the screen",
          },
          "child-2"
        ),
        i.jsx(
          e,
          {
            className: "blue",
            imgFile: "sticker-bug-spray.svg",
            imgWidth: "186",
            imgHeight: "288",
            imgAlt: "a can that says no more bugs",
          },
          "child-7"
        ),
        i.jsx(
          e,
          {
            className: "green",
            imgFile: "sticker-components.svg",
            imgWidth: "338",
            imgHeight: "144",
            imgAlt: "keyboard keys spelling out Components",
          },
          "child-3"
        ),
        i.jsx(
          e,
          {
            className: "blue",
            imgFile: "sticker-useState.svg",
            imgWidth: "252",
            imgHeight: "246",
            imgAlt: "a heart in tattoo style that says useState",
          },
          "child-4"
        ),
        i.jsx(
          e,
          {
            className: "yellow",
            imgFile: "sticker-props.svg",
            imgWidth: "284",
            imgHeight: "154",
            imgAlt: "the word Props repeating in different colors",
          },
          "child-5"
        ),
        i.jsx(
          e,
          {
            className: "pink",
            imgFile: "sticker-brain-juice.svg",
            imgWidth: "160",
            imgHeight: "266",
            imgAlt: "a can with the words Brain Juice on it",
          },
          "child-6"
        ),
        i.jsx(
          e,
          {
            className: "red",
            imgFile: "sticker-mix-cd.svg",
            imgWidth: "248",
            imgHeight: "254",
            imgAlt: "a cd that says react.gg mix",
          },
          "child-8"
        ),
      ],
    }),
  });
}
export { u as default };
