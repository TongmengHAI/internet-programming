import {
  _ as f,
  o as n,
  c as i,
  a as e,
  t as m,
  b as r,
  C as w,
  P as N,
  M as B,
  d as L,
  S as C,
  e as $,
  f as S,
  m as s,
  r as c,
  g as t,
  w as g,
  F as p,
  h as j,
  u as a,
  i as P,
  j as M,
  k as E,
  l as I,
} from "./index-f953b645.js";
const V = { name: "menuItem", props: { title: String, path: String } },
  H = {
    class: "pageHeader d-flex align-items-center",
    style: {
      "background-color": "#3BB77E33",
      height: "235px",
      "border-radius": "30px",
    },
  },
  F = {
    class: "pageHeaderBgImg",
    style: { width: "100%", height: "100%", "object-fit": "cover" },
  },
  z = { class: "title" },
  D = { class: "direction", style: { color: "#7E7E7E" } },
  R = e("i", { class: "bx bx-chevron-right" }, null, -1),
  A = e("i", { class: "bx bx-chevron-right" }, null, -1);
function T(_, x, l, b, y, u) {
  return (
    n(),
    i("div", H, [
      e("div", F, [
        e("div", z, [e("h1", null, m(l.title), 1)]),
        e("div", D, [
          r("Home "),
          R,
          r(" Categories "),
          A,
          r(" " + m(l.path), 1),
        ]),
      ]),
    ])
  );
}
const W = f(V, [["render", T]]),
  q = {
    components: {
      Category: w,
      Promotion: N,
      Menus: B,
      Products: L,
      Search_box: C,
      MenuItem: $,
      Show_case: S,
      Page_header: W,
    },
    computed: {
      ...s(a, ["category"]),
      ...s(a, ["promotion"]),
      ...s(a, ["products"]),
      ...s(a, ["productCountsByCategory"]),
      categoryId() {
        return this.$route.params.categoryId;
      },
    },
    data() {
      return { title: ["Featured Categories", "Popular Products"] };
    },
  },
  G = { class: "container", style: { "max-width": "1440px", margin: "auto" } },
  J = { class: "header" },
  K = {
    class: "navigaton h-full d-flex justify-content-between align-items-center",
  },
  O = e(
    "div",
    { class: "logoSection" },
    [e("img", { style: { "object-fit": "contain" }, src: P, alt: "" })],
    -1
  ),
  Q = {
    class:
      "navMenu d-flex justify-content-centerr align-items-center gap-3 me-4",
  },
  U = {
    class: "d-flex justify-content-center align-items-center gap-4 mt-3",
    style: { "list-style-type": "none" },
  },
  X = e("hr", null, null, -1),
  Y = { class: "menu d-flex justify-content-between align-items-center" },
  Z = { class: "allMenu" },
  ee = {
    class: "d-flex justify-content-center align-items-center gap-3",
    style: { "list-style-type": "none" },
  },
  te = e(
    "li",
    {
      class:
        "allCategory d-flex justify-content-center align-items-center gap-1",
      style: {
        "background-color": "#3BB77E",
        width: "250px",
        height: "45px",
        "border-radius": "5px",
      },
    },
    [
      e("i", { class: "bx bx-grid-alt" }),
      r(" Browser all categories "),
      e("i", { class: "bx bx-chevron-down" }),
    ],
    -1
  ),
  oe = M(
    '<div class="contactMenu d-flex justify-content-center align-items-center gap-2"><div class="icon mt-2"><i class="bx bx-headphone" style="font-size:36px;"></i></div><div class="contact"><div class="number" style="font-size:20px;color:#3BB77E;font-weight:700;">1900 - 8888</div><div class="status" style="font-size:12px;">24/7 support center</div></div></div>',
    1
  ),
  ne = e("hr", null, null, -1);
function se(_, x, l, b, y, u) {
  const v = c("Search_box"),
    o = c("MenuItem"),
    h = c("RouterLink"),
    k = c("Page_header");
  return (
    n(),
    i("div", G, [
      e("header", J, [
        e("nav", K, [
          O,
          t(v),
          e("div", Q, [
            e("ul", U, [
              t(o, {
                menuName: "Account",
                icon: "bx-user",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
              t(o, {
                menuName: "Compare",
                icon: "bx-recycle",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
              t(o, {
                menuName: "Wishlist",
                icon: "bx-heart",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
              t(o, {
                menuName: "Cart",
                icon: "bx-cart",
                icon_color: "back",
                dropList: "none",
                font_weight: "400",
              }),
            ]),
          ]),
        ]),
      ]),
      X,
      e("div", Y, [
        e("div", Z, [
          e("ul", ee, [
            te,
            t(
              h,
              { to: "/categories/1" },
              {
                default: g(() => [
                  t(o, {
                    menuName: "Hot Deals",
                    icon: "bxs-hot",
                    icon_color: "#3BB77E",
                    dropList: "yes",
                    font_weight: "700",
                  }),
                ]),
                _: 1,
              }
            ),
            t(
              h,
              { to: "/" },
              {
                default: g(() => [
                  t(o, {
                    menuName: "Home",
                    icon: "none",
                    icon_color: "black",
                    dropList: "none",
                    font_weight: "700",
                  }),
                ]),
                _: 1,
              }
            ),
            t(o, {
              menuName: "Food",
              icon: "none",
              icon_color: "black",
              dropList: "yes",
              font_weight: "700",
            }),
            t(o, {
              menuName: "Vegetables",
              icon: "none",
              icon_color: "black",
              dropList: "yes",
              font_weight: "700",
            }),
            t(o, {
              menuName: "Drink",
              icon: "none",
              icon_color: "black",
              dropList: "none",
              font_weight: "700",
            }),
            t(o, {
              menuName: "Cookies",
              icon: "none",
              icon_color: "black",
              dropList: "none",
              font_weight: "700",
            }),
            t(o, {
              menuName: "Meat & Seafood",
              icon: "none",
              icon_color: "black",
              dropList: "yes",
              font_weight: "700",
            }),
            t(o, {
              menuName: "Bakery",
              icon: "none",
              icon_color: "black",
              dropList: "none",
              font_weight: "700",
            }),
          ]),
        ]),
        oe,
      ]),
      ne,
      (n(!0),
      i(
        p,
        null,
        j(
          _.category,
          (d) => (
            n(),
            i(
              p,
              null,
              [
                d.id == u.categoryId
                  ? (n(),
                    E(k, { key: 0, title: d.name, path: d.name }, null, 8, [
                      "title",
                      "path",
                    ]))
                  : I("", !0),
              ],
              64
            )
          )
        ),
        256
      )),
    ])
  );
}
const ae = f(q, [["render", se]]);
export { ae as default };
