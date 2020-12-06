import React from 'react'
import './songOverview.css'


function Form(props)  
{

return (<div>
         <h1 className="header">Playlist</h1>
         
         <form onSubmit={props.onsubmit}>
           <table style={{width:"100%"}}>
              <tbody> 
                 <tr className="song-header">        
                    <th >
                        <input className="song-row__text" type="text" id="songName" name="songName"  placeholder="songname"/>
                    </th> 
                    <th>
                       <input className="song-row__text" type="text" id="artist" name="artist" placeholder="artist"/>
                    </th>
                    <th>
                       <select name="genre" id="genre" className="song-row__select"> 
                          <option value="Pop">Pop</option>
                          <option value="Klassiek">Klassiek</option>
                          <option value="Rock">Rock</option>
                          <option value="Jazz">Jazz</option>
                       </select>
                    </th>
                    <th >
                       <select name="rating" id="rating" className="song-row__select">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                    </th>
                    <th>
                       <button className="submit-button" >Voeg item toe/Wijzig genre of rating</button> 
                    </th> 
                </tr> 
             </tbody>
           </table> 
         </form>
        
      </div>
)      
}


export default Form