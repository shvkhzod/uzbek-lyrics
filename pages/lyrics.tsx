import NavBar from "../components/Navbar"
import { StanEng, StanUz } from "../public/translations"
import { LyricsWrap } from "../styles/LyricsWrap"


const Lyrics = () => {
    return (
        <LyricsWrap>
            <div className="nav">
                <NavBar/>
            </div>
          
            <div className="lyricsBody">
            <h2 className="translateHeader">Stan - Eminem ft Dido</h2>
                <div className="lyricTranslation">
                {StanEng.map((e, index) => 
                    <div className="lyricLine" key={index}>
                        <p key={index}>{e}</p>
                        <p className="uzbTranslation">{StanUz[index]}</p>
                    </div>
                )}
                </div>
              
                
            </div>
        </LyricsWrap>
    )
}

export default Lyrics