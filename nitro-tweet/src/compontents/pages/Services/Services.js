import React from "react";
import HeroSection from "../Herosection/Herosection";
import {homeObjOne} from "./Data";
import Pricing from "../Pricing/Pricing";

function Services() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <Pricing/>
        </>
    );
}

export default Services;