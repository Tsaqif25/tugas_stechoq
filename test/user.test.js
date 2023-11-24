const express = require("express");
const request = require('supertest');

const routes = require("../routes/router");
const {
  getObat ,getObatMasuk,getObatKeluar ,createGetObat, createObatMasuk ,updateObat,HapusObat
 } = require("../controller/reqres");
 const app = express();
app.use("/", routes );


describe('Obat Routes', () => {
  test('should get list of obat', async () => {
    const response = await request(app).get('/obat' );
    expect(response.status).toBe(200); 
  });


  })

  
 
  
