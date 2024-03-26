import { pedidosService } from '../services/pedidos.service.js'

export async function getController(req, res, next) {
    try {
        const pedidos = await pedidosService.obtenerPedidos()
        res.result(pedidos)
    } catch (error) {
        next(error)
    }
}

export async function postController(req, res, next) {
    try {
        const pedido = await pedidosService.agregarPedido(req.body)
        res.created(pedido)
    } catch (error) {
        next(error)
    }
}

export async function deleteController(req, res, next) {
    try {
        const pedido = await pedidosService.borrarPedido(req.body)
        res.result(pedido)
    } catch (error) {
        next(error)
    }
}