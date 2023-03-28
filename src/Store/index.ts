import { configureStore } from '@reduxjs/toolkit';
import routerSlice from './navSlice';

export const store = configureStore({
    reducer: {
        "router": routerSlice
    },
});