<template lang="pug">
  div
    div(class="no-data" v-if="!hasData") There are no records or reports for this patient.
    div(v-else)
      table.table_vertical
        tbody
          tr(v-for="column in transposedColumns", :class="tableColumnCss(column)")
            td(:class="transposeLabelCss(column)")
              span(v-html="transposeLabel(column).value")
            td(v-for="cell in transposeData(column)", :class="transposeValueCss(cell)") {{ getCellData(cell) }}
</template>

<script>
import EhrCommonTable from './EhrCommonTable'

export default {
  name: 'EhrPageTableVertical',
  extends: EhrCommonTable,
  data: function () {
    return {
      transposedColumns: []
    }
  },
  computed: {
    hasData () {
      return this.transposedColumns.length > 0 && this.transposedColumns[0].length > 1
    }
  },
  methods: {
    transposeLabel (column) {
      return column[0]
    },
    transposeLabelCss (column) {
      let cell = column[0]
      let cellDef = cell.cellDef
      let hdrCss = 'column_label' + (cellDef.tableCss ? ' ' + cellDef.tableCss : '')
      return hdrCss
    },
    transposeValueCss (cell) {
      let cellDef = cell.cellDef
      let hdrCss = 'column_value' + (cellDef.tableCss ? ' ' + cellDef.tableCss : '')
      return hdrCss
    },
    transposeData (column) {
      return column.slice(1,column.length)
    },
    tableColumnCss: function (column) {
      let hide = 'hide-table-element'
      let css = hide
      column.forEach(cell => {
        let cellDef = cell.cellDef
        if (!cellDef.tableCss || !cellDef.tableCss.includes(hide)) {
          // console.log('cell css ', cell.tableCss)
          css = ''
        }
      })
      return css
    },
    refresh () {
      const tableDef = this.tableDef
      this.transposedColumns = tableDef.transposedColumns
      // console.log('table view refresh', tableDef)
    }
  }
}
</script>
