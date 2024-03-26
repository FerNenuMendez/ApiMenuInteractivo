import { MODO_EJECUCION } from '../../utils/config/config.js'

let getDaoPedidos

if (MODO_EJECUCION === 'online') {
    const { getDaoMongoose } = await import('./pedidos.dao.mongoose.js')
    getDaoPedidos = getDaoMongoose
}

export {
    getDaoPedidos
}