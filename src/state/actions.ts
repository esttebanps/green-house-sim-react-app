import { createAction } from "@reduxjs/toolkit";

export const addPlantType = createAction<string>("ADD_PLANT_TYPE");
export const addPlantName = createAction<string>("ADD_PLANT_NAME");
export const addLevelWater = createAction<number>("ADD_LEVEL_WATER");
export const addLevelSun = createAction<number>("ADD_LEVEL_SUN"); 
