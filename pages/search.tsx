import Image from "next/image"
import NavBar from "../components/Navbar"
import { SearchWrap } from "../styles/SearchWrap"
import SearchIc from "../public/img/search.svg"
import SongShow from "../components/SongShow"
import Link from "next/link"
import { useRouter } from "next/router"

const Search = () => {
    const router = useRouter()
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
            <div onClick={()=> router.push("/lyrics", {query: {name: "earthSong"}})}>
           <SongShow songName="Earth Song" songArtist="Michael Jackson" songImg="/img/earthsong.png"/>
           </div>
           <div onClick={()=> router.push("/lyrics",  {query: {name: "stan"}})}>
           <SongShow songName="Stan" songArtist="Eminem" songImg="/img/em.png"/>
           </div>
           <div onClick={()=> router.push("/lyrics", {query: {name: "onlyWoman"}})}>
           <SongShow songName="Only A Woman" songArtist="Enrique Iglesias" songImg="/img/onlywoman.png"/>
           </div>
            <div onClick={()=> router.push("/lyrics", {query: {name: "comingHome"}})}>
            <SongShow songName="Coming Home" songArtist="Enrique Iglesias" songImg="/img/cominghome.png"/>
            </div>
           <div onClick={()=> router.push("/lyrics", {query: {name: "billieJean"}})}>
           <SongShow songName="Billie Jean" songArtist="Michael Jackson" songImg="/img/billiejean.png"/>
           </div>
           <div onClick={()=> router.push("/lyrics", {query: {name: "esape"}})}>
           <SongShow songName="Escape" songArtist="Enrique Iglesias" songImg="/img/escape.png"/>
           </div>
            </div>
           </div>
        </SearchWrap>
    )
}

export default Search