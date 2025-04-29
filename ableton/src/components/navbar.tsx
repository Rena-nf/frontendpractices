import { useState } from "react";
import "@/main.css";

const More = () => {
    return (
        <div>
            <h3 className={"mb-2 text-[26px]/normal poppins-semibold"}>
                More on Ableton.com:
            </h3>
            <ul className={"flex flex-row text-balance/normal"}>
                <li className={"mr-1.5 pr-2.5"}>Blog</li>
                <li className={"mx-1.5 pr-2.5"}>Ableton for the Classroom</li>
                <li className={"mx-1.5 px-2.5"}>
                    Ableton for Colleges and Universities
                </li>
                <li className={"mx-1.5 px-2.5"}>Certified Training</li>
                <li className={"mx-1.5 px-2.5"}>About Ableton</li>
                <li className={"mx-1.5 px-2.5"}>Jobs</li>
                <li className={"mx-1.5 px-2.5"}>Apprenticeships</li>
            </ul>
            <h3 className="mt-11 mb-2 text-[26px]/normal poppins-semibold">
                More from Ableton:
            </h3>
            <ul className="flex flex-row text-base/normal">
                <li className={"mr-5"}>
                    <a href="#" className="flex flex-col">
                        <h4 className="text-lg/normal poppins-semibold">
                            Loop
                        </h4>
                        <p className="text-base/normal poppins-regular">
                            Watch Talks, Performances and Features from
                            Ableton's Summit for Music Makers
                        </p>
                    </a>
                </li>
                <li className="mx-5">
                    <a href="#" className="flex flex-col">
                        <h4 className="text-lg/normal poppins-semibold">
                            Learning Music
                        </h4>
                        <p className="text-base/normal poppins-regular">
                            Learn the fundamentals of music making right in your
                            browser.
                        </p>
                    </a>
                </li>
                <li className="mx-5">
                    <a href="" className="flex flex-col">
                        <h4 className="text-lg/normal poppins-semibold">
                            Leaning Synths
                        </h4>
                        <p className="text-base/normal poppins-regular">
                            Get started with synthesis using a web-based synth
                            and accompanying lessons.
                        </p>
                    </a>
                </li>
                <li className="mx-5">
                    <a href="" className="flex flex-col">
                        <h4 className="text-lg/normal poppins-semibold">
                            Making Music
                        </h4>
                        <p className="text-base/normal poppins-regular">
                            Some tips from 74 Creative Strategies for Electronic
                            Producers.
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    );
};

const NavBar = () => {
    const [opened, setOpened] = useState(false);

    const openSubnav = () => {
        setOpened(!opened);
    };

    return (
        <div className={"order-first flex flex-col justify-start"}>
            <header
                className={"w-screen flex flex-col mt-1"}
            >
                <div
                    className={"flex flex-row items-center mr-8 ml-11 mb-1"}
                >
                    <div>
                        <svg
                            role="img"
                            aria-label="Logo Ableton"
                            className={"size-[3.8rem]"}
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="21"
                            viewBox="0 0 45 21"
                        >
                            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z">
                            </path>
                        </svg>
                    </div>
                    <ul className="w-full flex flex-row justify-start items-center text-xs/normal poppins-semibold">
                        <li className="mr-1.5 ml-9 px-2.5 h-full">
                            <a href="#">Live</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full">
                            <a href="#">Push</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full">
                            <a href="#">Move</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full">
                            <a href="#">Note</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full">
                            <a href="#">ink</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full">
                            <a href="#">Shop</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full">
                            <a href="#">Packs</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full">
                            <a href="#">Help</a>
                        </li>
                        <li className="mx-1.5 px-2.5 h-full text-sm/normal text-amber-500">
                            <button onClick={openSubnav}>
                                {opened ? "More -" : "More +"}
                            </button>
                        </li>
                        <li className="ml-auto mr-0 px-2.5 h-full text-lg/normal text-blue-700">
                            <a href="#">Try Live 12 for free</a>
                        </li>
                        <li className="px-1.5 mx-2.5 h-full">
                            <a href="#">Log in or register</a>
                        </li>
                    </ul>
                </div>
                <div
                    className={"mt-7 " + (opened ? "" : "hidden")}
                >
                    <More />
                </div>
            </header>
            <div className="w-screen border-b-2 border-solid border-b-gray-200">
            </div>
            <ul className="px-10 py-5 flex flew-row text-sm/normal poppins-semibold items-center">
                <li>
                    <a href="#" className="mx-1.5 px-2.5">About</a>
                </li>
                <li>
                    <a href="#" className="mx-1.5 px-2.5">Jobs</a>
                </li>
                <li>
                    <a href="#" className="mx-1.5 px-2.5">Apprenticeship</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
