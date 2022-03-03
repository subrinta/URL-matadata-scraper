const express = require('express')
const urlMetadata = require('url-metadata')

const app = express()

app.use(express.json())
app.post('/scraple', (req, res)=>{
    res.setHeader('Content-Type', 'application/json')
    urlMetadata(req.body.url).then((matadata)=>{
        res.send({
            title: matadata.title,
            description: matadata.description,
            images: matadata['og:image']
        })
    })
})

module.exports = app