import React from "react"
import './songOverview.css'

function SongLine(props)
{ return (<tr className="raster">
             <th className="lijsth">{props.element.songName}</th> 
             <th className="lijsth" >{props.element.artist}</th>
             <th className="lijsth">{props.element.genre}</th>
             <th className="lijsth">{props.element.rating}</th>
             <th className="lijsth">
                <button className="verwijderButton" onClick={(e)=>props.verwijderRegel(props.element.id)}>Verwijderen</button>
             </th>
          </tr>) 
}

export default SongLine 