import React from "react";
import "./songOverview.css";
import SongList from "./SongList";
import Form from "./Form";
import SongWeergaveSelecties from "./SongWeergaveSelecties";

let basisUrl = "https://jsonbox.io/box_3c978bc3195303aae65d";
let data = {};
let url = "";

const valideerLiedje = (naamLiedje, artiestenNaam, genreNaam, ratingWaarde) => {
  let goed = true;
  if (naamLiedje === "") {
    alert("Vul de naam van het liedje in");
    goed = false;
  }
  if (goed === true && artiestenNaam === "") {
    alert("Vul de naam van de artiest in ");
    goed = false;
  }
  if (goed === true && genreNaam === "") {
    alert("Vul het genre in");
    goed = false;
  }
  if (goed === true && ratingWaarde === "") {
    alert("Vul de rating in");
    goed = false;
  }
  if (goed === true) return "J";
  else return "N";
};

const pasCaseArtiestenNaamAan = (artiestenNaam) => {
  let artiestenNaamSubdelen = artiestenNaam.split(" ");
  artiestenNaam = "";
  let artiestenNaamSubdelen2 = artiestenNaamSubdelen.map((element) => {
    if (
      element !== "van" &&
      element !== "der" &&
      element !== "op" &&
      element !== "het"
    ) {
      element = element.substring(0, 1).toUpperCase() + element.substring(1);
    }
    return element;
  });
  artiestenNaamSubdelen2.forEach((item) => {
    artiestenNaam += item + " ";
  });
  return artiestenNaam;
};

