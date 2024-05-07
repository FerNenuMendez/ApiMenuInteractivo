import { productosService } from '../services/productos.service.js'

export async function getController(req, res, next) {
    try {
        const productos = await productosService.obtenerProductos()
        res.result(productos)
    } catch (error) {
        next(error)
    }
}

export async function getByIdController(req, res, next) {
    const id = (req.params.id)
    try {
        const producto = await productosService.obtenerProductoPorID(id)
        res.result(producto)
    } catch (error) {
        next(error)
    }
}

export async function postController(req, res, next) {
    try {
        const producto = await productosService.agregarProducto(req.body)
        res.created(producto)
    } catch (error) {
        next(error)
    }
}

export async function deleteController(req, res, next) {
    try {
        const producto = await productosService.borrarProducto(req.body)
        res.result(producto)
    } catch (error) {
        next(error)
    }
}