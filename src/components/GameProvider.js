import React from "react";
import { useTranslation } from "react-i18next";


import logo8 from "../assets/img/Logo/logo4.png";
import logo16 from "../assets/img/Logo/avatr.png";
import logo20 from "../assets/img/Logo/Hacksaw Logo/Hacksaw_Logo_White.png";
import logo22 from "../assets/img/Logo/NLC logo/nolimitcity-assets-pack/nl_white.png";
import logo24 from "../assets/img/Logo/playngo.png";
import logo25 from "../assets/img/Logo/turbo.png";
import logo26 from "../assets/img/Logo/smartsoft.png";
import logo27 from "../assets/img/Logo/evoplay.svg";
import logo28 from "../assets/img/Logo/funta.png";
import logo29 from "../assets/img/Logo/peter.png";
import sexyBaccarat from "../assets/img/Logo/Parlaybay Logo/png/Parlaybay-white.png";
import evolution from "../assets/img/Logo/Relax Gaming Logo/Relax-Gaming-white.png";
import playngo from "../assets/img/Logo/Slotmill_Logo/slotmill-logo-all-white-one-line.png";
import evollution from "../assets/img/Logo/evolution.png";
import mojos from "../assets/img/Logo/mojos.png";
import ezugi from "../assets/img/Logo/ezugi.png";
import yolted from "../assets/img/Logo/yolted.png";
import winfast from "../assets/img/Logo/winfast.png";
import sa from "../assets/img/Logo/sa.png";
import thunder from "../assets/img/Logo/thunderpack.png";
import bgaming from "../assets/img/Logo/bgaming.png";
import bg from "../assets/img/Logo/bg.gif";
import blueprint from "../assets/img/Logo/bprint.png";
import redtiger from "../assets/img/Logo/redtiger.png";
import ygg from "../assets/img/Logo/ygg.png";
import netent from "../assets/img/Logo/netent.png";
import gamo from "../assets/img/Logo/gano.png";
import novo from "../assets/img/Logo/novo.png";
import push from "../assets/img/Logo/push.png";
import octo from "../assets/img/Logo/octo.png";
import btg from "../assets/img/Logo/btg.png";
import fnta from "../assets/img/Logo/fanta.png";
import luckymonaco from "../assets/img/Logo/luckymonaco.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router";
import Autocomplete from './layouts/Autocomplete';

