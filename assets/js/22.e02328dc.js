(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{535:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("题目链接："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/palindrome-number/",target:"_blank",rel:"noopener noreferrer"}},[s._v("回文数"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("题目描述我用截图leetcode的为主，所以题目如下图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e5cb11ba5d241259f1df6aeeac90bb7~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[s._v("#")]),s._v(" 思路分析")]),s._v(" "),a("p",[s._v("依照题目可以知道，起先思路很简单 直接转为字符串然后去反转这个字符串 看看反转前后会不会相等，然后就动手试试")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e94aec75eecb4fd29939894069194cf7~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("p",[s._v("一把过 心情愉悦，然后看到进阶下面写着不转为字符串去解决")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a17d97f803c7487b858ee3ede4b8d065~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),s._v("\n那重新思考一下这道题 当是数字的时候怎么去判断是不是回文，因为是整数，1:负数的情况肯定非回文 2. 0~9的情况肯定是回文，那就是考虑大于9的情况怎么合理正面了 3.个位是0的也不是回文(010这种应该不是整数10的写法，如果没通过，就把这个考虑去掉)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 0-9直接返回true\nif(x>=0&&x<10){\n        return true\n    }\n   // <0 或个位为0 直接返回false\n    if(x<0||x%10===0){\n        return false\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("接下来就是考虑大于10的(且个位非0)的情况，整数反转，所以直接上手. 反转操作,(\nMath.ceil向上取整、Math.floor()去小数取整、Math.round四舍五入)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" while(y!=0){\n      rvNum = y%10+rvNum*10\n      y=Math.floor(y/10)\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a421b31f6e046a6b2686871dd93c5ed~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),s._v("\n提交一下 通过了 可以对比相对于刚刚转字符串的方法需要内存更多 耗时也增加了")]),s._v(" "),a("h3",{attrs:{id:"ac-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[s._v("#")]),s._v(" AC 代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/**\n * @param {number} x\n * @return {boolean}\n */\n // 1.转为字符串\nvar isPalindrome = function(x) {\n    let y=x\n    return  y.toString().split('').reverse().join('') === x.toString()\n};\n\n// 2.整数解法\nvar isPalindrome = function(x) {\n    if(x>=0&&x<10){\n        return true\n    }\n    if(x<0||x%10===0){\n        return false\n    }\n    let y = x\n    let rvNum=0\n    while(y!=0){\n      rvNum = y%10+rvNum*10\n      y=Math.floor(y/10)\n    }\n    return rvNum===x\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);