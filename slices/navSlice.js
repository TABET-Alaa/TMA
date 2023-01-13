import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload; 
        },
        setDestination: (state, action) => {
            state.origin = action.payload; 
        },
        setTravelTimeInformation: (state, action) => {
            state.origin = action.payload; 
        }
    }
});

export const {setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions ;

export const selectOrigin = (state) => store.nav.origin ;
export const selectDestination = (state) =>  store.nav.destination ;
export const selectTravelTimeInformation = (state) =>  store.nav.TravelTimeInformation ;

export default navSlice.reducer ;