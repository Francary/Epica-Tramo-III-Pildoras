import { SaleModel } from "../models/sale.model.js"

const  ctrlCreateSale   = async (req, res) => {
    try {
        const newSale = new SaleModel(req.body)
        await newSale.save()
        res.status(201).json(newSale)

    } catch (error) {
        console.error(error);
        res.sendStatus(500)        
    }
}

const ctrlAllSale = async (req, res) =>{
    try {
        const allSales = await SaleModel.find({}, "-__v").populate("products", ['-__v','-public','-slug','-image','-stock']) ;

        if(allSales.length < 1) return res.send("NO HAY VENTAS")
        
        res.json(allSales)
        
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
        
    }
}

export	{ ctrlAllSale , ctrlCreateSale }