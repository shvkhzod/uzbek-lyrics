import styled from "styled-components";
import { primaryColor } from "./NavWrap";

export const MainWrap = styled.div`

    @media only screen and (min-width: 600px) {

        display: flex;
        flex-direction: row;
        /* background: rgb(26,26,26);
        background: linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(71,70,70,1) 100%); */
       
        /* Created with https://www.css-gradient.com */

        overflow-y: hidden;

      

        .nav {
            width: 24%;
            z-index: 1;
        }

        .mainBody {
            width: 76%;
            height: 100vh;
            background: #474646;
            background: -moz-linear-gradient(top,  #474646 0%, #474646 0%, #2b2a2a 66%, #1a1a1a 100%);
            background: -webkit-linear-gradient(top,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            background: linear-gradient(to bottom,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#474646', endColorstr='#1a1a1a',GradientType=0 );
        
            padding: 0px 80px;

            .mainPicContainer {
                position: absolute;
                right: 0;
                top: 0;
                .mainPic {
                    
                    position: relative;
                    width: 560px;
                    height: 700px;
                }
            }
           
            
            .mainHeader {
            margin-top: 108px;
            width: 36vw;
            color: white;
            font-size: 44px;
            line-height: 120%;
            z-index: 2;
            }

            .mainSub {
                margin-top: 12px;
                width: 32vw;
                color: white;
                font-size: 24px;
                opacity: 0.55;
            }

            .searchBtn {
                margin-top: 32px;
                width: 140px;
                height: 44px;
                background-color: ${primaryColor};
                border: none;
                border-radius: 24px;
                color: black;
                font-size: 18px;
                
            }  

            .trendListHeader {
                margin-top: 120px;
                color: white;
                font-size: 28px;
            }

            .trendList {
                width: 100%;
                margin-top: 24px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-between;
                z-index: 2;
                
             
              
            }
        }

    }

`