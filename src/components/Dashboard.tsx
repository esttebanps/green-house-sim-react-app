import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import background from "../assets/background.svg";
import { AppDispatch, RootState } from "../state/store";
import React, { useEffect, useState } from "react";

type Props = {
    name: string
}

const DynamicSvg: React.FC<Props> = ({ name }) => {
    const [svgPath, setSvgPath] = useState(null);

    useEffect(() => {
        import(`../assets/${name}.svg`)
            .then((module) => setSvgPath(module.default))
            .catch((err) => console.error('Error loading SVG:', err));
    }, [name]);

    if (!svgPath) return <p>Loading...</p>;

    return <img className="succulent plant-dashboard" src={svgPath} alt={`${name} icon`} />;
};

const Dashboard: React.FC = () => {
    const statePlant = useSelector((state: RootState) => state.plant);
    const dispatch: AppDispatch = useDispatch();
    let interval: number = 1

    const addLevelWater = (level: number) => {
        interval = setInterval(() => {
            dispatch({
                type: "ADD_LEVEL_WATER",
                payload: level
            });
        }, 100);

        if (statePlant.levelWater >= 10) {
            clearInterval(interval);
        }

        document.addEventListener("mouseup", () => {
            clearInterval(interval);
        });

    }

    return (
        <>
            <Header
                text="Congratulations, "
                subText={`${statePlant.plantName} is ready !`}
                subtitle="Remember to spray it, give it light and care for it to keep it healthy"
            />
            <main className="dashboard">
                <p>{statePlant.plantName}: {statePlant.levelWater} - {statePlant.levelSun}</p>
                <button
                    className="btn-4 btn-left"
                    onMouseDown={() => addLevelWater(1)}
                    onMouseUp={() => clearInterval(interval)}
                >
                    🌦
                </button>
                <button
                    className="btn-4 btn-right"
                >
                    ☀
                </button>
                <img
                    className="background-dashboard"
                    src={background}
                    alt="background"
                />
                <DynamicSvg name={statePlant.plantType} />
            </main>
        </>
    )
}

export default Dashboard;