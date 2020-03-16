const http = require('http')
const db = require('./db')
const cors = require('cors')

/*const fs = require('fs')
const privateKey = fs.readFileSync('./sslcert/server.key', 'utf8')
const certificate = fs.readFileSync('./sslcert/server.cert', 'utf8')*/

//const credentials = { key: privateKey, cert: certificate }

const express = require('express')
const app = express()
const router = express.Router()

//const path = __dirname + '/src/views/'
const PORT = 9000
const HOST = '0.0.0.0'

app.use(cors())

const httpServer = http.createServer(app)
//const httpsServer = https.createServer(credentials, app)

router.use((req, res, next) => {
    console.log('/' + req.method)
    next()
})

router.get('/', (req, res) => res.send('Running on Docker...'))

router.get('/curriculo', (req, res) => {
    db.query('SELECT * FROM curriculo limit 1', (error, results) => {
        if (error)
            throw error

        const item = results[0]
        res.send({ nome: item.nome, endereco: item.endereco, numero: item.numero, bairro: item.bairro })
        //res.send(results.map(item => ({ nome: item.nome, endereco: item.endereco, numero: item.numero, bairro: item.bairro })))
    })
})

//app.use(express.static(path))
app.use('/', router)

httpServer.listen(PORT, HOST, () => console.log('Listening HTTP on port ' + PORT))
//httpsServer.listen(8443, () => console.log('Listen HTTPS on port ' + 8443))