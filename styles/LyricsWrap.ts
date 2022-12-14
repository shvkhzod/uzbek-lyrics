import styled from "styled-components";

export const LyricsWrap = styled.div`

    @media only screen and (min-width: 600px) {
        display: flex;
        flex-direction: row;
        .nav {
            width: 24%;

        }

        .lyricsBody {
            width: 76%;
            height: 100%;
            background: #474646;
            background: -moz-linear-gradient(top,  #474646 0%, #474646 0%, #2b2a2a 66%, #1a1a1a 100%);
            background: -webkit-linear-gradient(top,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            background: linear-gradient(to bottom,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#474646', endColorstr='#1a1a1a',GradientType=0 );
            background-attachment:fixed;
            padding: 0px 80px;


            .translateHeader {
                margin-top: 40px;
                font-size: 32px;
                text-align: center;
                color: white
            }
            .lyricTranslation {
                margin-top: 40px;
                display: flex;
                flex-direction: column;
                gap: 4px;
                .lyricLine {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 4px;

                    p {
                        width: 25vw;
                        color: white;
                    }

                    :hover {
                        background-color: #636363;
                        transition: 0.800s;
                        
                    }
                }
            }
        }
    }

`