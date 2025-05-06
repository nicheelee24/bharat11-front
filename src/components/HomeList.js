import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { GameSplide } from "./GameSplide";
import { GameProvider } from "./GameProvider";
import { Banner } from "./Banner";
import { LatestBets } from "./LatestBets";
import * as API from "../services/api";

import glowdot from "../assets/img/glow-dot.svg";
import livecasino from "../assets/img/live-casino.svg";
import gameshow from "../assets/img/game-show.svg";
import NavBar from "./Navbar";

export const HomeList = () => {
    const { t } = useTranslation();

    const [games, setGames] = useState([]);
    const [newGames, setNewGames] = useState([]);
    const [liveGames, setLiveGames] = useState([]);
    const [slotGames, setSlotGames] = useState([]);
    const [fishingGames, setFishingGames] = useState([]);
    const [randomGames, setRandomGames] = useState([]);

    const [selectedGame, setSelectedGame] = useState("Games");
    const [providers, setProviders] = useState([]);

    const GAMES_PROVIDERS = {
        EGAME: ["FC", "JDB", "PP", "SPADE", "YL"],
        ESPORTS: ["E1SPORT", "SABA"],
        FISH: ["FASTSPIN", "FC", "JDB", "JILI", "SPADE", "YL"],
        LIVE: ["Gamomat","BG", "HORSEBOOK", "PP", "PT", "SEXYBCRT", "SV388", "VENUS","7Mojos","Evolution","Ezugi","Yolted","WinFast","SAGaming",
            "ThunderKick",
            "BGaming",
            "Blueprint",
            "NetEnt",
            "RedTiger",
            "Novomatic",
            "PushGaming",
            "Octoplay",
            "BigTime Gaming"
        ],
        // LOTTO: ["VRLOTTO"],
        SLOT: [
            "DRAGOONSOFT",
            "FASTSPIN",
            "FC",
            "JDB",
            "JILI",
            "KINGMAKER",
            "PG",
            "PLAY8",
            "PP",
            "PT",
            "RT",
            "SPADE",
            "YESBINGO",
            "Fantasma Games",
            "Lucky Monaco"
        ],
        TABLE: ["JILI", "KINGMAKER", "LUCKYPOKER", "LUDO", "PG", "RT"],
        VIRTUAL: ["SABA"],
    };

    useEffect(() => {
        if (selectedGame !== "Games" && GAMES_PROVIDERS[selectedGame]) {
            setProviders(GAMES_PROVIDERS[selectedGame]);
        } else {
            setProviders([]);
        }
    }, [selectedGame]);

    const fetchData = async () => {
        let res = await API.getHome();
        if (res.data.status === "0000") {
            setGames(res.data.games);
        }

       

       

       
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-black">
            <Banner page="lobby" />
            <div className="flex flex-col px-2 md:px-8 w-full gap-4 md:gap-10">
              

                <div className="flex flex-col w-full gap-4 md:gap-10">
                    <GameProvider />
                </div>

                {/* RecentWin*/}
                <GameSplide
                    items={8}
                    icon={() => {
                        return (
                            <img src={glowdot} alt="glowdot" className="mr-2" />
                        );
                    }}
                    title={t("Hits")}
                    games={games.slice(0, 10)}
                />

               

               

               
            </div>

            {/* LatestBets */}
            <div className="flex flex-col px-8 mt-8 w-full gap-10 LatestBets hidden">
                <LatestBets items={8} />
            </div>

            {/* Recommended Game */}
            {/* <GameSplide
          items={8}
          title={t("Recommended Games")}
          games={randomGames}
        /> */}
        </div>
    );
};
