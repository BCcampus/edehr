<template lang="pug">
  div(:class="$options.name")
    h1 Feedback
    ui-button(@buttonClicked="downloadAll") Download all Feedbacks
    table.table
      thead
        tr
          th Feedback
          th Date
      tbody
        tr(v-for="item in feedbackListing", :class="rowClass(item)")
          td {{ item.feedbackData }}
          td {{ formatTime(item)  }}
</template>

<script>
import { getFeedbackData } from '../../helpers/feedback'
import { formatTimeStr } from '../../helpers/ehr-utils'
import { downObjectToFile } from '../../helpers/ehr-utils'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'FeedbackListing',
  data () {
    return {
      feedbackListing: []
    }
  },
  components: { UiButton },
  methods: {
    rowClass: function (item) {
      let selected = item._id === this.$route.params.feedbackId
      return selected ? 'selected' : ''
    },
    findFeedback: function (id) {
      return this.feedbackListing.find(e => {
        return e._id === id
      })
    },
    formatTime: function (feedback) {
      return formatTimeStr(feedback.createDate)
    },
    async downloadAll () {
      const feedbacks = await getFeedbackData()
      downObjectToFile('feedback-list.json', feedbacks)
    },
  },
  mounted: async function () {
    const feedbackListing = await getFeedbackData()
    this.feedbackListing = feedbackListing
  }
}
</script>
