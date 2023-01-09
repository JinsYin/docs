(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{636:function(t,e,a){t.exports=a.p+"assets/img/topology.fe80aeb6.jpg"},722:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("While building "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kestra"),s("OutboundLink")],1),t._v(", an open-source data orchestration and scheduling platform, we decided to use Kafka as the main database to build a scalable architecture. Since Kafka allows gigabytes of throughput, we are confident to have a fully scalable solution, but we need to adapt to Kafka.")]),t._v(" "),s("p",[t._v("Since we heavily rely on "),s("a",{attrs:{href:"https://kafka.apache.org/documentation/streams/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka Streams"),s("OutboundLink")],1),t._v(" for most of our services (executor and scheduler mostly), we have made some assumptions on how it handles the workload. This blog post is here to show some advanced techniques we have to use to have a Kafka Stream reliable, we want to share with you the tips we have discovered during the last two years.")]),t._v(" "),s("h2",{attrs:{id:"same-topic-as-source-and-destination"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#same-topic-as-source-and-destination"}},[t._v("#")]),t._v(" Same topic as source and destination")]),t._v(" "),s("p",[t._v("In "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kestra"),s("OutboundLink")],1),t._v(", we have a topic with the current execution that is the source and also the destination, we only update the current execution to add some information and send it back to Kafka to further processing (New tasks status for example). We are not sure that this design is possible with Kafka which lead to asking "),s("a",{attrs:{href:"https://twitter.com/tchiotludo/status/1252197729406783488",target:"_blank",rel:"noopener noreferrer"}},[t._v("Matthias J. Sax"),s("OutboundLink")],1),t._v(", one of the main maintainers of Kafka Streams, that respond to me on "),s("a",{attrs:{href:"https://stackoverflow.com/questions/61316312/does-kafka-stream-with-same-sink-source-topics-with-join-is-supported",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stack Overflow"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The short response: YES it's possible")]),t._v(" "),s("p",[t._v("The long one: YES it's possible "),s("strong",[t._v("IF")]),t._v(" you are sure at 100% that for the same key (the execution in our case), you must "),s("strong",[t._v("have only one")]),t._v(" process that can write. If you see this warning in the console "),s("code",[t._v("Detected out-of-order KTable update for execution at offset 10, partition 7.")]),t._v(", you are probably in that case and this can lead to unexpected behavior (like overwrite of previous values).")]),t._v(" "),s("p",[t._v("Let me explain, imagine a topology with topic as source, some branching logic, and to different process writing to the same destinations:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KStream")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" executions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Consumed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serdes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerde")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexecutions\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("readOnlyKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Produced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serdes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerde")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexecutions\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("leftJoin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"results"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Consumed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serdes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerde")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkerTaskResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("readOnlyKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" value1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Produced")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serdes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerde")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In that case, a concurrent process can write on the same topic, overwriting the previous value and destroying the previous computed methods."),s("br"),t._v("\nFor that usage, you must define a single writer for a Key at the same time. That led to our next part: a custom joiner")]),t._v(" "),s("h2",{attrs:{id:"custom-joiner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-joiner"}},[t._v("#")]),t._v(" Custom Joiner")]),t._v(" "),s("p",[t._v("In order to process execution, we have separated microservice as multiple topics, the easier topology to understand is:")]),t._v(" "),s("ul",[s("li",[t._v("a topic with the executions (with multiple tasks)")]),t._v(" "),s("li",[t._v("a topic with task results.")])]),t._v(" "),s("p",[t._v("To allow the next task to start, we need to create a state with all task results merge into the current execution. The first choice was to use a simple "),s("code",[t._v("join()")]),t._v(" from Kafka Streams, what a terrible choice!")]),t._v(" "),s("p",[t._v("All join provided by Kafka Streams were designed thinking with aggregation in minds (like sum, avg, ...) and works well for that case. How? It will simply process all the incoming data from both topics 1 per 1, we will see all the changes on the streams on both sides, as seen below :")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# timeline\n--A-------- > Execution\n-----B--C-- > Task Result\n\n# join result timeline\n- (A,null)\n- (A, B) => emit (A+B)\n- (A, C) => emit (A+C) <=== you have overwrite the result of A+B\n- (A+B, null)\n- (A+C, null) <== we will never have (A+B+C)\n")])])]),s("p",[t._v("In our case, we are building a state machine, and we want to keep the last state of execution, meaning we don't want to see all intermediate states (like in aggregation). In that case, we have no other choice but to build "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/ExecutorJoinerTransformer.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("a custom joiner"),s("OutboundLink")],1),t._v(" since Kafka Stream doesn't have any one built-in.")]),t._v(" "),s("p",[t._v("To handle this case, we need to :")]),t._v(" "),s("ul",[s("li",[t._v("create a "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/ExecutorFromExecutionTransformer.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("manually a store"),s("OutboundLink")],1),t._v(" that will save the last state of an execution")]),t._v(" "),s("li",[t._v("create a custom "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/8a17519b5b41e8ba0ab8e0044c9c6b1e887ccd94/runner-kafka/src/main/java/io/kestra/runner/kafka/executors/ExecutorMain.java#L216-L246",target:"_blank",rel:"noopener noreferrer"}},[t._v("merge function"),s("OutboundLink")],1),t._v(" that will merge the execution stream with the task results stream")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/ExecutorJoinerTransformer.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("get the last value"),s("OutboundLink")],1),t._v(" from the state, add the task result and emit the new state that will be saved finally on the store and the final topics.")])]),t._v(" "),s("p",[t._v("With all of that, we are sure that the execution state will always be the last version whatever the number of tasks results coming in parallel.")]),t._v(" "),s("h2",{attrs:{id:"easy-distributed-workload-between-multiple-backends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#easy-distributed-workload-between-multiple-backends"}},[t._v("#")]),t._v(" Easy distributed workload between multiple backends")]),t._v(" "),s("p",[t._v("In "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kestra"),s("OutboundLink")],1),t._v(", we have a scheduler that will look up all flows to schedule (timed-based) execution or with a long-pooling mechanism (detect file on file systems like S3 or SFTP). As we wanted to have no single point of failure also on this service, we need to split all the flow between all instances of schedulers.")]),t._v(" "),s("p",[t._v("To handle that case, we rely on Kafka's consumer groups that will handle the whole complexity of a distributed system for us. The logic is :")]),t._v(" "),s("ul",[s("li",[t._v("Create a "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/KafkaFlowListeners.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka stream"),s("OutboundLink")],1),t._v(" that will read in a "),s("code",[t._v("KTable")]),t._v(" and transmit all the result to a "),s("code",[t._v("Consumer")])]),t._v(" "),s("li",[t._v("Listen to state change, meaning mostly "),s("code",[t._v("REBALANCED")]),t._v(" Streams, and empty all the flows for the "),s("code",[t._v("Consumer")])]),t._v(" "),s("li",[t._v("On the "),s("code",[t._v("READY")]),t._v(" state, read all the "),s("code",[t._v("KTable")]),t._v(" again.")])]),t._v(" "),s("p",[t._v("With these, all flows will be dispatched on all listeners, that's mean if you have 1,000 flows, approximately every consumer will have ~ 500 flows (depending on the repartition of keys). Kafka will handle all the heavy parts of the distributed systems :")]),t._v(" "),s("ul",[s("li",[t._v("Heartbeat to detect failure for a consumer")]),t._v(" "),s("li",[t._v("Notifying of rebalancing")]),t._v(" "),s("li",[t._v("Ensure exactly-once pattern for a topic, giving the assurance that only one consumer will handle the data.")])]),t._v(" "),s("p",[t._v("This way you will have a fully distributed system thanks to Kafka without the pain to pass a Jespen analysis.")]),t._v(" "),s("h2",{attrs:{id:"use-partitions-to-detect-dead-consumers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-partitions-to-detect-dead-consumers"}},[t._v("#")]),t._v(" Use partitions to detect dead consumers")]),t._v(" "),s("p",[t._v("For "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kestra"),s("OutboundLink")],1),t._v(", we need to detect when a worker was processing a task and died (many cases possible through outage to simple restart during processing works).")]),t._v(" "),s("p",[t._v("Thanks to Kafka consumer, we can know the partition that is affected this consumer. We use these nice features to detect dead workers. How? Here is the logic :")]),t._v(" "),s("ul",[s("li",[t._v("We create a "),s("code",[t._v("UUID")]),t._v(" a startup for the worker")]),t._v(" "),s("li",[t._v("When a consumer connects to Kafka, we "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/4a61af45d668feab19313b9033826fa7075bf02b/runner-kafka/src/main/java/io/kestra/runner/kafka/KafkaWorkerTaskQueue.java#L157-L187",target:"_blank",rel:"noopener noreferrer"}},[t._v("listen to partitions"),s("OutboundLink")],1),t._v(" affected using a "),s("code",[t._v("ConsumerRebalanceListener")]),t._v(" and we publish to Kafka a WorkerInstance with "),s("code",[t._v("UUID")]),t._v(" and partition assigned.")]),t._v(" "),s("li",[t._v("For each task run, we publish a message with "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/4a61af45d668feab19313b9033826fa7075bf02b/runner-kafka/src/main/java/io/kestra/runner/kafka/KafkaWorkerTaskQueue.java#L112-L123",target:"_blank",rel:"noopener noreferrer"}},[t._v("TaskRunning"),s("OutboundLink")],1),t._v(" with the Worker UUID")])]),t._v(" "),s("p",[t._v("Now, let's handle the data stored in Kafka. The main logic is a "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/WorkerInstanceTransformer.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka Stream"),s("OutboundLink")],1),t._v(" that:")]),t._v(" "),s("ul",[s("li",[t._v("Create a global "),s("code",[t._v("KTable")]),t._v(" with all the "),s("code",[t._v("WorkerInstance")])]),t._v(" "),s("li",[t._v("On every change, it will listen to "),s("code",[t._v("WorkerInstance")]),t._v(" changed")]),t._v(" "),s("li",[t._v("If there is a new "),s("code",[t._v("WorkerInstance")]),t._v(", we look at the partition assigned on this one, if there is an overlap between this instance partitions and the previous, we are sure that the previous "),s("code",[t._v("WorkerInstance")]),t._v(" is dead (in Kafka, you can't have 2 consumers on the same partition).")]),t._v(" "),s("li",[t._v("We only need to look at the Task affected to this "),s("code",[t._v("WorkerInstance")]),t._v(" and resend them for processing.")])]),t._v(" "),s("p",[t._v("Et voila 🎉 We have detection of dead consumers for free only with Kafka  API.")]),t._v(" "),s("h2",{attrs:{id:"state-store-all"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-store-all"}},[t._v("#")]),t._v(" State store "),s("code",[t._v("all()")])]),t._v(" "),s("p",[t._v("We need to use a "),s("a",{attrs:{href:"https://kafka.apache.org/31/documentation/streams/developer-guide/dsl-api.html#streams_concepts_globalktable",target:"_blank",rel:"noopener noreferrer"}},[t._v("GlobalKTable"),s("OutboundLink")],1),t._v(" in order to detect "),s("RouterLink",{attrs:{to:"/docs/developer-guide/triggers/flow.html"}},[t._v("flow trigger")]),t._v(": for all the flow on the cluster, we test all the flows "),s("RouterLink",{attrs:{to:"/docs/developer-guide/conditions/"}},[t._v("conditions")]),t._v(" in order to find matching flows. For this, we are using an API to fetch all flows from a "),s("code",[t._v("GlobalKTable")]),t._v(" using "),s("code",[t._v("store.all()")]),t._v(" that returned all the flows, fetching RockDb.")],1),t._v(" "),s("p",[t._v("The first assumption is that "),s("code",[t._v("all()")]),t._v(" returned is an object (Flow in our case), as the API return Object, but we discovered that the "),s("code",[t._v("all()")]),t._v(" will:")]),t._v(" "),s("ul",[s("li",[t._v("fetch all the data from RockDB (ok for that)")]),t._v(" "),s("li",[t._v("deserialize the data from RockDB that is stored as byte and map it to concrete Java POJO")])]),t._v(" "),s("p",[t._v("So each time we call "),s("code",[t._v("all()")]),t._v(" on the method, all values are deserialized, which can lead to high CPU usage and latency on your stream. For our usage case, we are talking about all flows revision on our cluster, 2,500 flows (last revision) in our cases, but we don't see people are creating a lot of revisions (100,000), imagine 100,000 "),s("code",[t._v("byte[]")]),t._v(" to deserialize to POJO for every call (mostly all the execution end).")]),t._v(" "),s("p",[t._v("Since we only need the last revision in our use case, we create an in-memory Map with all the flows using:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGlobalStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stores")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyValueStoreBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stores")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("persistentKeyValueStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FLOW_STATE_STORE_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serdes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerde")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    kafkaAdminService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTopicName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Consumed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serdes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerde")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GlobalStore.Flow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GlobalInMemoryStateProcessor")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        FLOW_STATE_STORE_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        flows "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" kafkaFlowExecutor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFlows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" kafkaFlowExecutor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("with "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/master/runner-kafka/src/main/java/io/kestra/runner/kafka/streams/GlobalInMemoryStateProcessor.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("GlobalInMemoryStateProcessor"),s("OutboundLink")],1),t._v(" a simple wrapper that saves to state store and sends a full list on every change (not so frequent) and decided to gather all flow in memory. This works well on our use cases because we know that an instance of Kestra will not have millions of flows.")]),t._v(" "),s("p",[t._v("But keep in mind, all store operations (also get) will lead to deserialization that costs you some CPU.")]),t._v(" "),s("h2",{attrs:{id:"many-source-topics-within-a-stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#many-source-topics-within-a-stream"}},[t._v("#")]),t._v(" Many source topics within a stream")]),t._v(" "),s("p",[t._v("At first, we designed "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kestra"),s("OutboundLink")],1),t._v(" to have only one "),s("strong",[t._v("huge")]),t._v(" stream for all the processing from the executor. At first, it seems to be cool but this lead to some drawback.")]),t._v(" "),s("p",[t._v("Here is the last version of our main and only one Kafka Stream with many topics 🙉:"),s("br"),t._v(" "),s("img",{attrs:{src:a(636),alt:"Kestra Topology"}}),s("br"),t._v("\nYes, this is some kind of very large Kafka Streams. It was working almost despite the complexity of this one. But the major drawback was :")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Monitoring")]),t._v(": all the metrics are under the same consumer groups")]),t._v(" "),s("li",[s("strong",[t._v("Debugging")]),t._v(": during a crash, each topic is consumed independently, when a message failed, the whole process is crashed")]),t._v(" "),s("li",[t._v("and the most important is "),s("strong",[t._v("lag")]),t._v(": since Kafka Stream optimizes the consumption of messages by themselves, a topic with large outputs could lead to lag on other topics unrelated topics. In that case, impossible to understand properly the lag on our consumer.")])]),t._v(" "),s("p",[t._v("Now, we have decided to split into multiple "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/tree/develop/runner-kafka/src/main/java/io/kestra/runner/kafka/executors",target:"_blank",rel:"noopener noreferrer"}},[t._v("streams"),s("OutboundLink")],1),t._v(" to be able to monitors and understand properly the lag on our Kafka Streams.")]),t._v(" "),s("p",[t._v("How to split your evil streams? We simply choose to consume only one time a topic (to avoid large network transit), so we grouped all streams by source topics.")]),t._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("We have covered here some tips that took us a large amount of time to find the way to deal with the issue. "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kestra"),s("OutboundLink")],1),t._v(" is the only infinitely scalable data orchestration and scheduling platform, that used Kafka as backend, that allows millions of executions.")]),t._v(" "),s("p",[t._v("We hope you have enjoyed this one, stay connected, and follow Kestra on "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://twitter.com/kestra_io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),s("OutboundLink")],1),t._v(", or "),s("a",{attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);