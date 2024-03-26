import { Schema, model, connect } from 'mongoose'
import { randomUUID } from 'node:crypto'
import dotenv from "dotenv";

dotenv.config();

const MONGODB_CNX_STR = `${process.env.MONGODB_CNX_STR}`

const collection = 'pedidos'

const pedidosSchema = new Schema({
    id: { type: String, default: randomUUID },
    fecha: { type: String, required: true },
    detalle: [{
        id: { type: Number },
        descripcion: { type: String },
        precio: { type: Number },
    }
    ],
    total: { type: Number, required: true },
    mesa: { type: Number, required: true },
}, {
    strict: 'throw',
    versionKey: false,
})

const pedidosModel = model(collection, pedidosSchema)

class PedidosDaoMongoose {
    async create(data) {
        const producto = await pedidosModel.create(data)
        return producto.toObject()
    }

    async readOne(query) {
        return await pedidosModel.findOne(query).lean()
    }

    async readMany(query) {
        return await pedidosModel.find(query).lean()
    }

    async updateOne(query, data) {
        throw new Error('NOT IMPLEMENTED')
    }

    async updateMany(query, data) {
        throw new Error('NOT IMPLEMENTED')
    }

    async deleteOne(query) {
        return await pedidosModel.findOneAndDelete(query).lean()
    }

    async deleteMany(query) {
        throw new Error('NOT IMPLEMENTED')
    }
}

let pedidosDaoMongoose
//console.log('usando persistencia en mongodb')

export async function getDaoMongoose() {
    if (!pedidosDaoMongoose) {
        await connect(MONGODB_CNX_STR)
        console.log('conectado Pedidos a mongodb')
        pedidosDaoMongoose = new PedidosDaoMongoose()
    }
    return pedidosDaoMongoose
}