import Image from "next/image"
import { NavWrap } from "../styles/NavWrap"
import HomeIc from "../public/img/home.svg"
import HomeIcActive from "../public/img/homeActive.svg"
import SearchIc from "../public/img/search.svg"
import SearchIcActive from "../public/img/searchActive.svg"
import LibraryIc from "../public/img/lib.svg"
import LibraryIcActive from "../public/img/libActive.svg"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"

const NavBar = () => {
  
    const router = useRouter()
    var acStatuss:string;
    if(router.pathname == "/") {
        acStatuss= "ac"
    } else if (router.pathname == "/search" || router.pathname == "/lyrics") {
        acStatuss= "acSearch"
    } else if (router.pathname == "library") {
        acStatuss= "acLib"
    } else {
        acStatuss = "ac"
    }
    return(
      <NavWrap>
        <h3 className="logo"><span>Uzbek</span> Lyrics</h3>

        <p className="menuLabel">Menu</p>

        <div className="nav-items">
        <div className={acStatuss}/>
        <Link href={"/"}>
        <div className="item">
          
          <div className="itemImgContainer">
             
              <div className="itemImg">
                  <Image src={router.pathname == "/" ? HomeIcActive : HomeIc} fill alt="home icon"/>
              </div>
          </div>

          <p className={router.pathname == "/" ?  "itemLabelActive":"itemLabel"} >Asosiy</p>
        </div>
        </Link>

           <Link href={"/search"}>
               <div className="item">
                <div className="itemImgContainer">
                    <div className="itemImg">
                        <Image src={router.pathname == "/search" || router.pathname == "/lyrics" ? SearchIcActive : SearchIc} fill alt="home icon"/>
                    </div>
                </div>

                <p className={router.pathname == "/search" || router.pathname == "/lyrics" ?  "itemLabelActive":"itemLabel"} >Izlash</p>
              </div>

           </Link>
              <div className="item">
                <div className="itemImgContainer">
                    <div className="itemImg">
                        <Image src={LibraryIc} fill alt="home icon"/>
                    </div>
                </div>

                <p className="itemLabel">Taklif qilish</p>
              </div>
        </div>
      </NavWrap>
    )
}

export default NavBar