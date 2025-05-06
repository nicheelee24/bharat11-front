import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import facebook from "../../assets/img/facebook.svg";
import github from "../../assets/img/github.svg";
import twitter from "../../assets/img/twitter.svg";
import discord from "../../assets/img/discord.svg";
import bitcoin from "../../assets/img/bitcoin.svg";
import share from "../../assets/img/share.svg";
import logo from "../../assets/img/logo.svg";
import coin1 from "../../assets/img/image 93.svg";
import coin2 from "../../assets/img/image 94.svg";
import coin3 from "../../assets/img/image 95.svg";
import coin4 from "../../assets/img/image 96.svg";
import coin5 from "../../assets/img/image 97.svg";
import coin6 from "../../assets/img/image 98.svg";
import coin7 from "../../assets/img/image 99.svg";
import coin8 from "../../assets/img/image 100.svg";
import coin9 from "../../assets/img/image 101.svg";
import coin10 from "../../assets/img/image 102.svg";
import coin11 from "../../assets/img/image 104.svg";
import coin12 from "../../assets/img/image 84.svg";
import coin13 from "../../assets/img/image 85.svg";
import coin14 from "../../assets/img/image 86.svg";
import coin15 from "../../assets/img/image 87.svg";
import coin16 from "../../assets/img/image 88.svg";
import coin17 from "../../assets/img/image 89.svg";
import coin19 from "../../assets/img/image 91.svg";
import coin20 from "../../assets/img/image 92.svg";

import logo2 from "../../assets/img/Logo/ezugi.png";
import logo4 from "../../assets/img/Logo/novo.png";
import logo5 from "../../assets/img/Logo/mojos.png";

import logo7 from "../../assets/img/Logo/avatr.png";
import logo8 from "../../assets/img/Logo/octo.png";

import logo10 from "../../assets/img/Logo/bprint.png";
import logo11 from "../../assets/img/Logo/Hacksaw Logo/Hacksaw_Logo_Black.png";
import logo12 from "../../assets/img/Logo/peter.png";
import logo13 from "../../assets/img/Logo/sa.png";
import logo14 from "../../assets/img/Logo/luckyy.jpg";
import logo15 from "../../assets/img/Logo/peter.png";
import logo16 from "../../assets/img/Logo/logo1.png";
import logo17 from "../../assets/img/Logo/logo8.png";
import logo18 from "../../assets/img/Logo/logo (8).png";
import logo19 from "../../assets/img/Logo/logo9.png";
import logo20 from "../../assets/img/Logo/logo (9).png";
import logo22 from "../../assets/img/Logo/logo (10).png";
import logo24 from "../../assets/img/Logo/logo (11).png";
import logo25 from "../../assets/img/Logo/logo (12).png";
import logo28 from "../../assets/img/Logo/logo (20).png";

import "@splidejs/react-splide/css";
import RegisterEmail from "../signs/RegisterEmail";

export const Footer = () => {
    const { t } = useTranslation();

    const expandMenuState = useSelector((state) => state.openMenuState.value);
    const isLogin = useSelector((state) => state.loginState.isLogin);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");

    const iconsArray = [
        coin1,
        coin2,
        coin3,
        coin4,
        coin5,
        coin6,
        coin7,
        coin8,
        coin9,
        coin10,
        coin11,
        coin12,
        coin13,
        coin14,
        coin15,
        coin16,
        coin17,
        coin19,
        coin20,
    ];

    const Logos = [
        {
            Logo: logo2,
            Url: "../ALL/Ezugi",
        },
        {
            Logo: logo4,
            Url: "../ALL/Novomatic",
        },
        {
            Logo: logo5,
            Url: "../ALL/7Mojos",
        },
        {
            Logo: logo7,
            Url: "../ALL/AvatarUX",
        },
        {
            Logo: logo8,
            Url: "../ALL/Octoplay",
        },
        {
            Logo: logo10,
            Url: "../ALL/Blueprint",
        },
        {
            Logo: logo11,
            Url: "../ALL/Hacksaw Gaming",
        },
        {
            Logo: logo12,
            Url: "../ALL/Peter Sons",
        },
        {
            Logo: logo13,
            Url: "../ALL/SA Gaming",
        },
      
       
       
        
    ];

    const signUp = () => {
        if (!isLogin) {
            setType("signup_email");
            setOpen(!isLogin);
        }
    }
    return (
        <>
            <footer className={`pt-16 mt-5`}>
                {/* <div className='content-footer-area px-3 md:px-3 max-w-[1430px] mx-auto'> */}
                <div className="content-footer-area px-3 md:px-8 mx-auto footers py-8">
                    <div className="why-area grid lg:grid-cols-1 gap-6 lg:gap-6">
                        <div className="left-area-footer-why">
                            
                            <div>
                               
                                
                                   
                                    <h1 className="text-black flex items-center justify-center text-[30px] mb-5">
                                    <img width={"40px"}  src={logo14}></img><a 
                                            href="/" style={{"fontWeight":"bolder","margin-left":"10px"}}

                                        >
                                            
                                           Lucky8online.com
                                        </a>
                                    </h1>

                                   
                            
                                
                                <p className="text-white font-bold flex items-center justify-center text-[13px] md:text-[16px] mb-5">{t("We're not just another name in the online gaming world; we represent the future of entertainment. We bring you a fantastic mix of casino games, sports betting, and a variety of other interactive experiences—all powered by the revolutionary Web3 technology. With LuckyGao, we invite you on a gaming adventure that's both exciting and thrilling, offering an absolute blend of fun and the joy of winning!")}</p>
                            </div>
                            <div className="right-area mt-5">
                                
                                <p className="text-white font-bold flex items-center justify-center text-[13px] md:text-[16px] mb-3">{t("Join Lucky8")}</p>
                            </div >
                            {!isLogin &&
                            <p className="flex items-center justify-center">
                            <button className="bg-black text-[var(--logoutBg)] mt-3 font-bold py-2 px-4 rounded" onClick={() => signUp()}>
                                Join Now
                            </button></p>}
                        </div>

                        
                    </div>
                    {/* 
                <div className="logo-footer-area grid lg:grid-cols-2 gap-6 lg:gap-36 ">
                </div> */}
                    {/* 
                <div className="list-area-footer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                    <ul>
                        <li className="head">{t("Casino")}</li>
                        <li>
                            <a href="/">{t("Casino Home")}</a>
                        </li>
                        <li>
                            <a href="/">{t("Live Casino")}</a>
                        </li>
                        <li>
                            <a href="/">{t("New Releases")}</a>
                        </li>
                        <li>
                            <a href="/">{t("Table Game")}</a>
                        </li>
                    </ul>

                  
                    


                </div> */}

                   
                    <div className=" mt-12">
                        <h1 className="text-black font-bold mb-5 flex items-center justify-center text-[22px]">Top Providers</h1>
                        <div className="icons-wrapper flex flex-wrap gap-9 justify-center">
                            {Logos.map((item, index) => (
                                <a key={index} href={item.Url}>
                                    <img
                                        src={item.Logo}
                                        alt="Logo"
                                        className="h-10 "
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                   

                    <div className="copyright-area mt-10 mb-10 md:mb-0 flex items-center justify-center text-[10px]">
                        <p>© 2025 Lucky8. {t("All rights reserved")} | Privacy Policy | Terms & Conditions | <span style={{"fontWeight":"bolder"}}>Email: lucky8@gmail.com</span></p>
                       
                    </div>
                </div>
            </footer>
            {!isLogin &&
                <RegisterEmail
                    open={open}
                    setOpen={setOpen}
                    type={type}
                    setType={setType}
                />}
        </>
    );
};
