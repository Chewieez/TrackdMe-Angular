import { ComponentType } from "./component-type.model";

export class Component {
    active: boolean;
    bikeFbId: string;
    brandName: string;
    fbId: string;
    images: string[];
    installationDate: Date;
    mileage: number;
    modelName: string;
    userId: string;
    type: ComponentType;
}
