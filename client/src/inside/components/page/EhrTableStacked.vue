<template lang="pug">
  div
    div(class="no-data" v-if="!hasData") There are no records or reports for this patient.
    div(v-else)
      table.table_horizontal
        thead
          tr
            th(v-for="tCell in tableForm.rowTemplate")
              span(v-html="tCell.tableLabel", :class="tableColumnCss(tCell)")
        tbody
          tr(v-for="dRow in tableData")
            td(v-for="cell in dRow", class="cell.tableCss")
              div(v-for="cPart in cell.stack")
                ehr-table-element(v-if="!!cPart.value", :cell="cPart")
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'
const debug = false

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement },
  inject: [ 'pageDataKey', 'tableKey'],
  data: function () {
    return {
      tableForm: {},
      tableData: []
    }
  },
  computed: {
    hasData () {
      return this.tableForm.hasData
    },
    //stacks () { return this.tableDef.ehr_list}
  },
  methods: {
    columnTitle: function (stack) {
      return stack.label
    },
    tableColumnCss: function (stack) {
      return stack.tableCss
    },
    refresh () {
      if(debug) console.log('EhrTableStacked refresh this.tableKey', this.tableKey)
      // force the reactive system to see the change by changing the objects. Otherwise it sees the same object even
      // though the content is different
      this.tableForm = {}
      this.tableData = []
      this.tableForm = this.ehrHelp.getTable(this.tableKey)
      this.tableData = this.tableForm.tableData
      if (debug) console.log('EhrTableStacked this.tableForm', this.tableForm)
      if (debug) console.log('EhrTableStacked this.tableData', this.tableData)
    }
  },

}
</script>

<style>
  table {
    max-width: 100vw;
    display: block;
  }
  tbody {
    max-width: 100vw;
    overflow-y: scroll;
    display:block;
  }
</style>


