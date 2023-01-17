(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{577:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("hr"),s._v(" "),a("h2",{attrs:{id:"theme-channing-cyan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-channing-cyan"}},[s._v("#")]),s._v(" theme: channing-cyan")]),s._v(" "),a("h3",{attrs:{id:"vue使用render来写组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue使用render来写组件"}},[s._v("#")]),s._v(" vue使用render来写组件")]),s._v(" "),a("h3",{attrs:{id:"渲染函数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染函数介绍"}},[s._v("#")]),s._v(" 渲染函数介绍")]),s._v(" "),a("p",[s._v("Vue 推荐在绝大多数情况下使用模板来创建你的HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("让我们深入一个简单的例子，这个例子里render函数很实用。假设我们要生成一些带锚点的标题。\n首先来定义一个简单的组件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div>\n     <h1 v-if="level === 1">\n    <slot></slot>\n  </h1>\n  <h2 v-else-if="level === 2">\n    <slot></slot>\n  </h2>\n  <h3 v-else-if="level === 3">\n    <slot></slot>\n  </h3>\n  <h4 v-else-if="level === 4">\n    <slot></slot>\n  </h4>\n   <h5 v-else-if="level === 5">\n    <slot></slot>\n  </h5>\n  <h6 v-else>\n     <slot></slot>\n  </h6>\n  </div>\n</template>\n<script>\nexport default {\n  props:{\n    level:{\n      type:Number,\n      default:1\n    }\n  },\n  data(){\n    return {\n\n    }\n  }\n}\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("p",[s._v("组件完成，来引用组件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>\n    <heading :level='level'>这里是插槽内容 现在的leave={{2}}</heading>\n  </div>\n</template>\n<script>\n\nimport heading from './heading.vue'\nexport default {\n  components:{\n    heading:heading\n  },\n  data() {\n    return {\n      level:2\n    }\n  },\n\n}\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2a1ac26b3414272b033e1bc4d6bd53b~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),s._v("\n效果如图，如果打开控制台也是可以看见标签元素是h2。\n这样写显得很麻烦，如果我们来试试render函数写一波新组件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\nexport default {\n  name: 'heading',\n  props: {\n    level: {\n      type: Number,\n      default: 1,\n    },\n  },\n  data() {\n    return {}\n  },\n  computed: {},\n  methods: {},\n  render(createElement) {\n    let arr = [1,2,3,4,5]\n    return createElement('div', {\n      class: {\n        // 这里可以添加class\n      },\n      attrs: {\n        // 添加属性的地方\n      },\n      domProps: {\n        // 内容\n      },\n      on: {\n          // 添加事件的地方\n      },\n    },\n    [\n    arr.includes(this.level)?createElement('h'+this.level, this.$slots.default):createElement('h6', this.$slots.default)\n\n    ])\n  },\n}\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("p",[s._v("这里保持和原来使用模板写的组件一样最外层一层div里面才是包这h标签，当非12345的时候，使用h6标签。\n所以这里可以简单看出createElement(Element,options,childrens);Element是要渲染的元素标签，options这里是该标签的一些配置也可以添加事件比如class/attrs/domProps属性，childres是一个数组里面放着子内容也可以由多个createElement(Element,options,childrens)这样的内容，具体的话看具体情况。")]),s._v(" "),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("ul",[a("li",[s._v("最主要最关键的原因是函数式组件不需要实例化，无状态，没有生命周期，所以渲染性能要好于普通组件")]),s._v(" "),a("li",[s._v("函数式组件结构比较简单，代码结构更清晰")])]),s._v(" "),a("h3",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),a("p",[s._v("关于渲染函数还是要多使用，孰能生巧，肯定没错，写多了就理解的快。第一次使用markdown写文章 还是很爽的，只是学到一些简单的语法。之后应该会分享一些ts和vue3的实践，因为最近写的最多的就这个。")])])}),[],!1,null,null,null);n.default=t.exports}}]);