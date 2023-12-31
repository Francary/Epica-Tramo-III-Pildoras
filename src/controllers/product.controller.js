import { ProductModel } from "../models/product.model.js"

const ctrlCreateProducts = async (req, res) => {
    try {
       //const newProduct = await ProductModel.create(req.body);
       const newProduct = new ProductModel(req.body);
       await newProduct.save()

       res.status(201).json(newProduct)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
};

const ctrlListProducts = async (req, res) => {
    try {
        const allProducts = await ProductModel.find({public: false}, "-__v");
        if(allProducts.length < 1) return res.send("No hay Productos")
        res.json(allProducts);

    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
};

const ctrlGetProducts = async (req, res) => {
    const {productId} = req.params;
    try {
        const product = await ProductModel.findOne({_id: productId}, "-__v")  
        if(!product) return  res.send("El id Consultado no existe")
        res.json(product)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
};

const ctrlUpdateProducts = async (req, res) => {
    const {productId} = req.params;
    try {
        const updateProduct = await ProductModel.findOne({ _id: productId})

        if(!updateProduct) return res.send("Producto que intetas modificar no existe");

        updateProduct.set(req.body)

        await updateProduct.save();

        res.json(updateProduct)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
};

const ctrDeleteProducts = async (req, res) => {
    const {productId} = req.params;
    try {
        await ProductModel.findOneAndDelete({ _id: productId})
        res.send("Eliminado correctamente")
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
};

export { ctrlCreateProducts, ctrlListProducts , ctrlGetProducts, ctrlUpdateProducts, ctrDeleteProducts }