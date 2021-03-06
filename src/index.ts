interface IOptions {
  tableSelector?: string,
  breakPoint?: string,
  labelFontWeight?: string,
  labelSuffix?: string,
  labelAfterSpace?: string,
  hiddenLabels?: number[],
}
class ResponsiveTable {
  private tableSelector: string
  private breakPoint: String
  private labelFontWeight: string
  private labelSuffix: string
  private hiddenLabels: number[]
  private labelAfterSpace: string
  private columns: ArrayLike<HTMLElement>
  private columnCount: number

  constructor({
    tableSelector = '.responsive-table',
    breakPoint = '768',
    hiddenLabels = [],
    labelSuffix = ':',
    labelFontWeight = '900',
    labelAfterSpace = '12',
  } : IOptions) {
    this.tableSelector = tableSelector
    this.breakPoint = breakPoint
    this.hiddenLabels = hiddenLabels
    this.labelSuffix = labelSuffix
    this.labelFontWeight = labelFontWeight
    this.labelAfterSpace = labelAfterSpace
    this.columns = document.querySelectorAll(`${this.tableSelector} thead th`)
    this.columnCount = this.columns.length
    this.appendStyleToHead()
  }

  private get css() {
    const commonCss: string = `
      ${this.tableSelector} thead {
        display: none;
      }
      ${this.tableSelector} tbody td {
        display: block;
        border: 0;
      }
      ${this.tableSelector} tbody td:before {
        padding-right: ${this.labelAfterSpace}px;
        font-weight: ${this.labelFontWeight};
      }
    `
    const cssLabels: Array<string> = []
    for(let i = 0; i < this.columnCount; i++) {
      if (this.hiddenLabels.indexOf(i) > -1) continue
      cssLabels.push(`
        ${this.tableSelector} tbody td:nth-of-type(${i + 1}):before {
          content: "${this.columns[i].innerText}${this.labelSuffix}"
        }
      `)
    }

    return `
      @media (max-width: ${this.breakPoint}px) {
        ${commonCss}${cssLabels.join('')}
      }
    `.replace(/ *[\r|\n] */gm, '')
  }

  private appendStyleToHead() {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(this.css))
    document.head.appendChild(style)
  }
}

export default ResponsiveTable
