(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{390:function(e,t,a){"use strict";a.r(t);var l=a(33),s=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"summary-table-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary-table-component"}},[e._v("#")]),e._v(" Summary Table Component")]),e._v(" "),a("blockquote",[a("p",[e._v("A component that displays a subset of columns from a table with an optional filter.")])]),e._v(" "),a("p",[e._v("The Discharge Summary Page shows a a summary of tabular data based on the patient's chart.\nEach table can be identified by it's fully qualified name (FQN) as well as the list of columns. Each column\nmust be contained within the table so only FQN's relative to the table's FQN are needed.")]),e._v(" "),a("p",[e._v("For example, in the "),a("code",[e._v("medicationOrders.table")]),e._v(" table the following data is required:")]),e._v(" "),a("ul",[a("li",[e._v("medication")]),e._v(" "),a("li",[e._v("route")]),e._v(" "),a("li",[e._v("schedule.*")])]),e._v(" "),a("p",[e._v("All of the fields should be inside the schedule fieldset. The list is not made\nexplicit because the contents of the fieldset may change over time. At the moment, this fieldset contains:")]),e._v(" "),a("ul",[a("li",[e._v("schedule.startDayFood")]),e._v(" "),a("li",[e._v("schedule.startDay")]),e._v(" "),a("li",[e._v("schedule.midDayFood")]),e._v(" "),a("li",[e._v("schedule.midDay")]),e._v(" "),a("li",[e._v("schedule.endDayFood")])]),e._v(" "),a("p",[e._v("There is no status type of field on this table.")]),e._v(" "),a("p",[e._v("Another example is the Procedures and Treatments section which pulls from the "),a("code",[e._v("nonmedOrders")]),e._v(" table\nPull")]),e._v(" "),a("ul",[a("li",[e._v("order")]),e._v(" "),a("li",[e._v("details")])]),e._v(" "),a("p",[e._v("When the order has status "),a("code",[e._v("complete")])]),e._v(" "),a("p",[e._v("For table headers use the "),a("code",[e._v("label")]),e._v(" property of the table.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("ul",[a("li",[e._v("Need a method to get the table definition, given a FQN.")]),e._v(" "),a("li",[e._v("Need a method to get an array of column definitions given an array of relative FQN's plus, handle the wildcard *")]),e._v(" "),a("li",[e._v("Get the table data and extract the column data")])]),e._v(" "),a("p",[e._v("The visual implementation is in the EhrSummaryTable component and the work is done in the helper class in "),a("code",[e._v("ehr-summary-table.js")])]),e._v(" "),a("p",[e._v("The results are presented on the Discharge page which is now a custom view like the MAR and Vitals pages.")])])}),[],!1,null,null,null);t.default=s.exports}}]);