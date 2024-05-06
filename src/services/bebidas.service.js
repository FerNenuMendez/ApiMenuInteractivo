import { getDaoBebidas } from "../dao/bebidas/bebidas.dao.js";

const bebidasDao = await getDaoBebidas()

class BebidasService {
    async obtenerbebidas() {
        return await bebidasDao.readMany({})
    }
    async obtenerBebidaPorID(idBebida) {
        return await bebidasDao.readOne({ id: idBebida })
    }
    async agregarBebida(datosbebidas) {
        const Bebida = await bebidasDao.create(datosbebidas)
        return Bebida
    }
    async borrarBebida(idBebida) {
        const Bebida = await bebidasDao.deleteOne({ id: idBebida })
        return Bebida
    }
}

export const bebidasService = new BebidasService()