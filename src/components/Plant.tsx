import React from "react";
import background from "../assets/background.svg";
import ricon from "../assets/rIcon.svg";
import { Link } from "react-router-dom";

type Props = {
    plantType: string;
}

const Plant: React.FC<Props> = ({ plantType }) => {


    return (
        <div className="background-plant">
            <img className="background" width={230} src={background} alt="background" />
            <img className="succulent" src={plantType} alt="plant" />
            <Link
                to="/dashboard  "
                className="btn-3"

            >
                <img src={ricon} alt="right" />
            </Link>
        </div>
    )
};

export default Plant;