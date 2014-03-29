// Implement "POJO" here to keep data of a single Product item.
///<reference path='../refs.ts'/>
module auction.model {
    export class ProductModel {
        title : string;
        thumb: string;
        url : string;
        description : string;
        timeleft :  number;
        watchers: number;
        price: number;
    }
}