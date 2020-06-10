(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{383:function(t,e,a){"use strict";a.r(e);var s=a(33),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"instructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instructor"}},[t._v("#")]),t._v(" Instructor")]),t._v(" "),a("h2",{attrs:{id:"before-you-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-start"}},[t._v("#")]),t._v(" Before you start")]),t._v(" "),a("p",[t._v("It's assumed that a LMS admin and course designer have set up (at minimum) a blank assignment for instructors to work with.")]),t._v(" "),a("h2",{attrs:{id:"lms-vs-edehr-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lms-vs-edehr-functionality"}},[t._v("#")]),t._v(" LMS vs EdEHR functionality")]),t._v(" "),a("p",[t._v("Your "),a("RouterLink",{attrs:{to:"/shared/definitions.html#learning-management-system-lms"}},[t._v("LMS")]),t._v(" serves as the main hub for your classroom and contains course information, student lists, assignments and their related instructions. It also holds the configuration settings for students to access external assignments like the EdEHR. A LMS admin and/or course designer will work together to get your LMS and EdEHR talking to each other, which will in turn allow instructors to use it in their classrooms.")],1),t._v(" "),a("p",[t._v("Within the EdEHR are the health record screens (referred to as the "),a("RouterLink",{attrs:{to:"/shared/definitions.html#electronic-health-records-ehr"}},[t._v("EHR")]),t._v(") as well as a few "),a("RouterLink",{attrs:{to:"/shared/definitions.html#dashboard"}},[t._v("dashboard")]),t._v(" pages to manage EdEHR evaluation notes.")],1),t._v(" "),a("h2",{attrs:{id:"dashboard-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-basics"}},[t._v("#")]),t._v(" Dashboard basics")]),t._v(" "),a("p",[t._v("The main landing page for the dashboard is a list of each of the "),a("strong",[t._v("courses")]),t._v(" that use the EdEHR system. Under each course name is a list of "),a("RouterLink",{attrs:{to:"/shared/definitions.html#assignment"}},[t._v("assignments")]),t._v(" that can be assigned to the students in each respective course.")],1),t._v(" "),a("p",[t._v("Selecting a specific assignment will take the user to that assignment's "),a("RouterLink",{attrs:{to:"/shared/definitions.html#class-list"}},[t._v("class list")]),t._v(" page. The details of the assignment, the students that have opened the assignment, and a few options for each student's assignment based on whether they've submitted or not will be on this page. There is also a download button that allows instructors to download all of the evaluation notes that have been entered for the course so that they can be added back to the LMS for single source record keeping.")],1),t._v(" "),a("h2",{attrs:{id:"extra-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extra-features"}},[t._v("#")]),t._v(" Extra features")]),t._v(" "),a("p",[t._v("The role of an instructor and a course designer are currently combined into one permission group in the EdEHR. This means that as an instructor you have access to administrative settings that can alter not only your own assignments and courses, but others within your institution using the same templates.")]),t._v(" "),a("p",[t._v("This functionality is located under the (assignments) link in the header and also by ticking the checkbox in the lower left of the dashboard pages labelled "),a("RouterLink",{attrs:{to:"/shared/definitions.html#course-designer-functionality"}},[a("code",[t._v("Course designer functionality")])]),t._v(". It is strongly encouraged that you DO NOT do either of these unless you're confident you know what effects your editing will have on the larger system. In the future, these two roles will be separate.")],1),t._v(" "),a("h2",{attrs:{id:"creating-assignments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-assignments"}},[t._v("#")]),t._v(" Creating assignments")]),t._v(" "),a("p",[t._v("The EdEHR was built around the idea that each assignment would be based on a health case study that would provide students with adequate health data to enter into the EHR screens. In some instances, it may be desired that a student views the system with some of that data already prepopulated in the EHR screens. This may be just the basic demographic information that a triage nurse may have already entered, or in more complex cases, a student may encounter a patient after multiple days into their treatment. This prepopulated data is called a "),a("RouterLink",{attrs:{to:"/shared/definitions.html#seed"}},[a("code",[t._v("seed")])]),t._v(", and may or may not have been created by a course designer.")],1),t._v(" "),a("p",[t._v("To make a seed and then link it to an assignment, visit the course designer documentation to follow the steps outlined to "),a("RouterLink",{attrs:{to:"/configuration/#connect-the-seed-to-your-assignment"}},[t._v("create a new seed")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"student-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#student-workflow"}},[t._v("#")]),t._v(" Student workflow")]),t._v(" "),a("p",[t._v("When a student clicks on the assignment link in their LMS, they will be taken directly to the first page of the "),a("RouterLink",{attrs:{to:"/instructor/shared/definitions.html#electronic-health-records-ehr"}},[t._v("EHR")]),t._v(" to complete their assignment. Upon entry in the EHR, a record will be created in the EdEHR and their name will then show up on the class list page in the dashboard that is related to that assignment.")],1),t._v(" "),a("p",[t._v("A student has the option of saving their assignment and then coming back to it at a different time, or they can save and submit it for evaluation right away. Once they have submitted it, they will see a note at the top of their screen that it has been submitted and is no longer able to be edited.")]),t._v(" "),a("p",[t._v("If the student needs their assignment back to edit for any reason, the instructor has an option in their dashboard to "),a("code",[t._v("return assignment to student")]),t._v(" without evaluation.")]),t._v(" "),a("h2",{attrs:{id:"evaluating-assignments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evaluating-assignments"}},[t._v("#")]),t._v(" Evaluating assignments")]),t._v(" "),a("p",[t._v("Adding "),a("RouterLink",{attrs:{to:"/shared/definitions.html#evaluation-notes"}},[t._v("evaluation notes")]),t._v(" to a student's assignment and sending those notes to the student are two separate functions within the EdEHR dashboard. This means that an instructor is able to start evaluating assignments before all of them have been submitted, and then later send all evaluation notes to their students at the same time.")],1),t._v(" "),a("p",[t._v("An assignment can be evaluated by selecting the "),a("code",[t._v("evaluate")]),t._v(" button in the same row of the class list. An instructor will then be taken into the EHR where they can navigate through each of the screens to see what the student has added to the patient's file. There will be a green dot in the left side nav for each screen that a student has entered data into.")]),t._v(" "),a("p",[t._v("A persistent "),a("RouterLink",{attrs:{to:"/instructor/shared/definitions.html#evaluation-panel"}},[t._v("evaluation panel")]),t._v(" is located under the "),a("RouterLink",{attrs:{to:"/instructor/shared/definitions.html#application-navigation"}},[t._v("application navigation")]),t._v(" at the top of the page. It holds the notes an instructor writes as they navigate through the EHR screens. When complete, they can be saved and the instructor can go back to the dashboard or continue on to the next student.")],1),t._v(" "),a("p",[t._v("The system does not support a structured grade, or context specific notes at this time.")]),t._v(" "),a("h2",{attrs:{id:"sending-evaluation-notes-to-students"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-evaluation-notes-to-students"}},[t._v("#")]),t._v(" Sending evaluation notes to students")]),t._v(" "),a("p",[t._v("From the dashboard, an instructor can navigate to the assignment for which they wish to send evaluation notes. Any assignment that has notes written will have a "),a("code",[t._v("send evaluation notes")]),t._v(" button in the same row. Selecting that button will send the evaluation to the student.")]),t._v(" "),a("p",[t._v("Students can access the EdEHR assignment to view the evaluation notes in a top section of the EHR. Alternatively, if the instructor uploaded the notes to the LMS, students can view them there.")])])}),[],!1,null,null,null);e.default=n.exports}}]);