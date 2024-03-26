import { app } from './app/app.js'
import { PORT } from './utils/config/config.js'

const server = app.listen(PORT, () => { console.log(`Servidor Conectado con Exito; local: ${PORT}`) })
