
export const getInfo = async (req, res) => {
    const util = require('util');
    const directorio = process.cwd()
    const ruta = process.execPath
    const procesoId = process.pid
    const nombrePlataforma = process.platform
    const versionNode = process.version
    const argumentoEntrada = process.argv
    const memoriaReservada = util.inspect(process.memoryUsage().rss)
    const totalCPUs = require('os').cpus().length
    res.json({directorio,ruta,procesoId,nombrePlataforma,versionNode,argumentoEntrada,memoriaReservada,totalCPUs})
}
