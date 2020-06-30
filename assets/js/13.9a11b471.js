(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{428:function(e,a,t){"use strict";t.r(a);var s=t(25),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flows"}},[e._v("#")]),e._v(" Flows")]),e._v(" "),t("blockquote",[t("p",[e._v("A flow is a list of task for Kestra. It defines the Kestra's all the behavior you want"),t("br"),e._v("\nfor the current flow. A flow is so a simple list of Task, group by namespace.")])]),e._v(" "),t("h2",{attrs:{id:"task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[e._v("#")]),e._v(" Task")]),e._v(" "),t("p",[e._v("A Task is single action in a flow."),t("br"),e._v("\nA task is can optionally takes inputs, performs an action, and produces an optional result."),t("br"),e._v("\nThere is 2 kind of Task in Kestra :")]),e._v(" "),t("h3",{attrs:{id:"orchestrate-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#orchestrate-task"}},[e._v("#")]),e._v(" Orchestrate Task")]),e._v(" "),t("p",[e._v("This kind of tasks only handle workflow state and trigger new tasks. It will handle the logic"),t("br"),e._v("\nof the flow allowing to do complex workflow like branching, parallel tasks, ..."),t("br"),e._v("\nA simple example is a "),t("code",[e._v("Switch")]),e._v(" task that can take any inputs and decide witch are"),t("br"),e._v("\nthe nexts tasks to run (and allow branching).")]),e._v(" "),t("p",[e._v("A Orchestrate tasks is handled by "),t("code",[e._v("Executors")]),e._v(" and can be called very often so it can't run"),t("br"),e._v("\nintensive computation.")]),e._v(" "),t("p",[e._v("The most common Orchestrate Task will be keep in the core.")]),e._v(" "),t("h3",{attrs:{id:"runnable-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runnable-task"}},[e._v("#")]),e._v(" Runnable Task")]),e._v(" "),t("p",[e._v("Runnable Task are here to handle any computation work. This can be anything like file systems"),t("br"),e._v("\noperation, api call, database query, ... Theses tasks can be compute intensive since it will be"),t("br"),e._v("\nhandle by "),t("code",[e._v("Workers")]),e._v(". By default, Kestra don't have a lot of "),t("code",[e._v("RunnableTask")]),e._v(" and mostly all the tasks"),t("br"),e._v("\nwill be available as Plugins.")]),e._v(" "),t("h2",{attrs:{id:"namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[e._v("#")]),e._v(" Namespace")]),e._v(" "),t("p",[e._v("A namespace is a like a folders for file system. It aim to group flows in a limitless hierarchy."),t("br"),e._v("\nNamespace is compose by word and letters separated by "),t("code",[e._v(".")]),e._v(". The hierarchy depth is not limited and"),t("br"),e._v("\nis free for Kestra users to fit their organization.")]),e._v(" "),t("h2",{attrs:{id:"inputs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),t("p",[e._v("Inputs are mandatory or optional parameters sent to a flow in order to be successfully run. It can"),t("br"),e._v("\nbe anythings (string, int, file, ...) to will be send when the execution is created. Flow must"),t("br"),e._v("\ndefined possible inputs and mandatory one will be validated before the creation of the execution.")]),e._v(" "),t("h2",{attrs:{id:"revision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#revision"}},[e._v("#")]),e._v(" Revision")]),e._v(" "),t("p",[e._v("Each flow modification will produce a new revision, revision a simple increments number that will"),t("br"),e._v("\nupdate after each change of the flow. Internally Kestra will track and keep all revisions of the"),t("br"),e._v("\nflow.")]),e._v(" "),t("h2",{attrs:{id:"listeners"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[e._v("#")]),e._v(" Listeners")]),e._v(" "),t("p",[e._v("Listeners are special task that can listen to the current flow and launch task "),t("em",[e._v("outside of the flow")]),e._v("."),t("br"),e._v("\nThe result of the tasks will not change the execution status. Mostly Listeners are here to send"),t("br"),e._v("\nnotification or handle special end task behaviour that you don't want to be considered as main workflow.")])])}),[],!1,null,null,null);a.default=n.exports}}]);