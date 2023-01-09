(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{747:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"worker-isolation-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker-isolation-configuration"}},[t._v("#")]),t._v(" Worker Isolation configuration")]),t._v(" "),a("h2",{attrs:{id:"java-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-security"}},[t._v("#")]),t._v(" Java security")]),t._v(" "),a("p",[t._v("By default, Kestra uses a "),a("a",{attrs:{href:"../../architecture#worker"}},[t._v("shared worker")]),t._v(" in order to handle workloads. This is fine for most use cases, but when you are using a shared Kestra instance between multiple teams, since the worker shares the same file systems, this can allow people to access temporary files created by Kestra with powerful tasks like "),a("a",{attrs:{href:"/plugins/plugin-script-groovy/tasks/io.kestra.plugin.scripts.groovy.Eval"}},[t._v("Groovy")]),t._v(", "),a("a",{attrs:{href:"/plugins/plugin-script-jython/tasks/io.kestra.plugin.scripts.jython.Eval"}},[t._v("Jython")]),t._v("...")]),t._v(" "),a("p",[t._v("You can use the following to opt-in to real isolation of file systems using advanced Kestra EE java security :")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("java-security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forbidden-paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /etc/\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authorized-class-prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" io.kestra.core.tasks\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" io.kestra.plugin.gcp\n")])])]),a("h3",{attrs:{id:"kestra-ee-java-security-forbidden-paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kestra-ee-java-security-forbidden-paths"}},[t._v("#")]),t._v(" "),a("code",[t._v("kestra.ee.java-security.forbidden-paths")])]),t._v(" "),a("p",[t._v("This is the filepath on the system that the Kestra Worker will be forbidden to read or write at all times. This can be useful to protect Kestra configuration files for example.")]),t._v(" "),a("h3",{attrs:{id:"kestra-ee-java-security-authorized-class-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kestra-ee-java-security-authorized-class-prefix"}},[t._v("#")]),t._v(" "),a("code",[t._v("kestra.ee.java-security.authorized-class-prefix")])]),t._v(" "),a("p",[t._v("This security prevents access to file system or thread creation (that would prevent us to check file system access). Most of the plugins will never need to have file system access (except on temporary directories that are created & isolated for a task, and are whitelisted by default). Here you can set a list of prefixes (namespace) classes that will be allowed, all others will be refused.")]),t._v(" "),a("p",[t._v("For example, "),a("RouterLink",{attrs:{to:"/plugins/plugin-gcp/"}},[t._v("GCP plugins")]),t._v(" will need to create a thread in order to reach the GCP api. Since this whole plugin is deemed safe, you can whitelist it.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("At this time, all the Kestra official plugins are safe to be whitelisted "),a("strong",[t._v("except")]),t._v(" "),a("RouterLink",{attrs:{to:"/plugins/plugin-script-groovy/"}},[t._v("all scripts plugins")]),t._v(" since it allows custom code to be created that can read & write on the file system. This one must not be added to the "),a("code",[t._v("authorized-class-prefix")])],1)]),t._v(" "),a("h2",{attrs:{id:"scripting-isolation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripting-isolation"}},[t._v("#")]),t._v(" Scripting isolation")]),t._v(" "),a("p",[t._v("For "),a("RouterLink",{attrs:{to:"/plugins/core/tasks/scripts/io.kestra.core.tasks.scripts.Bash.html"}},[t._v("Bash tasks")]),t._v(" & other script tasks in the core, we advise you to force "),a("code",[t._v("DOCKER")]),t._v(" isolation and to configure global cluster "),a("RouterLink",{attrs:{to:"/docs/administrator-guide/configuration/others/#kestra-tasks-defaults"}},[t._v("taskDefaults")]),t._v(":")],1),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kestra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaults")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.scripts.Bash\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("forced")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dockerOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DOCKER\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You will need to add all script plugins tasks (like Python & Node) to be sure that no tasks can bypass the docker isolation.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);