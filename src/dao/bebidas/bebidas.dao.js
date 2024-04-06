import { MODO_EJECUCION } from '../../utils/config/config.js'

let getDaoBebidas

if (MODO_EJECUCION === 'online') {
    const { getDaoMongoose } = await import('./bebidas.dao.mongoose.js')
    getDaoBebidas = getDaoMongoose
}

export {
    getDaoBebidas
}