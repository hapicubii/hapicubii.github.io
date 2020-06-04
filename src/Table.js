import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";


const TableBody = props => {
  const rows = props.characterData.Coverists.map((row, index) => {
    return (
      <div key={index}>
        <a href={row.channel} target="popup">
             <img data-tip={row.alias} className="chibi" alt={row.alias} src={`/chibi/${row.icon}.png`} /> 
             <ReactTooltip></ReactTooltip> 
        </a>
       
      </div>
    )
  })

  return <div className="listcoverists">{rows}</div>
}

class Table extends Component {
    render() {
      const { characterData } = this.props
  
      return (
        
          <TableBody characterData={characterData} />
        
      )
    }
}


export default Table