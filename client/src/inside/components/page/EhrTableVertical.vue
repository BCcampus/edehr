<template lang="pug">
  div
    div(class="no-data" v-if="!hasData") There are no records or reports for this patient.
    div(v-else)
      table.table_vertical
        tbody
          tr(v-for="column in transposedColumns", :class="tableColumnCss(column)")
            td(:class="transposeLabelCss(column)")
              span(v-html="transposeLabel(column)")
            td(v-for="cell in transposeData(column)", :class="transposeValueCss(cell)")
              div(v-for="cPart in cell.stack")
                ehr-table-element(v-if="!!cPart.value", :cell="cPart")
</template>

<script>
import EhrTableCommon from './EhrTableCommon'
import EhrTableElement from './EhrTableElement'

export default {
  extends: EhrTableCommon,
  components: { EhrTableElement },
  inject: [ 'pageDataKey', 'tableKey'],
  data: function () {
    return {
      tableForm: {},
      transposedColumns: [],
      hasData: false
    }
  },
  computed: {
  },
  methods: {
    transposeLabel (column) {
      let cell = column[0] || {}
      return cell.label
    },
    transposeLabelCss (column) {
      let cell = column[0] || {}
      return cell.tableCss
    },
    transposeValueCss (cell) {
      let hdrCss = 'column_value' + (cell.tableCss ? ' ' + cell.tableCss : '')
      return hdrCss
    },
    transposeData (column) {
      return column.slice(1,column.length)
    },
    getCellData (cell) {
      // console.log('EhrTableVertical getCellData', cell)
      let stack = cell.stack
      let values = []
      stack.forEach ( (c) => {
        if (c.value) {
          values.push(c.value)
        }
      })
      return values.join(',')
    },
    tableColumnCss: function (column) {
      // let hide = 'hide-table-element'
      // let css = hide
      // column.forEach(cell => {
      //   let cellDef = cell.cellDef
      //   if (!cellDef.tableCss || !cellDef.tableCss.includes(hide)) {
      //     // console.log('cell css ', cell.tableCss)
      //     css = ''
      //   }
      // })
      // return css
    },
    refresh () {
      this.tableForm = this.ehrHelp.getTable(this.tableKey)
      this.hasData = this.tableForm.hasData
      this.transposedColumns = this.tableForm.transposedColumns
      // console.log('EhrTableVertical table view refresh', this.transposedColumns)
    }
  }
}
</script>

<style>
  table {
    max-width: 100vw;
  }
  thead, tbody {
    display: block;
  }
  tbody {
    overflow-y: auto;

  }
</style>
