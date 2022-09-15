const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const { name, brand, price } = req.body
    const product = new ProductsModel({
        name,
        brand,
        price
    })

    product.save()

    res.send()
}


async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    res.send({ "message": "Updadted with Success", product })

    // const product = await ProductsModel.findOne({ _id: id })
    // await product.updateOne(req.body)
    // res.send({ "message": "Updadted with Success", product })
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove.deletedCount ? 'Success' : 'Error'

    console.log(remove)

    res.send({ message })

}


module.exports = {
    get,
    post,
    put,
    remove

}