class SongOverview extends React.Component {
  /*
  constructor() {
    super();
    this.state = {
      songName: "",
      artist: "",
      genre: "",
      rating: 1,
      songs: [],
      opgestart: false,
      verwerkt: true,
      ozGenreSelector: "",
      ozSterrenSelector: 0,
      ozSorteerOptie: "",
    };
    this.addSong = this.addSong.bind(this);
    this.ozSelectSterren = this.ozSelectSterren.bind(this);
    this.ozSelectGenre = this.ozSelectGenre.bind(this);
    this.verwijderLiedje = this.verwijderLiedje.bind(this);
    this.ozSorteren = this.ozSorteren.bind(this);
  }

  ozSelectGenre(genrekeuze) {
    this.setState({ ozGenreSelector: genrekeuze });
  }

  ozSorteren(sorteeroptie) {
    this.setState({ ozSorteerOptie: sorteeroptie });
  }

  ozSelectSterren(aantalSterren) {
    this.setState({ ozSterrenSelector: aantalSterren });
  }

  async verwijderLiedje(id) {
    // bij het verwijderen van een liedje wil je de key opnieuw rangschikken om deze makkelijk manipuleerbaar te houden
    let nieuweArray = [];
    let delid = "";
    this.setState({ verwerkt: false });
    // De key id moet in de onderstaande tabel blijven staan. Op deze wijze wordt de waarde van id
    // niet opeenvolgend, maar hij blijft wel uniek.
    this.state.songs.forEach((item) => {
      if (id !== item.id) {
        nieuweArray.push({
          id: item.id,
          songName: item.songName,
          artist: item.artist,
          genre: item.genre,
          rating: item.rating,
          _id: item._id,
        });
      } else delid = item._id;
    });
    url = basisUrl + "/" + delid;
    await fetch(url, { method: "DELETE" }).then((result) =>
      this.setState({ songs: nieuweArray, verwerkt: true })
    );
  }

  addSong = async (e) => {
    e.preventDefault();
    let naamLiedje = document.getElementById("songName").value;
    let artiestenNaam = document.getElementById("artist").value;
    let genreNaam = document.getElementById("genre").value;
    let ratingWaarde = document.getElementById("rating").value;
    let songsArr = this.state.songs;
    let doorgaan = valideerLiedje(
      naamLiedje,
      artiestenNaam,
      genreNaam,
      ratingWaarde
    );
    if (doorgaan === "N") {
    } // Verkeerd ingevuld, niet gevalideerd en derhalve vindt geen verwerking plaats
    else {
      let putId = "";
      let idWaarde = 0;
      let songsArr2 = songsArr.map((item) => {
        if (
          item.songName.toUpperCase() === naamLiedje.toUpperCase() &&
          item.artist.toUpperCase().trim() ===
            artiestenNaam.toUpperCase().trim()
        ) {
          if (genreNaam !== item.genre || ratingWaarde !== item.rating) {
            doorgaan = "W";
            item.genre = genreNaam;
            item.rating = ratingWaarde;
            putId = item._id;
            idWaarde = item.id;
          } else {
            alert("Dit liedje staat met dit genre en rating al in de playlist");
            doorgaan = "N";
          }
        }
        return item;
      });
      if (doorgaan !== "N") {
        // Verwerking vindt plaats. Nieuw liedje wordt toegevoegd, wijziging rating en genre blijft mogelijk
        this.setState({ verwerkt: false });

        naamLiedje.toLowerCase();
        artiestenNaam.toLowerCase();
        artiestenNaam = pasCaseArtiestenNaamAan(artiestenNaam);

        if (doorgaan === "J") {
          // alleen bij nieuw liedje wordt tabel uitgebreid
          // De nieuwe waarde van het id kan niet louter op basis van het aantal elementen in de lijst worden
          // aangepast. Bij toevoeging, verwijdering, toevoeging zou dat tot niet unieke waarden leiden.
          // Omdat id de key is van de weergave van de tabel en _id de server id moeten beiden uniek blijven.
          idWaarde = 0;
          songsArr.forEach((item) => {
            if (item.id > idWaarde) idWaarde = item.id;
          });
          idWaarde += 1;
          songsArr2.push({
            id: idWaarde,
            songName: naamLiedje,
            artist: artiestenNaam,
            genre: genreNaam,
            rating: ratingWaarde,
          });
          data = {
            id: idWaarde,
            songName: naamLiedje,
            artist: artiestenNaam,
            genre: genreNaam,
            rating: ratingWaarde,
          };
          await fetch(basisUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
        } else {
          url = basisUrl + "/" + putId;
          data = {
            id: idWaarde,
            songName: naamLiedje,
            artist: artiestenNaam,
            genre: genreNaam,
            rating: ratingWaarde,
          };
          await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
        }
        // De fetch voor het vullen van de nieuwe liedjes is nodig om bij ieder liedje een ._id vast te houden
        if (doorgaan === "J")
          await fetch(basisUrl, { method: "GET" })
            .then((result) => result.json())
            .then((result) =>
              this.setState({
                songName: naamLiedje,
                artist: artiestenNaam,
                genre: genreNaam,
                rating: ratingWaarde,
                songs: result,
              })
            );
        else {
          this.setState({
            songName: naamLiedje,
            artist: artiestenNaam,
            genre: genreNaam,
            rating: ratingWaarde,
            songs: songsArr2,
          });
        }
        await this.setState({ verwerkt: true });
      }
      document.getElementById("songName").value = "";
      document.getElementById("artist").value = "";
      document.getElementById("genre").value = "";
      document.getElementById("rating").value = "";
    }
  };

  componentDidMount() {
    fetch(basisUrl, { method: "GET" })
      .then((result) => result.json())
      .then((result) => this.setState({ songs: result, opgestart: true }));
  }

    if (this.state.opgestart) {
      return (
        <div className="breedte">
          <Form onsubmit={this.addSong} onclick={this.ref} {...this.state} />
          <SongWeergaveSelecties
            ozSelectGenre={this.ozSelectGenre}
            ozSelectSterren={this.ozSelectSterren}
            ozSorteren={this.ozSorteren}
            {...this.state}
          />
          <SongList
            songList={this.state.songs}
            ozGenreSelector={this.state.ozGenreSelector}
            ozSterrenSelector={this.state.ozSterrenSelector}
            ozSorteerOptie={this.state.ozSorteerOptie}
            verwijderRegel={this.verwijderLiedje}
          />
          {this.state.verwerkt ? (
            <p></p>
          ) : (
            <p>Even geduld alstublieft. Data worden verwerkt</p>
          )}
        </div>
      );
    } else return <h1>Even geduld alstublieft. Data worden geladen</h1>;

  */
  render() {
    return <h1>h1</h1>;
  }
}

export default SongOverview;
