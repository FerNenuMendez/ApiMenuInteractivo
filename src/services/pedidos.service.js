import { getDaoPedidos } from "../dao/pedidos/pedido.dao.js";

const pedidosDao = await getDaoPedidos()

class PedidosService {
    async obtenerPedidos() {
        return await pedidosDao.readMany({})
    }

    async agregarPedido(datosPedidos) {
        const pedido = await pedidosDao.create(datosPedidos)
        return pedido
    }
    async borrarPedido(idPedido) {
        const pedido = await pedidosDao.deleteOne({ id: idPedido })
        return pedido
    }
}

export const pedidosService = new PedidosService()