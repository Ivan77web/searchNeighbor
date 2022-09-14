import { IAdvSearchWithPhotos } from "./advs";
import { IMyFavorites } from "./favorites";

export interface IFavoritesSearchHouseProps{
    myFavorites: IMyFavorites[];
    allAdvs: IAdvSearchWithPhotos[]
}