import { IAdvSearchWithoutPhotos } from "./advs";
import { IMyFavorites } from "./favorites";

export interface IFavoritesSearchNeighborProps {
    myFavorites: IMyFavorites[];
    allAdvs: IAdvSearchWithoutPhotos[]
}