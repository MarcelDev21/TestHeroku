const ProductModel = require('../ProductModel/ProductModel')

module.exports= {
    getProduct : async(req, res) => {
        try {
          const allProverbe = await ProductModel.find().sort({createdAt: -1})
          res.status(202).json(allProverbe)
        } catch (error) {
            res.status(404).json(error)
        }
    },

    createProverbe : async (req,res) => {
        const newProverbe = await new ProductModel(req.body)
        try {
            await newProverbe.save()
            res.status(202).json(newProverbe)
        } catch (error) {
            res.status(404).json(error)
        }
    }
}