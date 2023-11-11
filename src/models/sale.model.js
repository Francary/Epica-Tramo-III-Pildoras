import {Schema , Types, model} from "mongoose"

const SaleSchema = new Schema (
    {
    mount: {
        type: Number,
        min:0
    },
    products:[
        {
            type: Types.ObjectId,
            ref: "Product",
        }
    ],
},
    {
        timestamps: true,
    },
);

SaleSchema

const SaleModel = model ("Sale", SaleSchema)

export {SaleModel}