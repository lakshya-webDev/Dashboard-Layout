import { THEME } from "./actionTypes";

export const ThemeSelect = (data) => {
    return {
        type: THEME,
        payload: data,
    };
};
