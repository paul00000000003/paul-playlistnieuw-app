import React from 'react'
import './songOverview.css'

/*



*/



function SongWeergaveSelecties(props)
{
  return (
    <div className="ozselectie">
       <br/> 
         <label className="titellabel">Lijst filteren obv genre <input type="radio" name="genreselectie" onChange={(e)=>props.ozSelectGenre("alles")}/>Geen selectie</label>
         <label><input type="radio" name="genreselectie" onChange={(e)=>props.ozSelectGenre("Jazz")}/>Jazz</label>
         <label><input type="radio" name="genreselectie" onChange={(e)=>props.ozSelectGenre("Pop")}/>Pop</label>
         <label><input type="radio" name="genreselectie" onChange={(e)=>props.ozSelectGenre("Rock")}/>Rock</label>
         <label><input type="radio" name="genreselectie" onChange={(e)=>props.ozSelectGenre("Klassiek")}/>Klassiek</label><br/>
         
         <label className="titellabel">Lijst filteren obv rating <input type="radio" name="sterrenselectie" onChange={(e)=>props.ozSelectSterren(0)}/>Geen selectie</label>
         <label><input type="radio" name="sterrenselectie" onChange={(e)=>props.ozSelectSterren(1)}/>1</label>
         <label><input type="radio" name="sterrenselectie" onChange={(e)=>props.ozSelectSterren(2)}/>2</label>
         <label><input type="radio" name="sterrenselectie" onChange={(e)=>props.ozSelectSterren(3)}/>3</label>
         <label><input type="radio" name="sterrenselectie" onChange={(e)=>props.ozSelectSterren(4)}/>4</label>
         <label><input type="radio" name="sterrenselectie" onChange={(e)=>props.ozSelectSterren(5)}/>5</label> <br/>

         <label className="titellabel">Lijst sorteren : genre <input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("genreAZ")}/>(a-zA-Z)</label>
         <label><input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("genreZA")}/>(z-aZ-A)</label><br/> 
         <div className="opschuifcontainer">
            <p className="opschuiven"></p><label> artiestennaam<input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("artiestenNaamAZ")}/>(a-zA-Z)</label>
            <label><input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("artiestenNaamZA")}/>(z-aZ-A)</label>
         </div>
         <div className="opschuifcontainer">
            <p className="opschuiven"></p><label>sterren<input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("sterren15")}/>(1-5)</label> 
            <label><input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("sterren51")}/>(5-1)</label> 
         </div>
         <div className="opschuifcontainer">
            <p className="opschuiven"></p><label>song<input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("songAZ")}/>(a-zA-Z)</label><br/>  
            <label><input type="radio" name="sorteerOptie" onChange={(e)=>props.ozSorteren("songZA")}/>(z-aZ-A)</label> 
         </div>
    <br/>
    <br/> 
 </div>

  )

}

export default SongWeergaveSelecties 
