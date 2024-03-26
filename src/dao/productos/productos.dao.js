import { MODO_EJECUCION } from '../../utils/config/config.js'

let getDaoProductos

if (MODO_EJECUCION === 'online') {
    const { getDaoMongoose } = await import('./productos.dao.mongoose.js')
    getDaoProductos = getDaoMongoose
}

export {
    getDaoProductos
}