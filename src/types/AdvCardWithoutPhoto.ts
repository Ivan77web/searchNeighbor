import { IFavorites } from "./AdvPage";
import { IAdvSearchWithoutPhotos } from "./advs";

export interface IAdvCardWithoutPhoto {
    adv: IAdvSearchWithoutPhotos;
    favorites?: IFavorites[];
}