import { useRouter } from "next/router"
import NavBar from "../components/Navbar"
import { BilleUzb, BillieEng, BillieNameEng, BillieNameUzb, ComingHomeEng, ComingHomeNameEng, ComingHomeNameUzb, ComingHomeUzb, EarthSongEng, EarthSongNameEng, EarthSongNameUzb, EarthSongUzb, EscapeEng, EscapeNameEng, EscapeNameUzb, EscapeUzb, OnlyWomanEng, OnlyWomanNameEng, OnlyWomanNameUzb, OnlyWomanUzb, StanEng, StanNameEng, StanNameUzb, StanUz } from "../public/translations"
import { LyricsWrap } from "../styles/LyricsWrap"


const Lyrics = () => {
    const router = useRouter()
    var translationEn:string[];
    var translationUz: string[];

    var songNameUzb:string;
    var songNameEn:string;
    console.log(router.query)
    console.log(router)

    if(router.asPath.includes("earthSong")) {
        console.log("it is earth song")
        translationEn = EarthSongEng
        translationUz = EarthSongUzb

        songNameEn = EarthSongNameEng
        songNameUzb = EarthSongNameUzb

    } else if (router.asPath.includes("stan")) {
        console.log("it is stan song")
        translationEn = EarthSongEng
        translationUz = EarthSongUzb

        songNameUzb = StanNameUzb
        songNameEn = StanNameEng
    } else if (router.asPath.includes("onlyWoman")) {
        console.log("it is woman song")
        translationEn = OnlyWomanEng
        translationUz = OnlyWomanUzb

        songNameUzb = OnlyWomanNameUzb
        songNameEn = OnlyWomanNameEng
    } else if (router.asPath.includes("comingHome")) {
        console.log("it is woman song")
        translationEn = ComingHomeEng
        translationUz = ComingHomeUzb

        songNameEn = ComingHomeNameEng
        songNameUzb = ComingHomeNameUzb
    } else if (router.asPath.includes("escape")) {
        console.log("it is woman song")
        translationEn = EscapeEng
        translationUz = EscapeUzb

        songNameUzb = EscapeNameUzb
        songNameEn = EscapeNameEng
    } else if (router.asPath.includes("billieJean")) {
        console.log("it is woman song")
        translationEn = BillieEng
        translationUz = BilleUzb

        songNameEn = BillieNameEng
        songNameUzb = BillieNameUzb
    } 
     else {
        translationEn = StanEng
        translationUz = StanUz

        songNameUzb = StanNameUzb
        songNameEn = StanNameEng
    }
    return (
        <LyricsWrap>
            <div className="nav">
                <NavBar/>
            </div>
          
            <div className="lyricsBody">
            <h2 className="translateHeader">{songNameEn}</h2>
            <p className="uzHeader">{songNameUzb}</p>
                <div className="lyricTranslation">
                {translationEn.map((e, index) => 
                    <div className="lyricLine" key={index}>
                        <p key={index}>{e}</p>
                        <p className="uzbTranslation">{translationUz[index]}</p>
                    </div>
                )}
                </div>
              
                
            </div>
        </LyricsWrap>
    )
}

export default Lyrics