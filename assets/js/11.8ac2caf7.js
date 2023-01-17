(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{525:function(t,a,n){"use strict";n.r(a);var s=n(5),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("题目链接："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/largest-number/",target:"_blank",rel:"noopener noreferrer"}},[t._v("最大数"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("题目描述我用截图leetcode的为主，所以题目如下图\n"),n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e6bd85f5c314cf6b51f61b240b64f1a~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),n("h3",{attrs:{id:"思路分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),n("p",[t._v("依照题目可以知道，这是从一个数组然后组成了一个数，然后求组成的最大的数。\n第一次分析：首先数字都用上 这样位数才能最大，全用上的情况有n(数组的长度)的阶乘种可能 然后求这n!情况的max值。这是一种最笨的方法也是可行的 先组成所有可能 输入最大值，不过这里我就不试这种解法了")]),t._v(" "),n("p",[t._v("再分析一下，让前面的数字尽可能的大，这样组成的数才会更大，所以并不需要组成所有组合，那我首先想到sort的方法，这里有个注意点比如[3,30]组成330要比组成303更大\n所以我马上想到解法先把输入的数组依照大小排序 不过排序方法是去对比"),n("code",[t._v("${a}${b}")]),t._v("和"),n("code",[t._v("${b}${a}")]),t._v("而不是直接去按照ab大小排序，")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a97c6fa82244d5ebf2c85f8b8f75388~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n测试一下没通过")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79b82d3d6c3b472c933af51ec0dc094d~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n尴尬了 还以为分析的很好了 却漏了其它可能性，那改进一下输入值==0的就直接输出'0',再来测试一波")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cc3029012764935851f460cf310f1de~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),n("h3",{attrs:{id:"ac-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[t._v("#")]),t._v(" AC 代码")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var largestNumber = function(nums) {\nif(nums&&nums.length>0){\n  let arr =  nums.sort((a,b)=>{\n       return (b.toString()+a.toString())-(a.toString()+b.toString())\n   })\nlet totle = ''\narr.forEach(item=>{\n   totle+= item.toString()\n})\nif(totle==0){\n    return '0'\n}else{\n    return totle\n}\n\n}else{\n    return '0'\n}\n};\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);