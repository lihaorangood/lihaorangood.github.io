(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{541:function(n,s,a){"use strict";a.r(s);var e=a(5),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[n._v("#")]),n._v(" 题目描述")]),n._v(" "),a("p",[n._v("题目链接："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[n._v("反转链表"),a("OutboundLink")],1)]),n._v(" "),a("p",[n._v("题目描述我用截图leetcode的为主，所以题目如下图")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f12f8fc94075459aae3e7beb092fb15a~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[n._v("#")]),n._v(" 思路分析")]),n._v(" "),a("p",[n._v("依照题目可以知道，这题考链表，并且要求用迭代(a()=>b()=>c()按顺序执行)和递归(a(a):a方法调用a方法)去实现;\n解题思路：新建一个空链表 按顺序遍历的时候把新链表的指针指向值，需要在遍历的过程当中，先将下一个节点保存，然后再操作next指向，不然可能出现指针丢失。\n注意点：需求考虑null的情况(采坑了)")]),n._v(" "),a("h3",{attrs:{id:"ac-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[n._v("#")]),n._v(" AC 代码")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\n // 迭代\nvar reverseList = (first=>{\n    if(!first){\n      return null\n    }\n    let resultList = null, linkedList = first;\n    while (linkedList) {\n      let next = linkedList.next;\n      linkedList.next = resultList;\n      resultList = linkedList;\n      linkedList = next;\n    }\n    return resultList;\n})\n\n\n// 递归\nvar reverseList =  (head=>{\n    if(!head){\n      return null\n    }\n    var linkedList\n    var gc = (back=>{\n        if (!back.next) {\n            linkedList = back\n            return back\n        } else {\n            var node = gc(back.next)\n            node.next = back\n            if (head === back) {\n                back.next = null\n                return linkedList\n            } else {\n                return back\n            }\n        }\n    })\n    return gc(head)\n})\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);