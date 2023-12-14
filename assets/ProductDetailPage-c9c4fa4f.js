import {
  _ as m,
  o as s,
  c as o,
  a as t,
  t as a,
  F as r,
  h as g,
  j as P,
  C as j,
  P as S,
  M as I,
  d as L,
  S as C,
  e as D,
  f as z,
  m as u,
  r as l,
  g as e,
  w as k,
  u as _,
  i as M,
  b as x,
  l as B
} from './index-da11ba07.js'
const V = {
  props: {
    title: String,
    rating: Number,
    description: String,
    disPrice: Number,
    sellPrice: Number
  }
}
$(document).ready(function () {
  $('.add_btn').on('click', '.btn', function () {
    $(this).css('display', 'none'),
      $(this).next('.add_num').css('display', 'block')
  })
})
const F = { class: '', style: { width: '100%' } },
  A = t(
    'div',
    {
      class: 'status',
      style: {
        color: '#3BB77E',
        'background-color': '#DEF9EC',
        display: 'inline-block',
        'border-radius': '5px',
        'font-weight': '500',
        padding: '0 5px'
      }
    },
    ' In Stock',
    -1
  ),
  H = {
    class: 'title',
    style: {
      'font-size': '35px',
      'font-weight': '700',
      'line-height': '40px',
      padding: '3% 0'
    }
  },
  R = { class: 'rating' },
  T = { class: 'rating bx bxs-star', style: { color: 'orange' } },
  K = { class: 'unrating bx bxs-star', style: { color: '#bab8b8' } },
  W = { class: 'rating_num' },
  U = { class: 'price d-flex justify-content-start align-items-center gap-4' },
  q = {
    class: 'disPrice',
    style: { color: '#3BB77E', 'font-weight': '700', 'font-size': '38px' }
  },
  G = {
    class: 'salePrice',
    style: { 'font-size': '25px', 'font-weight': '700', color: '#7E7E7E' }
  },
  J = { class: 'description mt-4', style: { color: '#7E7E7E' } },
  O = P(
    '<div class="action d-flex align-items-center gap-2 mt-2"><div class="add_btn" style="background-color:#3BB77E;border-radius:5px;width:70px;"><button class="btn" style="cursor:pointer;color:white;width:100%;height:33px;font-size:14px;">Add +</button><input type="number" class="add_num" value="1" style="width:100%;height:33px;border:2px solid #3BB77E;border-radius:5px;font-size:14px;"></div><div class="add_cart" style="background-color:#3BB77E;padding:5px;border-radius:5px;font-size:14px;height:33px;color:white;"><i class="bx bx-cart-alt"></i> Add To Cart </div><div class="favorite" style="padding:5px 10px;border-radius:5px;box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;"><i class="bx bx-heart"></i></div><div class="shuffle" style="padding:5px 10px;border-radius:5px;box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;"><i class="bx bx-shuffle"></i></div></div><div class="d-flex flex-column justify-content-end mt-5"><div class="vendor">Vendor: <span style="color:#7E7E7E;">NestMart</span></div><div class="sku">SKU: <span style="color:#7E7E7E;"> FWM15VKT</span></div></div>',
    2
  )
function Q (p, f, c, y, v, h) {
  return (
    s(),
    o('div', F, [
      A,
      t('div', H, a(c.title), 1),
      t('div', R, [
        (s(!0),
        o(
          r,
          null,
          g(c.rating, b => (s(), o('i', T))),
          256
        )),
        (s(!0),
        o(
          r,
          null,
          g(5 - c.rating, b => (s(), o('i', K))),
          256
        )),
        t('span', W, '(' + a(c.rating.toFixed(1)) + ')', 1)
      ]),
      t('div', U, [
        t('div', q, '$ ' + a(c.disPrice), 1),
        t('div', G, [t('s', null, '$ ' + a(c.sellPrice), 1)])
      ]),
      t('div', J, a(c.description), 1),
      O
    ])
  )
}
const X = m(V, [['render', Q]]),
  Y = { props: { img: String } },
  Z = {
    class: 'img',
    style: {
      height: '100%',
      width: '100%',
      padding: '2%',
      'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      'border-radius': '5px'
    }
  },
  tt = ['src']