export const GameProvider = (props) => {
    const country=localStorage.getItem("cntry");
    console.log("country"+country);
    const { t } = useTranslation();

    const navigation = useNavigate();

    let Providers=[];
    
    if(country=="CN")
    {
    Providers= [
        {
            Logo: octo,
            Url: "",
            platform: "Octoplay",
        },

        {
            Logo: bg,
            Url: "",
            platform: "BGaming",
        },
        
       
        {
            Logo: thunder,
            Url: "",
            platform: "Thunder Kick",
        },
       
        {
            Logo: blueprint,
            Url: "",
            platform: "Blueprint",
        },
        // {
        //     Logo: push,
        //     Url: "",
        //     platform: "Push Gaming",
        // },
       
        {
            Logo: fnta,
            Url: "",
            platform: "Fantasma Games",
        },
        // {
        //     Logo: luckymonaco,
        //     Url: "",
        //     platform: "Lucky Monaco",
        // },
        {
            Logo: novo,
            Url: "",
            platform: "Novomatic",
        },
        {
            Logo: mojos,
            Url: "",
            platform: "7Mojos",
        },
        {
            Logo: logo24,
            Url: "",
            platform: "Play'n GO",
        },
        {
            Logo: logo27,
            Url: "",
            platform: "Evoplay",
        },
        {
            Logo: yolted,
            Url: "",
            platform: "Yolted",
        },
        {
            Logo: logo16,
            Url: "",
            platform: "AvatarUX",
        },
        {
            Logo: logo29,
            Url: "",
            platform: "Peter Sons",
        },
        // {
        //     Logo: winfast,
        //     Url: "",
        //     platform: "Win Fast",
        // },
        {
            Logo: logo20,
            Url: "",
            platform: "Hacksaw Gaming",
        },
        {
            Logo: redtiger,
            Url: "",
            platform: "Red Tiger",
        },
        {
            Logo: sa,
            Url: "",
            platform: "SA Gaming",
        },
        {
            Logo: logo28,
            Url: "",
            platform: "FunTa Gaming",
        },
        {
            Logo: logo22,
            Url: "",
            platform: "Nolimit City",
        },
        // {
        //     Logo: sexyBaccarat,
        //     Url: "",
        //     platform: "ParlayBay",
        // },
        {
            Logo: evolution,
            Url: "",
            platform: "Relax Gaming",
        },
        {
            Logo: playngo,
            Url: "",
            platform: "Slotmill",
        },
        {
            Logo: ygg,
            Url: "",
            platform: "Yggdrasil Gaming",
        },
       
        {
            Logo: logo25,
            Url: "",
            platform: "Turbo Games (Asia)",
        },
        // {
        //     Logo: logo26,
        //     Url: "",
        //     platform: "SmartSoft",
        // },
        {
            Logo: netent,
            Url: "",
            platform: "NetEnt",
        },
        // {
        //     Logo: gamo,
        //     Url: "",
        //     platform: "Gamomat",
        // },
       
       
       
       
    ];
}
else
{
    Providers= [
        {
            Logo: logo24,
            Url: "",
            platform: "Play'n GO",
        },
        
        {
            Logo: evollution,
            Url: "",
            platform: "Evolution",
        },
        {
            Logo: btg,
            Url: "",
            platform: "BigTime Gaming",
        },
        {
            Logo: octo,
            Url: "",
            platform: "Octoplay",
        },
       
       
       
       
        {
            Logo: ezugi,
            Url: "",
            platform: "Ezugi",
        },
        {
            Logo: fnta,
            Url: "",
            platform: "Fantasma Games",
        },
      
        {
            Logo: novo,
            Url: "",
            platform: "Novomatic",
        },
        {
            Logo: mojos,
            Url: "",
            platform: "7Mojos",
        },
       
        {
            Logo: logo27,
            Url: "",
            platform: "Evoplay",
        },
        {
            Logo: yolted,
            Url: "",
            platform: "Yolted",
        },
        {
            Logo: logo16,
            Url: "",
            platform: "AvatarUX",
        },
        {
            Logo: logo29,
            Url: "",
            platform: "Peter Sons",
        },
       
        {
            Logo: logo20,
            Url: "",
            platform: "Hacksaw Gaming",
        },
        {
            Logo: redtiger,
            Url: "",
            platform: "Red Tiger",
        },
        {
            Logo: sa,
            Url: "",
            platform: "SA Gaming",
        },
        {
            Logo: logo28,
            Url: "",
            platform: "FunTa Gaming",
        },
        {
            Logo: logo22,
            Url: "",
            platform: "Nolimit City",
        },
    
        {
            Logo: evolution,
            Url: "",
            platform: "Relax Gaming",
        },
        {
            Logo: playngo,
            Url: "",
            platform: "Slotmill",
        },
        {
            Logo: ygg,
            Url: "",
            platform: "Yggdrasil Gaming",
        },
       
        {
            Logo: logo25,
            Url: "",
            platform: "Turbo Games (Asia)",
        },
        // {
        //     Logo: logo26,
        //     Url: "",
        //     platform: "SmartSoft",
        // },
        {
            Logo: netent,
            Url: "",
            platform: "NetEnt",
        },
        // {
        //     Logo: gamo,
        //     Url: "",
        //     platform: "Gamomat",
        // },
       
       
       
       
    ];
}
let isSearch=false;

if(localStorage.getItem("provider")!='')
{
    isSearch=true;
}
else
{
    isSearch=false;
}
const ProvidersList =['All Providers','Play n GO','Evolution','BigTime Gaming','Octoplay','Ezugi']

    return (
        <div className="icons-wrapper md:mt-7 text-white">
            <div className="top flex items-center justify-center  mt-6 md:mt-0 mb-6">
                <h1 className="flex items-center text-sm md:text-xl text-white font-bold">
                    {t("Providers")}
                </h1>
                <div  style={{"width":"40%","color":"black"}}>
                       <Autocomplete suggestions={ProvidersList} />
                      
                    </div>
                {/* <a className='see-all' href='/'>{t("View All")}</a> */}
            </div>
            <div className="slider-area w-full">
                <Splide
                    className="mb-5 SliderAreaFirst"
                    options={{
                        gap: 15,
                        arrows: false,
                        pagination: false,
                        perPage: 8,
                        breakpoints: {
                            500: {
                                perPage: 3,
                                gap: 5,
                            },
                            770: {
                                perPage: 3,
                            },
                            970: {
                                perPage: 3,
                            },
                            1200: {
                                perPage: 4,
                            },
                            1400: {
                                perPage: 5,
                            },
                            1600: {
                                perPage: 6,
                            },
                        },
                    }}
                >
                    
                    

                    {!isSearch &&
                    
                    
                    Providers.map((item, index) => (
                        <SplideSlide
                            key={index}
                            onClick={() =>
                                navigation(`/ALL/${item.platform}`, {
                                    replace: true,
                                })
                            }
                            className="rounded-lg cursor-pointer"
                        >
                            <div
                                className={`card cursor-pointer ${
                                    props.direction
                                        ? "rounded-full"
                                        : "rounded-lg"
                                }`}
                            >
                                <div className="w-full h-[30px] py-6 md:h-[62px] overflow-hidden rounded-lg flex items-center bg-[var(--newBgProvider)]">
                                    <img
                                        key={index}
                                        src={item.Logo}
                                        alt="Logo"
                                        className="w-[80%] mx-auto"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                    
                </Splide>
            </div>
        </div>
    );
};
