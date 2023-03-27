import { Profile, ProfileState } from "../interfaces/index"
import { LocalStorageAdapter } from "../adapters/index"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

function getInitialState(): ProfileState {

    var profile = LocalStorageAdapter.getItem("PROFILE");

    if (profile && profile.profile && profile.profile.name)
    {
        return {
            profile: {
                name: profile.name,
                level: profile.level,
                totalPoints: profile.totalPoints
            }
        }
    }

    return {
        profile: {
            name: "",
            level: 0,
            totalPoints: 0
        }
    }
}

const initialState: ProfileState = getInitialState();

export type ProfileAction = {
    type: "SET_PROFILE",
    value: Profile
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<ProfileAction>) => {

            LocalStorageAdapter.setItem("PROFILE", {
                ...state,
                profile: action.payload.value
            });

            state.profile = action.payload.value;
        }
    }
})

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;