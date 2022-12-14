import styled from "styled-components";



export const SongShowWrap = styled.div`



    @media only screen and (min-width: 600px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 108px;
            height: 220px;
           
            .songImgContainer {
                width: 108px;
                height: 108px;
                overflow: hidden;
                border-radius: 8px;
                .songImg {
                    position: relative;
                    width: 108px;
                    height: 108px;
                }
            }
            text-align: center;
            .songName {
                margin-top: 8px;
                font-size: 18px;
                font-weight: 600;
                color: white;
                line-height: 116%;
            }

            .songArtist {
                margin-top: 4px;
                font-size: 16px;
                color: white;
                opacity: 0.65;
            }
        }
    

`