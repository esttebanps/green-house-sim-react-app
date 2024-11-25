import { createReducer } from "@reduxjs/toolkit";
import { addLevelSun, addLevelWater, addPlantName, addPlantType } from "./actions";

type PlantState = {
    plantType: string;
    plantName: string;
    levelWater: number;
    levelSun: number;
}

const initialState: PlantState = {
    plantType: "",
    plantName: "",
    levelWater: 0,
    levelSun: 10,
}

const reducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(addPlantType, (state, action) => {
            state.plantType = action.payload;
        });
        builder.addCase(addPlantName, (state, action) => {
            state.plantName = action.payload;
        });
        builder.addCase(addLevelWater, (state, action) => {

            state.levelWater += action.payload;
            if (state.levelWater >= 10) {
                if(state.levelSun > 1) {
                    state.levelSun -= 1
                }
            }
        
            
        });
        builder.addCase(addLevelSun, (state, action) => {
            state.levelSun += action.payload;
        });
    }
);

export default reducer;