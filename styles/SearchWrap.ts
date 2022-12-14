import styled from "styled-components";
import { primaryColor } from "./NavWrap";

export const SearchWrap = styled.div`

    @media only screen and (min-width: 600px) {
        display: flex;
        flex-direction: row;
        .nav {
            width: 24%;
        }

        .searchBody {
            width: 76%;
            height: 100vh;
            background: #474646;
            background: -moz-linear-gradient(top,  #474646 0%, #474646 0%, #2b2a2a 66%, #1a1a1a 100%);
            background: -webkit-linear-gradient(top,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            background: linear-gradient(to bottom,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#474646', endColorstr='#1a1a1a',GradientType=0 );
            padding: 0px 80px;


            .searchBar {
                display: flex;
                align-items: center;
                width: 400px;
                height: 48px;
                margin-top: 40px;
                background-color: #636262;

                border-radius: 12px;
                overflow: hidden;
                .searchIcContainer {
                    margin-left: 12px;
                    .searchIc {
                        position: relative;
                        width: 32px;
                        height: 32px;
                    }
                }

                .searchInput {
                  
                    outline: 0;
                    padding: 16px;
                    width: 100%;
                    height: 100%;
                    background-color: #636262;
                    border: none;
                    font-size: 18px;
                    ::placeholder {
                        color: white;
                        opacity: 0.75;
                    }

                    
                    

                }

                .searchInput:focus {
                    color: white;
                    
                }

                .searchButton {
                    width: 100px;
                    height: 100%;
                    border: none;
                    font-weight: 600;
                }
            }

            .searchTrend {
                margin-top: 40px;
                font-size: 28px;
                color: white
            }

            .searchTrendList {
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


    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    

        .searchBody {
            width: 100%;
            height: 100vh;
            background: #474646;
            background: -moz-linear-gradient(top,  #474646 0%, #474646 0%, #2b2a2a 66%, #1a1a1a 100%);
            background: -webkit-linear-gradient(top,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            background: linear-gradient(to bottom,  #474646 0%,#474646 0%,#2b2a2a 66%,#1a1a1a 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#474646', endColorstr='#1a1a1a',GradientType=0 );
            background-attachment: fixed;
            padding: 0px 20px;


            .searchBar {
                display: flex;
                align-items: center;
                width: 100%;
                height: 48px;
                margin-top: 40px;
                background-color: #636262;

                border-radius: 12px;
                overflow: hidden;
                .searchIcContainer {
                    margin-left: 12px;
                    .searchIc {
                        position: relative;
                        width: 32px;
                        height: 32px;
                    }
                }

                .searchInput {
                  
                    outline: 0;
                    padding: 16px;
                    width: 100%;
                    height: 100%;
                    background-color: #636262;
                    border: none;
                    font-size: 18px;
                    ::placeholder {
                        color: white;
                        opacity: 0.75;
                    }

                    
                    

                }

                .searchInput:focus {
                    color: white;
                    
                }

                .searchButton {
                    width: 100px;
                    height: 100%;
                    border: none;
                    font-weight: 600;
                }
            }

            .searchTrend {
                margin-top: 40px;
                font-size: 28px;
                color: white
            }

            .searchTrendList {
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