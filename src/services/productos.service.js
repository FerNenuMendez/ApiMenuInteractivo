import { getDaoProductos } from "../dao/productos/productos.dao.js";

const productosDao = await getDaoProductos()

class ProductosService {
    async obtenerProductos() {
        return await productosDao.readMany({})
    }
    async obtenerProductoPorID(idProducto) {
        return await productosDao.readOne({ id: idProducto })
    }
    async agregarProducto(datosProductos) {
        const Producto = await productosDao.create(datosProductos)
        return Producto
    }
    async borrarProducto(idProducto) {
        const Producto = await productosDao.deleteOne({ id: idProducto })
        return Producto
    }
}

export const productosService = new ProductosService()