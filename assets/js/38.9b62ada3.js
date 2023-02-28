(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{637:function(a,e,t){a.exports=t.p+"assets/img/mario.dbe427ab.jpg"},734:function(a,e,t){"use strict";t.r(e);var s=t(19),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("The 21st century is the golden age of data. Today, modern data stacks offer numerous tools and workloads for data warehousing, data lakes, data analytics, and data engineering to manage massive amounts of data inflow. One such platform is Snowflake, a robust data cloud tool that streamlines many operations in a modern data stack.")]),a._v(" "),s("p",[a._v("In this article, we'll discuss how Snowflake integrates with "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kestra"),s("OutboundLink")],1),a._v(" (an "),s("strong",[a._v("open-source, scalable orchestration and scheduling platform")]),a._v(") using Snowflake plugin to create a seamless and scalable data pipeline.")]),a._v(" "),s("p",[a._v("First, let's discuss Snowflake briefly.")]),a._v(" "),s("h3",{attrs:{id:"what-is-snowflake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-snowflake"}},[a._v("#")]),a._v(" What is Snowflake?")]),a._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"rounded img-thumbnail mt-4 mb-4",attrs:{src:"https://cdn-images-1.medium.com/max/800/0*KLr8jj4UG7HYd1DQ",alt:"Tradeoff using a Database"}})]),a._v(" "),s("p",[a._v("Leveraged by thousands of organizations worldwide, "),s("a",{attrs:{href:"https://www.snowflake.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Snowflake"),s("OutboundLink")],1),a._v(" is a top-of-the-line SaaS cloud data warehousing and data lake platform offering reliable data pipelines with high performance, concurrency, and scale across multiple cloud providers like AWS, Azure, and GCP.")]),a._v(" "),s("p",[a._v("Snowflake is a unified cloud-native platform that enables teams to avoid data silos by sharing and collaborating on data pipelines securely. It offers a flexible "),s("a",{attrs:{href:"https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("architecture"),s("OutboundLink")],1),a._v(" with three components, i.e., robust cloud storage, query processing engine, and a layer of cloud services with numerous third-party integrations.")]),a._v(" "),s("p",[a._v("Snowflake is a "),s("strong",[a._v("multi-cloud, multi-cluster warehouse platform")]),a._v(" that can "),s("em",[a._v("auto-scale")]),a._v(" to manage virtual warehouses dynamically. In the "),s("a",{attrs:{href:"https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html#maximized-vs-auto-scale",target:"_blank",rel:"noopener noreferrer"}},[s("em",[a._v("auto-scale")]),a._v(" mode"),s("OutboundLink")],1),a._v(", it starts and stops warehouses to govern cloud resource usage and their corresponding cost credits.")]),a._v(" "),s("h3",{attrs:{id:"why-is-snowflake-popular"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-is-snowflake-popular"}},[a._v("#")]),a._v(" Why is Snowflake Popular?")]),a._v(" "),s("p",[a._v("In the last few years, Snowflake has had huge traction. Today more than 5900+ companies (as of March 2022) are running their critical data pipelines on Snowflake.")]),a._v(" "),s("p",[a._v("With Snowflake, companies don't have to pay for huge and expensive licenses for using data warehousing tools. Unlike conventional data warehousing tools, Snowflake charges on a "),s("strong",[a._v("pay-as-you-basis for storage and compute")]),a._v(", enabling small and medium-scale companies to leverage cloud data pipelines for improved data management.")]),a._v(" "),s("p",[a._v("Now, companies can build "),s("strong",[a._v("scalable data workloads")]),a._v(" that can perform strong data analysis on structured, unstructured, and semi-structured data to derive valuable business insights and make data-driven decisions. Additionally, "),s("a",{attrs:{href:"https://www.snowflake.com/data-marketplace/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Snowflake Data Marketplace"),s("OutboundLink")],1),a._v(" allows customers to access numerous ready-to-query datasets, further reducing integration costs.")]),a._v(" "),s("h3",{attrs:{id:"where-does-kestra-fit-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-does-kestra-fit-in"}},[a._v("#")]),a._v(" Where does kestra fit in?")]),a._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("img",{staticClass:"rounded img-thumbnail mt-4 mb-4",attrs:{src:t(637),alt:"Tradeoff using a Database"}})]),a._v(" "),s("p",[a._v("Typically, data warehouse workloads are part of a bigger technology stack within an organization or across organizations. To streamlines various operations, data pipelines should be orchestrated and scheduled. Data orchestration unifies data from disparate sources and transforms it to enable analytics. This is where "),s("RouterLink",{attrs:{to:"/"}},[a._v("Kestra")]),a._v(" jumps in.")],1),a._v(" "),s("p",[a._v("Kestra is a state-of-the-art, open-source, cloud-native platform built to orchestrate & schedule scalable data workflows, aiming to improve the productivity of DataOps teams. Kestra's orchestration platform can build, run, manage, and monitor all "),s("RouterLink",{attrs:{to:"/docs/developer-guide/flowable/"}},[a._v("kinds of complex workflows")]),a._v(" sequentially and in parallel. It offers numerous "),s("RouterLink",{attrs:{to:"/plugins/"}},[a._v("plugin integrations")]),a._v(" to build advanced data workflows, including our "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-snowflake/"}},[a._v("Snowflake plugin")]),a._v(", discussed below.")],1),a._v(" "),s("p",[a._v("Moreover, Kestra can execute workflows based on event-based, time-based, and API-based scheduling, giving complete control to the data teams. With a unified end-to-end platform, companies save time and money on storage, compute, and development costs.")]),a._v(" "),s("p",[a._v("Snowflake already offers many cost optimization processes like data compression and auto-scaling. However, Kestra makes it simpler to "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-snowflake/tasks/io.kestra.plugin.jdbc.snowflake.Download.html"}},[a._v("download")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-snowflake/tasks/io.kestra.plugin.jdbc.snowflake.Upload.html"}},[a._v("upload")]),a._v(", and "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-snowflake/tasks/io.kestra.plugin.jdbc.snowflake.Query.html"}},[a._v("query")]),a._v(" data by integrating with Snowflake's storage and compute resources. Let's discuss Kestra's Snowflake plugin in detail.")],1),a._v(" "),s("h3",{attrs:{id:"dissecting-kestra-s-snowflake-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dissecting-kestra-s-snowflake-plugin"}},[a._v("#")]),a._v(" Dissecting Kestra's Snowflake Plugin.")]),a._v(" "),s("p",[a._v("Kestra's Snowflake plugin can create complex data pipelines, whether Snowflake is a target or simply storing data as a part of a larger workflow for downstream applications.")]),a._v(" "),s("p",[a._v("Besides the Snowflake plugin, Kestra offers numerous JDBC plugin integrations, including "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-clickhouse/"}},[a._v("ClickHouse")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-duckdb/"}},[a._v("DuckDb")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-mysql/"}},[a._v("MySQL")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-oracle/"}},[a._v("Oracle")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-pinot/"}},[a._v("Apache Pinot")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-postgres/"}},[a._v("PostgreSQL")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-redshift/"}},[a._v("Redshift")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-rockset/"}},[a._v("Rockset")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-sqlserver/"}},[a._v("SQL Server")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-trino/"}},[a._v("Trino")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-vectorwise/"}},[a._v("Vectorwise")]),a._v(", and "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-vertica/"}},[a._v("Vertica")]),a._v(". These plugins can effectively process and transform tabular data within relational databases, reducing the processing cost of platforms like Snowflake.")],1),a._v(" "),s("p",[a._v("Using Kestra, the data teams are at liberty to decide where certain data, plugins, and connectors would fit. As mentioned above, the Snowflake plugin can perform the download, upload, and query tasks. Let's discuss each of them below.")]),a._v(" "),s("h3",{attrs:{id:"query-snowflake-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-snowflake-table"}},[a._v("#")]),a._v(" Query Snowflake table")]),a._v(" "),s("p",[a._v("Kestra can query the Snowflake server using this task to insert, update, and delete data. The "),s("em",[a._v("Query")]),a._v(" task offers numerous properties, including auto-committing SQL statements, different fetching operations, specifying access-control roles, and storing fetch results. When the "),s("code",[a._v("store")]),a._v("value is "),s("code",[a._v("true")]),a._v(", Kestra allows storage of large results as an output of the "),s("em",[a._v("Query")]),a._v(" task.")]),a._v(" "),s("p",[a._v("The plugin allows the usage of multi-SQL statements in the same transaction as a full SQL script with isolation support. It allows simple queries and fetches results with "),s("code",[a._v("fetch")]),a._v(" or "),s("code",[a._v("fetchOne")]),a._v(" properties, enabling teams to reuse the output on the next tasks from tools like "),s("RouterLink",{attrs:{to:"/plugins/plugin-kafka/tasks/io.kestra.plugin.kafka.Consume.html"}},[a._v("Kafka Consume")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-elasticsearch/tasks/io.kestra.plugin.elasticsearch.Search.html"}},[a._v("Elastic Search")]),a._v(", "),s("RouterLink",{attrs:{to:"/plugins/plugin-mongodb/tasks/io.kestra.plugin.mongodb.Find.html"}},[a._v("Mongo Find")]),a._v(", and more. Some "),s("em",[a._v("Query")]),a._v(" task instances are:")],1),a._v(" "),s("ul",[s("li",[a._v("Fetch a row from the database, and define multiple flows depending on the output")]),a._v(" "),s("li",[a._v("Fetch the count of a store and iterate through the list. If an item doesn't exist, perform a particular task.")])]),a._v(" "),s("p",[a._v("The following code snippet executes a query to fetch results from one table into Kestra internal storage.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" select\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" io.kestra.plugin.jdbc.snowflake.Query\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("snowflake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//<account_identifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(".snowflakecomputing.com\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" snowflake\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" snowflake_passwd\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" select * from source\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])]),s("h3",{attrs:{id:"download-from-snowflake-stage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-from-snowflake-stage"}},[a._v("#")]),a._v(" Download from Snowflake stage")]),a._v(" "),s("p",[a._v("As the name suggests, this task downloads data from the Snowflake server to an internal Kestra stage, which is based on "),s("a",{attrs:{href:"https://amzn.github.io/ion-docs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Amazon ION"),s("OutboundLink")],1),a._v(". The "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-snowflake/tasks/io.kestra.plugin.jdbc.snowflake.Download.html"}},[a._v("Download")]),a._v(" task offers properties such as data compression and access control role to streamline the download process of the connected database. The "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-snowflake/tasks/io.kestra.plugin.jdbc.snowflake.Download.html"}},[a._v("Download")]),a._v(" task outputs the URL of the downloaded file available on the Kestra storage server.")],1),a._v(" "),s("p",[a._v("The following code snippet downloads default database to specified "),s("code",[a._v("fileName")]),a._v(" location on internal Kestra server.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"download"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"io.kestra.plugin.jdbc.snowflake.Download"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stageName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" MYSTAGE\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fileName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" prefix/destFile.csv\n")])])]),s("h3",{attrs:{id:"upload-to-snowflake-stage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-to-snowflake-stage"}},[a._v("#")]),a._v(" Upload to Snowflake stage")]),a._v(" "),s("p",[a._v("This task uploads data to an internal "),s("a",{attrs:{href:"https://docs.snowflake.com/en/user-guide/data-load-considerations-stage.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Snowflake stage"),s("OutboundLink")],1),a._v(". Similar to "),s("em",[a._v("Download")]),a._v(" task, "),s("RouterLink",{attrs:{to:"/plugins/plugin-jdbc-snowflake/tasks/io.kestra.plugin.jdbc.snowflake.Upload.html"}},[a._v("Upload")]),a._v(" can perform data compression and set access control role. Snowflake also support "),s("a",{attrs:{href:"https://docs.snowflake.com/en/user-guide/data-load-transform.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("data transformation"),s("OutboundLink")],1),a._v(" while loading data, which simplifies the ETL process.")],1),a._v(" "),s("p",[a._v("The following code snippet uploads data to the specified "),s("code",[a._v("fileName")]),a._v(" location.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"upload"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"io.kestra.plugin.jdbc.snowflake.Upload"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stageName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" MYSTAGE\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" testUploadStream\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fileName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" destFile.csv\n")])])]),s("h3",{attrs:{id:"building-dynamic-data-workflows-with-kestra"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-dynamic-data-workflows-with-kestra"}},[a._v("#")]),a._v(" Building Dynamic Data Workflows With Kestra")]),a._v(" "),s("p",[s("img",{attrs:{src:"/ui.gif",alt:""}})]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/"}},[a._v("Kestra")]),a._v(" has quickly become an essential piece of the modern data stack. Kestra provides unprecedented flexibility and control to data teams. It can orchestrate any kind of workflow with ease using a rich UI that monitors all flows.")],1),a._v(" "),s("p",[a._v("Kestra's Snowflake plugin makes data warehousing simple. Even non-developers can write relevant flows using descriptive YAML. Your Snowflake storage pipeline accommodates raw data from multiple sources and transforms it using ETL operations. Additionally, you can skip the transformation and directly load data into the warehouse using the "),s("RouterLink",{attrs:{to:"/blogs/2022-04-27-etl-vs-elt.html"}},[a._v("ELT pipeline")]),a._v(". Kestra can manage both workflows simultaneously. In any case, Kestra ensures that the data is readily available to perform analysis and learn valuable patterns.")],1),a._v(" "),s("p",[a._v("If you need any guidance with your Snowflake deployment, our experts at Kestra would love to hear from you. "),s("a",{attrs:{href:"https://api.kestra.io/v1/communities/slack/redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("Let us know"),s("OutboundLink")],1),a._v(" if you would like us to add more plugins to the "),s("a",{attrs:{href:"/plugins"}},[a._v("list")]),a._v(". Or start building your "),s("RouterLink",{attrs:{to:"/docs/plugin-developer-guide/"}},[a._v("custom Kestra plugin")]),a._v(" today and send it our way. We always welcome "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra",target:"_blank",rel:"noopener noreferrer"}},[a._v("contributions"),s("OutboundLink")],1),a._v("!")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);