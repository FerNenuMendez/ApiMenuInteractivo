import { Schema, model, connect } from 'mongoose'
import { defaultBebida } from '../../utils/config/config.js'
import dotenv from "dotenv";

dotenv.config();

const MONGODB_CNX_STR = `${process.env.MONGODB_CNX_STR}`

const collection = 'bebidas'

const bebidasSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    categoria: { type: String, required: true },
    nombre: { type: String, unique: true, required: true },
    detalle: { type: String, required: true },
    precio: { type: Number, min: 0, required: true },
    img: { type: String, default: defaultBebida },
}, {
    strict: 'throw',
    versionKey: false,
})

const bebidasModel = model(collection, bebidasSchema)

class BebidasDaoMongoose {
    async create(data) {
        const bebidas = await bebidasModel.create(data)
        return bebidas.toObject()
    }

    async readOne(query) {
        return await bebidasModel.findOne(query).lean()
    }

    async readMany(query) {
        return await bebidasModel.find(query).lean()
    }

    async updateOne(query, data) {
        throw new Error('NOT IMPLEMENTED')
    }

    async updateMany(query, data) {
        throw new Error('NOT IMPLEMENTED')
    }

    async deleteOne(query) {
        return await bebidasModel.findOneAndDelete(query).lean()
    }

    async deleteMany(query) {
        throw new Error('NOT IMPLEMENTED')
    }
}

let bebidasDaoMongoose
console.log('usando persistencia en mongodb')

export async function getDaoMongoose() {
    if (!bebidasDaoMongoose) {
        await connect(MONGODB_CNX_STR)
        console.log('conectado Bebidas a mongodb')
        bebidasDaoMongoose = new BebidasDaoMongoose()
    }
    return bebidasDaoMongoose
}