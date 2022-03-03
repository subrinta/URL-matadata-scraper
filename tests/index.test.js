const request = require('supertest')
const app = require('../src/app')

test('Should return metadata', async ()=>{
    const responce = await request(app).post('/scraple')
        .send({
            url: "http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance"
        })
        .expect(200)
    
    expect(responce).not.toBeNull()
})