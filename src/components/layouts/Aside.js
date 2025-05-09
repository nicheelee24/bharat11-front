import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setNavBar } from "../../redux/reducers/navBar";
import { reverse } from "../../redux/reducers/openMenu";

import menuExpander from "../../assets/img/menu.svg";
import login from "../../assets/img/aside/login.png";
import signup from "../../assets/img/aside/signup.png";
// import logo from '../../assets/img/logo.svg'
import logo from "../../assets/img/Logo/logos.png";
import LuckyGaoLogo from "../../assets/img/Logo/bharat11.png";

import Login from "../signs/Login";
import ResetPassword from "../signs/ResetPassword";
import RegisterEmail from "../signs/RegisterEmail";
import RegisterPhone from "../signs/RegisterPhone";

import { SideIcon } from "../SideIcon";
import LanguageSelector from "../LanguageSelector";
import Deposit from "../transfer/Deposit";
import Withdraw from "../transfer/Withdraw";
import * as API from "../../services/api";

const routeMappings = {
    "/": 0,
    ESPORTS: 1,
    EGAME: 2,
    SLOT: 3,
    FH: 4,
    THAI: 5,
    TABLE: 6,
    LIVE: 7,
    LOTTO: 8,
    BINGO: 9,
    CHICKEN: 10,
};

const extractRouteIndex = (path) => {
    const result = path.split("/")[1];
    return routeMappings[result] || -1;
};

