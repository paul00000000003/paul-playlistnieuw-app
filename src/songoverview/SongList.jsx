import React from 'react'
import SongLine from "./SongLine"
import "./songOverview.css"

const sorteren = (arrToBeSorted,ozSorteerOptie) =>
{  let arrSorted=[]
   let liedje1=""
   let liedje2=""
   let artiest1=""
   let artiest2="" 
   let rating1=0
   let rating2=0
   let song1=""
   let song2=""
   switch (ozSorteerOptie)
   {
     case "genreAZ"        :  arrSorted=arrToBeSorted.sort(function(a, b) {
                                      liedje1 = a.songName.toUpperCase(); // ignore upper and lowercase
                                      liedje2 = b.songName.toUpperCase(); // ignore upper and lowercase
                                      if (liedje1 < liedje2) {
                                         return -1;
                                         }
                                      if (liedje1 > liedje2) {
                                         return 1;
                                         }   
                                      return 0;
                                     });
                              break

     case "genreZA"        :  arrSorted=arrToBeSorted.sort(function(a, b) {
                                     liedje1 = a.songName.toUpperCase(); // ignore upper and lowercase
                                     liedje2 = b.songName.toUpperCase(); // ignore upper and lowercase
                                     if (liedje1 > liedje2) {
                                       return -1;
                                     }
                                     if (liedje1 < liedje2) {
                                       return 1;
                                     }   
                                     return 0;
                                     });
                              break
     case "artiestenNaamAZ":  arrSorted=arrToBeSorted.sort(function(a, b) {
                                    artiest1 = a.artist.toUpperCase(); // ignore upper and lowercase
                                    artiest2 = b.artist.toUpperCase(); // ignore upper and lowercase
                                    if (artiest1 < artiest2) {
                                       return -1;
                                       }
                                    if (artiest1 > artiest2) {
                                       return 1;
                                       }   
                                    return 0;
                                    });
                                    break
    case "artiestenNaamZA":  arrSorted=arrToBeSorted.sort(function(a, b) {
                                    artiest1 = a.artist.toUpperCase(); // ignore upper and lowercase
                                    artiest2 = b.artist.toUpperCase(); // ignore upper and lowercase
                                    if (artiest2 < artiest1) {
                                          return -1;
                                          }
                                    if (artiest2 > artiest1) {
                                          return 1;
                                          }   
                                    return 0;
                                    });
                                    break
    case "sterren15":        arrSorted=arrToBeSorted.sort(function(a, b) {
                                       rating1 = a.rating; // ignore upper and lowercase
                                       rating2 = b.rating; // ignore upper and lowercase
                                       if (rating1 < rating2) {
                                          return -1;
                                          }
                                       if (rating1 > rating2) {
                                          return 1;
                                          }   
                                       return 0;
                                       });
                                       break
     case "sterren51":      arrSorted=arrToBeSorted.sort(function(a, b) {
                                       rating1 = a.rating; // ignore upper and lowercase
                                       rating2 = b.rating; // ignore upper and lowercase
                                       if (rating1 > rating2) {
                                         return -1;
                                        }
                                       if (rating1 < rating2) {
                                           return 1;
                                           }   
                                       return 0;
                                       });
                                        break
     case "songAZ"   :     arrSorted=arrToBeSorted.sort(function(a, b) {
                                       song1 = a.songName.toUpperCase(); // ignore upper and lowercase
                                       song2 = b.songName.toUpperCase(); // ignore upper and lowercase
                                       if (song1 < song2) {
                                          return -1;
                                              }
                                       if (song1 > song2) {
                                          return 1;
                                               }   
                                        return 0;
                                       });
                                       break
     case "songZA"   : arrSorted=arrToBeSorted.sort(function(a, b) {
                                       song1 = a.songName.toUpperCase(); // ignore upper and lowercase
                                       song2 = b.songName.toUpperCase(); // ignore upper and lowercase
                                       if (song1 > song2) {
                                          return -1;
                                            }
                                       if (song1 < song2) {
                                          return 1;
                                             }   
                                       return 0;
                                       });
                                       break
     default         : 
   }
   return arrSorted
}

function SongList(props)
{  let arrFilter1=[]
   let arrFilter2=[]
   let arrSorted=[]
   if (props.ozSorteerOptie !=="")
     arrSorted=sorteren(props.songList,props.ozSorteerOptie)
   else arrSorted=props.songList
  
  if ((props.ozGenreSelector !=="") && (props.ozGenreSelector.toUpperCase()!=="ALLES"))
     arrFilter1=arrSorted.filter(element => element.genre.toUpperCase()===props.ozGenreSelector.toUpperCase())
  else arrFilter1=arrSorted
 
  if (props.ozSterrenSelector !==0)
     {arrFilter2=arrFilter1.filter(element => element.rating.toString()===props.ozSterrenSelector.toString())}
  else arrFilter2=arrFilter1    
  
  let arrSongsDisplay=arrFilter2.map(element => (<SongLine key={element.id} element={element} verwijderRegel={props.verwijderRegel}/>))

  return ( <div> 
              <table style={{width:"100%"}}>
                <tbody>
                  <tr className="raster">
                     <th className="lijsth2">song</th>
                     <th className="lijsth2">artist</th>
                     <th className="lijsth2">genre</th>        
                     <th className="lijsth2">rating</th>
                  </tr>
                </tbody>
              </table> 
              <table className="breedte">
                 <tbody>
                    {arrSongsDisplay}
                 </tbody> 
              </table> 
          </div>
         )
}

export default SongList 