(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{777:function(e,a,t){"use strict";t.r(a);var s=t(19),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow"}},[e._v("#")]),e._v(" Flow")]),e._v(" "),t("p",[e._v("A "),t("a",{attrs:{href:"../developer-guide/flow"}},[e._v("flow")]),e._v(" is a list of tasks. You create flows in Kestra to automate your processes.")]),e._v(" "),t("h2",{attrs:{id:"task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[e._v("#")]),e._v(" Task")]),e._v(" "),t("p",[e._v("A task is a single action in a flow. A task can take properties as inputs, perform an action, and produce an output.")]),e._v(" "),t("p",[e._v("There are two kinds of tasks in Kestra:")]),e._v(" "),t("ul",[t("li",[e._v("Runnable Tasks")]),e._v(" "),t("li",[e._v("Flowable Tasks")])]),e._v(" "),t("h3",{attrs:{id:"runnable-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runnable-task"}},[e._v("#")]),e._v(" Runnable Task")]),e._v(" "),t("p",[e._v("Runnable Tasks handle computational work in the flow. For example, file system operations, API calls, database queries, etc. These tasks can be compute-intensive and are handled by "),t("RouterLink",{attrs:{to:"/docs/architecture/#worker"}},[e._v("workers")]),e._v(".")],1),e._v(" "),t("p",[e._v("By default, Kestra only includes a few Runnable Tasks. However, many of them are available as "),t("RouterLink",{attrs:{to:"/plugins/"}},[e._v("plugins")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"flowable-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flowable-task"}},[e._v("#")]),e._v(" Flowable Task")]),e._v(" "),t("p",[t("a",{attrs:{href:"../developer-guide/flowable"}},[e._v("Flowable Tasks")]),e._v(" only handle flow logic (branching, grouping, parallel processing, etc.) and trigger new tasks. For example, the Switch task takes inputs and decides the next tasks to run.")]),e._v(" "),t("p",[e._v("A Flowable Task is handled by executors and can be called very often. Because of that, these tasks cannot include intensive computations, unlike Runnable Tasks. Most of the common Flowable Tasks are available in the default Kestra installation.")]),e._v(" "),t("h2",{attrs:{id:"namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[e._v("#")]),e._v(" Namespace")]),e._v(" "),t("p",[e._v("A namespace is like a folder for flows. A namespace is composed of words and letters separated by "),t("code",[e._v(".")]),e._v(". The hierarchy depth for Namespaces is unlimited. Here are some examples of namespaces:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("projectOne")])]),e._v(" "),t("li",[t("code",[e._v("com.projectTwo")])]),e._v(" "),t("li",[t("code",[e._v("test.projectThree.folder")])])]),e._v(" "),t("h2",{attrs:{id:"inputs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),t("p",[t("a",{attrs:{href:"../developer-guide/inputs"}},[e._v("Inputs")]),e._v(" are parameters sent to a flow at execution time. It's important to note that inputs in Kestra are "),t("RouterLink",{attrs:{to:"/docs/developer-guide/inputs/#input-types"}},[e._v("strongly typed")]),e._v(".")],1),e._v(" "),t("p",[e._v("The inputs can be declared as either optional or mandatory. If the flow has mandatory inputs, you'll have to provide them before the execution of the flow.")]),e._v(" "),t("h2",{attrs:{id:"revision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#revision"}},[e._v("#")]),e._v(" Revision")]),e._v(" "),t("p",[e._v("Changing the source of a flow will produce a new revision for the flow. The revision is a simple incremental number that will be updated after you save any changes to the flow.")]),e._v(" "),t("p",[e._v("Internally, Kestra will track and manage all the revisions of the flow. Think of it as version control for your flows.")]),e._v(" "),t("h2",{attrs:{id:"listeners"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[e._v("#")]),e._v(" Listeners")]),e._v(" "),t("p",[t("a",{attrs:{href:"../developer-guide/listeners"}},[e._v("Listeners")]),e._v(" are special tasks that can listen to the current flow and launch tasks "),t("em",[e._v("outside the flow")]),e._v(".")]),e._v(" "),t("p",[e._v("The output of listeners will not change the execution status of the flow. Listeners are mainly used to send notifications or handle special behavior outside the primary flow.")]),e._v(" "),t("h2",{attrs:{id:"triggers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#triggers"}},[e._v("#")]),e._v(" Triggers")]),e._v(" "),t("p",[t("a",{attrs:{href:"../developer-guide/triggers"}},[e._v("Triggers")]),e._v(" are a way to start a flow from external events. For example, a trigger might initiate a flow at a scheduled time or based on external events (webhooks, file creation, etc.).")]),e._v(" "),t("h2",{attrs:{id:"templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#templates"}},[e._v("#")]),e._v(" Templates")]),e._v(" "),t("p",[t("a",{attrs:{href:"../developer-guide/templates"}},[e._v("Templates")]),e._v(" are lists of tasks that can be shared between flows. You can define a template and call it from other flows. Templates allow you to share a list of tasks and keep them updated without changing all flows that use them.")])])}),[],!1,null,null,null);a.default=r.exports}}]);