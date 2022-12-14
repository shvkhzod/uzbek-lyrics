import Image from "next/image"
import { SongShowWrap } from "../styles/SongShowWrap"
import PerfectIc from "../public/img/ed.png"
import PerfectIc2 from "../public/img/ed2.png"

type SongShowProps = {
    songName: string,
    songArtist: string,
    songImg: string,
}

const SongShow = ({songName, songArtist, songImg}: SongShowProps) => {
    return (
        <SongShowWrap>
            <div className="songImgContainer">
                <div className="songImg">
                    <Image src={songImg} alt="ed sheeran" fill/>
                </div>
            </div>

            <p className="songName">{songName}</p>
            <p className="songArtist">{songArtist}</p>
        </SongShowWrap>
    )
}

export default SongShow