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

SaleSchema.pre("save", async function (next) {
    const products = await this.model("Product").find({
        _id: { $in: this.products},
    })

    products.forEach( (prod) => {
        if (prod.stock > 0 ) this.mount += prod.price;

        //Descontar Stock
        // Sacar los id de los productos de la venta que no tengan suficiente stock
    })
    next()
})

const SaleModel = model ("Sale", SaleSchema)

export {SaleModel}