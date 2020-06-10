(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{339:function(e,t,n){e.exports=n.p+"assets/img/moodle-manage-tool.f423d397.png"},340:function(e,t,n){e.exports=n.p+"assets/img/moodle-external-tool-config.391a5b94.png"},381:function(e,t,n){"use strict";n.r(t);var s=n(33),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"lms-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lms-admin"}},[e._v("#")]),e._v(" LMS admin")]),e._v(" "),s("blockquote",[s("p",[e._v("The learning management system (LMS) administrator creates the LTI connection")])]),e._v(" "),s("h2",{attrs:{id:"prerequisite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),s("ul",[s("li",[e._v("The LMS admin asks the EdEHR admin for the "),s("RouterLink",{attrs:{to:"/shared/definitions.html#api-url"}},[e._v("API URL")]),e._v(", the "),s("RouterLink",{attrs:{to:"/shared/definitions.html#consumer-key"}},[e._v("consumer key and secret")]),e._v(". These are needed to allow the LMS to connect to the EdEHR.")],1),e._v(" "),s("li",[e._v("The "),s("RouterLink",{attrs:{to:"/shared/definitions.html#course-designer"}},[e._v("course designer")]),e._v(" has provided the LMS admin a meaningful name for the connection, an optional description, and the ("),s("RouterLink",{attrs:{to:"/shared/definitions.html#external-id"}},[e._v("External Id")]),e._v(") for the assignment in the EdEHR. The LMS will use these for the tool name, description and custom parameters below.")],1)]),e._v(" "),s("p",[e._v("The LMS admin is responsible for the first steps to create the course that uses the EdEHR. Read "),s("RouterLink",{attrs:{to:"/#getting-started"}},[e._v("getting started")]),e._v(". The first step has two parts:")],1),e._v(" "),s("ol",[s("li",[e._v("The LMS administrator creates a LTI link to the EdEHR. See below")]),e._v(" "),s("li",[e._v("The course designer uses this link one or more times to set up activities in courses. See "),s("RouterLink",{attrs:{to:"/course-designer/"}},[e._v("course designer")])],1)]),e._v(" "),s("h2",{attrs:{id:"moodle-external-tool-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#moodle-external-tool-configuration"}},[e._v("#")]),e._v(" Moodle external tool configuration")]),e._v(" "),s("p",[e._v("The following describes the process in Moodle. The process is likely similar in other LMS applications.")]),e._v(" "),s("p",[e._v('Log onto your Moodle instance as an administrator. Select "Site Administration" (bottom left corner of the home screen). Select Plugins and scan down the list of "Activity Modules" looking for "External Tool". Click the "Manage tools" immediately below "External Tool".\n'),s("img",{attrs:{src:n(339),alt:"1",title:"Manage external tool in Moodle"}})]),e._v(" "),s("p",[e._v("Next configure the link. For example,\n"),s("img",{attrs:{src:n(340),alt:"2",title:"External tool configuration in Moodle"}})]),e._v(" "),s("p",[s("strong",[e._v("Tool name:")]),e._v(" provide a name that the course designer will recognize.")]),e._v(" "),s("p",[s("strong",[e._v("Custom parameters:")]),e._v(' this is a key that links this LTI connection to an assignment in the EdEHR. The example is "ErinJoneCase1". You can put anything here that will make sense for the course designer. The typical flow is to compose this key here while creating the LTI link. Another flow is to create the assignment in the EdEHR and then use the '),s("RouterLink",{attrs:{to:"/shared/definitions.html#external-id"}},[e._v("External Id")]),e._v(" created with the assignment.")],1),e._v(" "),s("p",[e._v('External IDs have the form of "assignment=SomeKeyWords". The text "SomeKeyWords" is sent to the EdEHR when a user accesses the application. The EdEHR locates an assignment that matches the key.')]),e._v(" "),s("p",[e._v("If the user is an instructor or course designer and no matching assignment is found, then the EdEHR creates the assignment. If the user is a student they will see an error page and no assignment will be created.")]),e._v(" "),s("p",[e._v("The syntax is important. It must start with "),s("code",[e._v("assignment=")]),e._v(" and then be followed by a mixed case word. No spaces. Use numbers, the dot (.) or the hypen if this helps.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("assignment=<letters-or-numbers-or-dot-or-hyphen>\n")])])]),s("p",[e._v("Recommend that the tool name and custom parameter have some obvious connection to help with keeping the system easy to understand.")]),e._v(" "),s("p",[s("strong",[e._v("Tool description:")]),e._v(" Write a description that helps you, as the LMS admin, and the course designer understand what this LTI connection does.")]),e._v(" "),s("p",[s("strong",[e._v("Tool URL:")]),e._v(" This is the url to the back end of EdEHR. See "),s("RouterLink",{attrs:{to:"/shared/definitions.html#api-url"}},[e._v("API URL")]),e._v(".")],1),e._v(" "),s("p",[s("strong",[e._v("Consumer key:")]),e._v(" and "),s("strong",[e._v("Shared secret:")]),e._v(" are two pieces of information that is shared between the LMS admin and the EdEHR admin. These two administrators share a key and a secret that are used by the EdEHR to identify the institution. This sharing typically happens via a phone conversation or email. See "),s("RouterLink",{attrs:{to:"/shared/definitions.html#consumer-key"}},[e._v("consumer key and secret")]),e._v(".")],1),e._v(" "),s("p",[s("strong",[e._v("Default launch container:")]),e._v(' Select "Existing window" or "New window". Do not either "Embed" option. It may help the instructors and students if you select "New window". This means the EdEHR will open in a new tab.')]),e._v(" "),s("p",[e._v('Save the settings and then inform your course designers they can now configure course activities with this tool. Tell them what the tool name is and also provide the "custom parameter". In the EdEHR this is called the '),s("RouterLink",{attrs:{to:"/shared/definitions.html#external-id"}},[e._v("External Id")]),e._v(".")],1),e._v(" "),s("p",[e._v("The next steps are completed by the "),s("a",{attrs:{href:"/course-designer"}},[e._v("course designer")])])])}),[],!1,null,null,null);t.default=o.exports}}]);