export const Aside = () => {
    const { t } = useTranslation();

    const expandMenuState = useSelector((state) => state.openMenuState.value);
    // const expandMenuState = true;

    const isLogin = useSelector((state) => state.loginState.isLogin);
    const dispatch = useDispatch();

    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");

    const [isLang, setIsLang] = useState(false);
    const langRef = useRef(null);

    const [depositOpen, setDepositOpen] = useState(false);

    const [withdrawOpen, setWithdrawOpen] = useState(false);

    const [promotionItems, setPromotionItems] = useState(null);
    const [IdWisePromotion, setIdWisePromotion] = useState(null);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (!expandMenuState) {
            dispatch(reverse());
            setIsLang(false);
        }
    }, []);

    useEffect(() => {
        const path = location.pathname;
        const index = extractRouteIndex(path);

        // if (index !== -1) {
        //   dispatch(setNavBar({ index }));
        // }
    }, [location.pathname, dispatch]);

    useEffect(() => {
        // 👇️ scroll to bottom every time Language select
        langRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [isLang]);

    // const getPromotions = useCallback(async () => {
    //     try {
    //         const res = await API.getAllPromotions(true);
    //         if (res?.data?.promotionsList) {
    //             setPromotionItems(res?.data?.promotionsList);
    //         }
    //     } catch (error) {
    //         console.error("Error while fetching promotions:", error);
    //     }
    // },[]);

    // useEffect(() => {
    //     if(userInfo && userInfo?.promotionId && promotionItems && promotionItems.length){
    //         try {
    //             const filteredPromotions = promotionItems?.find(
    //                 (promo) => promo._id === userInfo?.promotionId
    //             );
    //             setIdWisePromotion(filteredPromotions);
    //         } catch (error) {
    //             console.error("Error while fetching promotions:", error);
    //         }
    //     }
    // }, [userInfo,promotionItems,isLogin]);

    useEffect(() => {
        if (isLogin) {
            getUserInfo();
        }
    }, [isLogin]);

    const getUserInfo = useCallback(async () => {
        const res = await API.getUserInfo();
        if (res?.data) {
            setUserInfo(res.data);
        }
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             await getPromotions();
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const registerList = [
        {
            Text: t("Log In"),
            Type: "login",
        },
        {
            Text: t("Sign Up"),
            Type: "signup_email",
        },

    ];

    const gameListLeft = [
        // {
        //     Text: t("Lobby"),
        //     Type: "lobby"
        // },
        // {
        //     Text: t("Slots"),
        //     Type: "slot",
        // },
        // {
        //     Text: t("Live Casino"),
        //     Type: "live",
        // },
        // {
        //     Text: t("Table Game"),
        //     Type: "table",
        // },
        {
            Text: t("Sports"),
            Type: "ESPORTS",
        },
        {
            Text: t("Slots"),
            Type: "SLOT",
        },
        {
                Text: t("Live"),
                Type: "LIVE",
            },

        // {
        //     Text: t("Fishing Game"),
        //     Type: "fishing",
        // },
        // {
        //     Text: t("Thai Game"),
        //     Type: "thai",
        //     // Type: 'CHICKEN'
        // },

        // {
        //     Text: t("Lotto"),
        //     Type: "LOTTO",
        // },
        // {
        //     Text: t("Virtual"),
        //     Type: "VIRTUAL",
        // },
        // {
        //   Text: t('Game-Chicken'),
        //   Type: 'CHICKEN'
        // }
    ];

    const supportList = [
        // {
        //     Text: t("Promotion"),
        //     Type: "Promotion",
        // },
        // {
        //   Text: t('VIP'),
        //   Type: 'VIP'
        // },
        // {
        //     Text: t("Support"),
        //     Type: "Support",
        // },
        {
            Text: t("Profile"),
            Type: "Account",
        },
        {
            Text: t("My Bets"),
            Type: "MyBetList",
        },

        {
            Text: t("Transactions"),
            Type: "FinancialReport",
        },
        {
            Text: t("Support"),
            Type: "ContactUs",
        },
        // {
        //   Text: t('Language'),
        //   Type: 'Language'
        // }



        // {
        //     Text: t("Announce"),
        //     Type: "Announce",
        // },
    ];

    const handleIsLang = (e) => {
        if (!expandMenuState) {
            dispatch(reverse());
        }

        setIsLang(!isLang);
    };
    //

    function isMobileDevice() {
        const mobileWidth = 768;
        if (window.innerWidth < mobileWidth) return true;
        else return false;
    }

    const handleDeposit = (deposit) => {
        // onClick deposit button
        setDepositOpen(deposit);

        if (isMobileDevice()) dispatch(reverse());
    };

    const handleWithdraw = (withdraw) => {
        setWithdrawOpen(withdraw);

        if (isMobileDevice()) dispatch(reverse());
    };

    function isValueInArray(value) {
        return IdWisePromotion?.games?.includes(value) || false;
    }

    return (
        <>
            <div className="z-[15]">
                {/* <aside className='py-1 hidden md:flex'> */}
                <aside className="py-1 fixed md:sticky md:flex top-0 z-[999]">
                    <div
                        className={`flex flex-col z-[99] ${expandMenuState
                            ? isMobileDevice()
                                ? "w-[350px] md:w-[265px]"
                                : "w-[220px] md:w-[265px]"
                            : "w-0 md:w-[0px]"
                            } transition-width duration-[700ms] ease-in-out`}
                    >
                        <div className="flex p-2 px-3 items-center justify-between">
                            <div
                                className={`${expandMenuState ? "" : "hidden"
                                    }`}
                            >
                                <a href="/ALL/BGaming" className="flex justify-start items-center">
                                    <img
                                        src={LuckyGaoLogo}
                                        alt="logo"
                                        className="w-[110%]" style={{ "marginLeft": "65%" }}
                                    />
                                    {/* <a href='/' className='text-[32px] font-semibold text-[#FF0000]'>LuckyGao</a> */}
                                </a>
                            </div>

                            {/* Hamburger Button */}
                            <div
                                className="bg-[var(--bgColorWhite)] flex w-[70px] h-[70px] items-center justify-center text-white cursor-pointer "
                                onClick={() => {
                                    dispatch(reverse());
                                    setIsLang(false);
                                }}
                            >
                                <img src={menuExpander} alt="menuExpander" />
                            </div>


                        </div>


                        <div className="w-full !px-2 mt-8 gap-2 flex">
                            <button
                                className={`w-1/3 md:w-full text-[13px] md:text-[16px] btn-f1 deposit ${expandMenuState ? "" : "hidden"
                                    } rounded-lg`}
                                onClick={() => handleDeposit(true)}
                            >
                                {t("Deposit")}
                            </button>

                            <button
                                className={`w-1/3 md:w-full text-[13px] md:text-[16px] btn-f1 withdraw ${expandMenuState ? "" : "hidden"
                                    } rounded-lg`}
                                onClick={() => handleWithdraw(true)}
                            >
                                {t("Withdraw")}
                            </button>
                        </div>

                        {/* <button
                            className={`!mx-2 btn-f1 ${expandMenuState ? '' : 'hidden' } rounded-lg mt-12`} onClick={() => handleDeposit(true)}>
                            {t("Deposit")}
                            </button> */}

                        <div
                            className={`overflow-y-auto px-2 my-2 ${expandMenuState
                                ? "h-[calc(100vh-200px)]"
                                : "hidden"
                                } `}
                        >



                            {supportList.map((item, index) => {
                                return (
                                    <SideIcon
                                        text={item.Text}
                                        type={item.Type}
                                        index={index + 20}
                                        key={item.Text}
                                        expand={expandMenuState}
                                    />
                                );
                            })}

                            {gameListLeft.map((item, index) => {
                                return (
                                    <>
                                        {(isValueInArray(item.Type) || isLogin) ?
                                            <SideIcon
                                                text={item.Text}
                                                type={item.Type}
                                                index={index}
                                                key={item.Text}
                                                expand={expandMenuState}
                                            />
                                            : null}
                                    </>
                                );
                            })}

                            {/* <div onClick={handleIsLang}>
                                <SideIcon
                                    text={t("Language")}
                                    type="Language"
                                    index="23"
                                    key="Language"
                                    expand={expandMenuState}
                                />
                            </div>

                            <div
                                className={`${expandMenuState && isLang ? "" : "hidden"
                                    } border-t border-gray-600 mx-[12px] mt-[6px]`}
                            >
                                <LanguageSelector />
                            </div>

                            <div ref={langRef} /> */}
                        </div>
                    </div>
                </aside>
            </div>
            <Login
                open={open}
                setOpen={setOpen}
                type={type}
                setType={setType}
            />

            <ResetPassword
                open={open}
                setOpen={setOpen}
                type={type}
                setType={setType}
            />
            <RegisterEmail
                open={open}
                setOpen={setOpen}
                type={type}
                setType={setType}
            />
            <RegisterPhone
                open={open}
                setOpen={setOpen}
                type={type}
                setType={setType}
            />

            <Deposit
                open={depositOpen}
                setOpen={setDepositOpen}
                type={"deposit"}
                setType={null}
            />

            <Withdraw
                open={withdrawOpen}
                setOpen={setWithdrawOpen}
                type={"withdraw"}
                setType={null}
            />
        </>
    );
};
