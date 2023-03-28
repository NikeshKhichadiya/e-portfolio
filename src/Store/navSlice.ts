import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface NavState {
    id: string
}

const initialState: NavState = {
    id: 'home',
}

export const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        setRouterId: (state: NavState, action: PayloadAction<string>) => {
            state.id = action.payload;
            setPosition(state.id);
        }
    },
})

const setPosition = (id: string) => {
    setTimeout(() => {
        if (id === 'home') window.scrollTo(0, 0);
        else {
            let element = document.getElementById(id);
            if (!!element && !!element.offsetTop) {
                if (window.innerWidth > 1200) { window.scrollTo(0, element.offsetTop) }
                else window.scrollTo(0, element.offsetTop - 20)
            };
        }
    }, 100)
}

export const { setRouterId } = routerSlice.actions;

export default routerSlice.reducer;