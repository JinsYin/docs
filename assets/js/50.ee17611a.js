(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{641:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"deployment-on-kubernetes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment-on-kubernetes"}},[e._v("#")]),e._v(" Deployment on Kubernetes")]),e._v(" "),r("p",[e._v("The recommended deployment environment for "),r("strong",[e._v("production")]),e._v(" workload is "),r("a",{attrs:{href:"http://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),r("OutboundLink")],1),e._v("."),r("br"),e._v("\nWe provide an "),r("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm Charts"),r("OutboundLink")],1),e._v(" in order to deploy your cluster.")]),e._v(" "),r("ul",[r("li",[e._v("The chart repository is available "),r("a",{attrs:{href:"https://helm.kestra.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("The source code of the charts is "),r("a",{attrs:{href:"https://github.com/kestra-io/helm-charts",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("By default, the helm can deploy :")]),e._v(" "),r("ul",[r("li",[e._v("Zookeeper using "),r("code",[e._v("kafka.enabled: true")])]),e._v(" "),r("li",[e._v("Kafka cluster using "),r("code",[e._v("kafka.enabled: true")])]),e._v(" "),r("li",[e._v("Elasticsearch cluster using "),r("code",[e._v("elasticsearch.enabled: true")])]),e._v(" "),r("li",[e._v("All "),r("a",{attrs:{href:"../../../architecture"}},[e._v("Kestra servers")]),e._v(" in separate pods.")])]),e._v(" "),r("p",[e._v("You can change the default behaviour and configuring your cluster changing the "),r("a",{attrs:{href:"https://github.com/kestra-io/helm-charts/blob/master/charts/kestra/values.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("defaults values"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Most important configuration that will provide Kestra "),r("a",{attrs:{href:"../../configuration"}},[e._v("configuration files")]),e._v(" are:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("configuration")]),e._v(": in order to set the whole configuration files from kestra")]),e._v(" "),r("li",[r("code",[e._v("secrets")]),e._v(": that will be merged with "),r("code",[e._v("configuration")]),e._v(" but kept as secret on your k8s cluster.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);