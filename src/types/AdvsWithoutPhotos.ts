import { IFavorites } from "./AdvPage";
import { IAdvSearchWithoutPhotos } from "./advs";

export interface IAdvsWithoutPhotosProps{
    allAdvsWithoutPhotos: IAdvSearchWithoutPhotos[]
    favorites?: IFavorites[]
}