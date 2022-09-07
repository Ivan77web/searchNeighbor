import { IAdvSearchWithPhotos } from "./advs";

export interface IPhotoBlockAdvProps{
    adv: IAdvSearchWithPhotos;
    activePhoto: number;
    setActivePhoto: (value: number) => void
}