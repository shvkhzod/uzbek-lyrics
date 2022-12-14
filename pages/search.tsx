import Image from "next/image"
import NavBar from "../components/Navbar"
import { SearchWrap } from "../styles/SearchWrap"
import SearchIc from "../public/img/search.svg"
import SongShow from "../components/SongShow"
import Link from "next/link"

const Search = () => {
    return (
        <SearchWrap>
           <div className="nav">
            <NavBar/>
           </div>

           <div className="searchBody">

             <div className="searchBar">
                <div className="searchIcContainer">
                    <div className="searchIc">
                        <Image src={SearchIc} fill  alt="search icon"/>
                    </div>
                </div>
                <input className="searchInput" type="text" placeholder="Izlash..."/>
                <button className="searchButton">OK</button>
             </div>
            <h2 className="searchTrend">Top</h2>
            <div className="searchTrendList">
             <Link href={"/lyrics"}>
            <SongShow songName="Stan" songArtist="Eminem" songImg="/img/em.png"/>
            </Link>
            <SongShow songName="Desert Rose" songArtist="Sting" songImg="/img/sting.png"/>
            <SongShow songName="Blinding Lights" songArtist="The Weeknd" songImg="/img/bl.png"/>
            <SongShow songName="In The End" songArtist="Linkin Park" songImg="/img/linkinpark.png"/>
            <SongShow songName="Just Like You" songArtist="NF" songImg="/img/likeyou.png"/>
            </div>
           </div>
        </SearchWrap>
    )
}

export default Search