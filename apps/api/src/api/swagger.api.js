const fs = require('fs')
const KoaRouter = require('koa-router')

const swaggerSpec = fs.readFileSync(`${__dirname}/assets/swagger.yaml`)

const api = KoaRouter()

api.get('/swagger.yaml',
  (ctx, _next) => {
    ctx.status = 200
    ctx.body = swaggerSpec.toString()
  })

module.exports = exports = api
