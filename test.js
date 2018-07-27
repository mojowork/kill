const Kill = require('./bundle.js')

const app = new Kill()

app.use((req, res ) => {
    res.end('hello kill')
})

app.listen('9999', () => {
    console.log('服务启动')
})