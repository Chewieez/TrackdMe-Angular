export class Bike {
    brandName: string;
    fbId: string;
    images: string[];
    mileage: number;
    modelName: string;
    notes: string;
    purchaseDate: Date;
    serial: string;
    stravaBikeId: any; // should be a string but some data in database has it set as 0 if it's not linked to strava. Need to change the default to a string
    userId: string;
}
