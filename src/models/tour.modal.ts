
export class Tour {
    name: string;
    slug: string;
    duration: number;
    maxGroupSize: number;
    difficulty: string;
    ratingsAverage: number;
    ratingsQuantity: number;
    price: number;
    priceDiscount: number;
    summary: string;
    description: string;
    imageCover: string;
    createdAt: Date;
    images: [string];
    startDates: [Date];
    secretTour: boolean;
    startLocation: {};
    locations: [];
    guides: [];
    comments:[]
}