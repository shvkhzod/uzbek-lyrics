import styled from "styled-components";

    export const primaryColor = "#31E9A8";
    export const secondaryColor = "#1F2025";
    export const accentColor = "#FFFFFF"

export const NavWrap = styled.div`



    @media only screen and (min-width: 600px) {
        position: fixed;
        width: 24%;
        height: 100vh;
        background-color: #111111;
        display: flex;
        flex-direction: column;
        padding: 0px 40px;

        .logo {
            font-size: 24px;
            margin-top: 40px;
            font-weight: 500;
            color: ${primaryColor};

            span {
                font-weight: 700;
            }
        }

        .menuLabel {
            margin-top: 84px;
            color: white;
            opacity: 0.55;
        }

        .nav-items {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            .ac {
                
                left: 0;
                position: absolute;
                width: 4px;
                height: 32px;
                background-color: ${primaryColor};
                transform: translateY(0px);
                transition: 1.800;
            } 

            .acSearch {
                margin-top:-4px;
                left: 0;
                position: absolute;
                width: 4px;
                height: 32px;
                background-color: ${primaryColor};
                transform: translateY(40px);
                transition: 1.800;
            } 
            .item {
               
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 12px;

            .itemImgContainer {
                
                .itemImg {
                    position: relative;
                    width: 28px;
                    height: 28px;
     
}
                    
                  
                    

                }
            }

            .itemLabel {
                font-size: 20px;
                color: white
            }

            .itemLabelActive {
                font-size: 20px;
                color: ${primaryColor}
            }
        }
        }
    

`