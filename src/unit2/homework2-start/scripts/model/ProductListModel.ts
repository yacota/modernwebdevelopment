/**
 * Created by jllach on 28/03/14.
 */
///<reference path='../refs.ts'/>
module auction.model {
    import m = auction.model;
    export class ProductListModel {
        heading : string;
        items : m.ProductModel[];
    }
}
