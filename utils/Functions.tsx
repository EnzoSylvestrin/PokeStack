import { Favorites } from "../pages/api/models/Types";

import Api from "./Api";

export const FormatUser = (user: string): string => {
    return user.substring(0, 1).toLocaleUpperCase() + user.substring(1);
}

export const getFavorites = async () => {
    let Userid = localStorage.getItem('Account');
    if (Userid != null) {
        const Favorites = await Api.post<Favorites>('/GetFavorites', { User: Userid });
        if (Favorites.data != null && Favorites.data.orders.length != 0) {
            return Favorites.data.orders;
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}