function et (p, f, c, y, v, h) {
  return (
    s(),
    o('div', Z, [
      t(
        'img',
        {
          src: c.img,
          style: { width: '100%', height: '100%', 'object-fit': 'contain' },
          alt: ''
        },
        null,
        8,
        tt
      )
    ])
  )
}
const st = m(Y, [['render', et]])
const ot = {
    name: 'productDetail',
    props: {},
    components: {
      Category: j,
      Promotion: S,
      Menus: I,
      Products: L,
      Search_box: C,
      MenuItem: D,
      Show_case: z,
      ProductDetail: X,
      ProductImage: st
    },
    computed: {
      ...u(_, ['category']),
      ...u(_, ['promotion']),
      ...u(_, ['products']),
      ...u(_, ['productCountsByCategory']),
      productId () {
        return this.$route.params.productId
      }
    }
  },
  nt = { class: 'container', style: { 'max-width': '1440px', margin: 'auto' } },
  it = { class: 'header' },
  ct = {
    class: 'navigaton h-full d-flex justify-content-between align-items-center'
  },
  at = t(
    'div',
    { class: 'logoSection' },
    [t('img', { style: { 'object-fit': 'contain' }, src: M, alt: '' })],
    -1
  ),
  rt = {
    class:
      'navMenu d-flex justify-content-centerr align-items-center gap-3 me-4'
  },
  dt = {
    class: 'd-flex justify-content-center align-items-center gap-4 mt-3',
    style: { 'list-style-type': 'none' }
  },
  lt = t('hr', null, null, -1),
  pt = { class: 'menu d-flex justify-content-between align-items-center' },
  ut = { class: 'allMenu' },
  _t = {
    class: 'd-flex justify-content-center align-items-center gap-3',
    style: { 'list-style-type': 'none' }
  },
  xt = t(
    'li',
    {
      class:
        'allCategory d-flex justify-content-center align-items-center gap-1',
      style: {
        'background-color': '#3BB77E',
        width: '250px',
        height: '45px',
        'border-radius': '5px'
      }
    },
    [
      t('i', { class: 'bx bx-grid-alt' }),
      x(' Browser all categories '),
      t('i', { class: 'bx bx-chevron-down' })
    ],
    -1
  ),
  gt = P(
    '<div class="contactMenu d-flex justify-content-center align-items-center gap-2"><div class="icon mt-2"><i class="bx bx-headphone" style="font-size:36px;"></i></div><div class="contact"><div class="number" style="font-size:20px;color:#3BB77E;font-weight:700;">1900 - 8888</div><div class="status" style="font-size:12px;">24/7 support center</div></div></div>',
    1
  ),
  ht = t('hr', null, null, -1),
  bt = { key: 0, class: 'productDetail' },
  mt = { class: 'direction', style: { color: '#7E7E7E', padding: '1% 0' } },
  ft = t('i', { class: 'bx bx-chevron-right' }, null, -1),
  yt = t('i', { class: 'bx bx-chevron-right' }, null, -1),
  vt = { style: { color: '#3BB77E' } },
  wt = { class: 'maniContent d-flex justify-content-between' },
  Et = {
    class: 'd-flex align-items-center justify-content-center',
    style: {
      width: '50%',
      'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      'border-radius': '5px'
    }
  },
  kt = { class: 'content', style: { width: '50%', padding: '0 2%' } },
  $t = {
    class: 'd-flex align-items-center justify-content-center my-4',
    style: { height: '100px', width: '50%', gap: '10px' }
  },
  Bt = t(
    'div',
    {
      class: 'back border px-2 py-1',
      style: { 'border-radius': '50%', cursor: 'pointer' }
    },
    [t('i', { class: 'bx bx-left-arrow-alt', style: { 'font-size': '15px' } })],
    -1
  ),
  Pt = t(
    'div',
    {
      class: 'next border px-2 py-1',
      style: { 'border-radius': '50%', cursor: 'pointer' }
    },
    [
      t('i', { class: 'bx bx-right-arrow-alt', style: { 'font-size': '15px' } })
    ],
    -1
  ),
  Nt = {
    class: 'detail p-5 rounded mb-5',
    style: { 'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }
  },
  jt = t(
    'div',
    {
      class: 'header d-flex align-items-center justify-content-start gap-3',
      style: { 'font-weight': '700' }
    },
    [
      t(
        'div',
        {
          class: 'description py-2 px-4',
          style: {
            'border-radius': '40px',
            'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            color: '#3BB77E',
            'font-weight': '500',
            cursor: 'pointer'
          }
        },
        'Description'
      ),
      t(
        'div',
        {
          class: 'additionalInfo py-2 px-4',
          style: {
            'border-radius': '40px',
            'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            'font-weight': '500',
            cursor: 'pointer'
          }
        },
        'Additional Info'
      ),
      t(
        'div',
        {
          class: 'reviews py-2 px-4',
          style: {
            'border-radius': '40px',
            'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            'font-weight': '500',
            cursor: 'pointer'
          }
        },
        'Reviews(3)'
      )
    ],
    -1
  ),
  St = { class: 'content mt-5' },
  It = { style: { color: '#7E7E7E' } }
function Lt (p, f, c, y, v, h) {
  const b = l('Search_box'),
    n = l('MenuItem'),
    w = l('RouterLink'),
    d = l('ProductImage'),
    N = l('ProductDetail')
  return (
    s(),
    o('div', nt, [
      t('header', it, [
        t('nav', ct, [
          at,
          e(b),
          t('div', rt, [
            t('ul', dt, [
              e(n, {
                menuName: 'Account',
                icon: 'bx-user',
                icon_color: 'back',
                dropList: 'none',
                font_weight: '400'
              }),
              e(n, {
                menuName: 'Compare',
                icon: 'bx-recycle',
                icon_color: 'back',
                dropList: 'none',
                font_weight: '400'
              }),
              e(n, {
                menuName: 'Wishlist',
                icon: 'bx-heart',
                icon_color: 'back',
                dropList: 'none',
                font_weight: '400'
              }),
              e(n, {
                menuName: 'Cart',
                icon: 'bx-cart',
                icon_color: 'back',
                dropList: 'none',
                font_weight: '400'
              })
            ])
          ])
        ])
      ]),
      lt,
      t('div', pt, [
        t('div', ut, [
          t('ul', _t, [
            xt,
            e(
              w,
              { to: '/categories/1' },
              {
                default: k(() => [
                  e(n, {
                    menuName: 'Hot Deals',
                    icon: 'bxs-hot',
                    icon_color: '#3BB77E',
                    dropList: 'yes',
                    font_weight: '700'
                  })
                ]),
                _: 1
              }
            ),
            e(
              w,
              { to: '/' },
              {
                default: k(() => [
                  e(n, {
                    menuName: 'Home',
                    icon: 'none',
                    icon_color: 'black',
                    dropList: 'none',
                    font_weight: '700'
                  })
                ]),
                _: 1
              }
            ),
            e(n, {
              menuName: 'Food',
              icon: 'none',
              icon_color: 'black',
              dropList: 'yes',
              font_weight: '700'
            }),
            e(n, {
              menuName: 'Vegetables',
              icon: 'none',
              icon_color: 'black',
              dropList: 'yes',
              font_weight: '700'
            }),
            e(n, {
              menuName: 'Drink',
              icon: 'none',
              icon_color: 'black',
              dropList: 'none',
              font_weight: '700'
            }),
            e(n, {
              menuName: 'Cookies',
              icon: 'none',
              icon_color: 'black',
              dropList: 'none',
              font_weight: '700'
            }),
            e(n, {
              menuName: 'Meat & Seafood',
              icon: 'none',
              icon_color: 'black',
              dropList: 'yes',
              font_weight: '700'
            }),
            e(n, {
              menuName: 'Bakery',
              icon: 'none',
              icon_color: 'black',
              dropList: 'none',
              font_weight: '700'
            })
          ])
        ]),
        gt
      ]),
      ht,
      (s(!0),
      o(
        r,
        null,
        g(
          p.products,
          i => (
            s(),
            o(
              r,
              null,
              [
                i.id == h.productId
                  ? (s(),
                    o('div', bt, [
                      t('div', mt, [
                        x(' Home '),
                        ft,
                        x(' ' + a(i.type) + ' ', 1),
                        yt,
                        t('span', vt, [
                          (s(!0),
                          o(
                            r,
                            null,
                            g(
                              p.category,
                              E => (
                                s(),
                                o(
                                  r,
                                  null,
                                  [
                                    E.id == i.id
                                      ? (s(),
                                        o(r, { key: 0 }, [x(a(E.name), 1)], 64))
                                      : B('', !0)
                                  ],
                                  64
                                )
                              )
                            ),
                            256
                          ))
                        ])
                      ]),
                      t('div', wt, [
                        t('div', Et, [
                          e(
                            d,
                            { img: './assets/img/' + i.image },
                            null,
                            8,
                            ['img']
                          )
                        ]),
                        t('div', kt, [
                          e(
                            N,
                            {
                              title: i.name,
                              rating: i.rate,
                              description: i.description,
                              disPrice: i.discountPrice,
                              sellPrice: i.sellPrice
                            },
                            null,
                            8,
                            [
                              'title',
                              'rating',
                              'description',
                              'disPrice',
                              'sellPrice'
                            ]
                          )
                        ])
                      ]),
                      t('div', $t, [
                        Bt,
                        e(d, { img: './assets/img/' + i.image }, null, 8, [
                          'img'
                        ]),
                        e(d, { img: './assets/img/subImage2.png' }),
                        e(d, { img: './assets/img/subImage3.png' }),
                        e(d, { img: './assets/img/subImage4.png' }),
                        Pt
                      ]),
                      t('div', Nt, [
                        jt,
                        t('div', St, [t('article', It, a(i.description), 1)])
                      ])
                    ]))
                  : B('', !0)
              ],
              64
            )
          )
        ),
        256
      ))
    ])
  )
}
const Dt = m(ot, [['render', Lt]])
export { Dt as default }
