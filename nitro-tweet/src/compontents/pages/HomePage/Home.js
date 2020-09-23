import React from "react";
import HeroSection from "../Herosection/Herosection";
import {homeObjOne, homeObjFour, homeObjThree, homeObjTwo} from "./Data";
import Pricing from "../Pricing/Pricing";

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjTwo}/>
            <Pricing/>
            <HeroSection {...homeObjFour}/>
        </>
    );
}

export default Home;