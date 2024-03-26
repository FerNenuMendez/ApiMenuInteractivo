import { Schema, model, connect } from 'mongoose'
import dotenv from "dotenv";

dotenv.config();

const MONGODB_CNX_STR = `${process.env.MONGODB_CNX_STR}`

const collection = 'productos'

const productosSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    nombre: { type: String, unique: true, required: true },
    detalle: { type: String, required: true },
    precio: { type: Number, required: true },
    foto: { type: String, required: true },
}, {
    strict: 'throw',
    versionKey: false,
})

const productosModel = model(collection, productosSchema)

class ProductosDaoMongoose {
    async create(data) {
        const producto = await productosModel.create(data)
        return producto.toObject()
    }

    async readOne(query) {
        return await productosModel.findOne(query).lean()
    }

    async readMany(query) {
        return await productosModel.find(query).lean()
    }

    async updateOne(query, data) {
        throw new Error('NOT IMPLEMENTED')
    }

    async updateMany(query, data) {
        throw new Error('NOT IMPLEMENTED')
    }

    async deleteOne(query) {
        return await productosModel.findOneAndDelete(query).lean()
    }

    async deleteMany(query) {
        throw new Error('NOT IMPLEMENTED')
    }
}

let productosDaoMongoose
console.log('usando persistencia en mongodb')

export async function getDaoMongoose() {
    if (!productosDaoMongoose) {
        await connect(MONGODB_CNX_STR)
        console.log('conectado a mongodb')
        productosDaoMongoose = new ProductosDaoMongoose()
    }
    return productosDaoMongoose
}