import {Schema , Types, model} from "mongoose"

const SaleShema = new Schema (
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

const SaleModel = model ("Sale", SaleShema)

export {SaleModel}