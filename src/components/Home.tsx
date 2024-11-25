import React from "react";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import Header from "./Header";

const Home: React.FC = () => {


    return (
        <>
            <Header
                text="Welcome to"
                subText="Greenhouse Sim"
                subtitle="Here you can create and care for your own virtual plant"
            />
            <main className="home">
                <picture>
                    <img className="logo" src={logo} alt="logo" />
                </picture>
                <Link to="/plant">
                    <button className="btn-1">Create my first plant 🧑‍🌾 !</button>
                </Link>
            </main>
        </>
    )
};

export default Home;