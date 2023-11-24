const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const request = require('supertest');
const routes = require("../routes/router");
const routes2 = require("../controller/reqres");
const express = require("express");
const app = express();
app.use("/", routes );

describe('Obat Routes', () => {
    test('should get list of obat', async () => {
        try {
            const response = await request(app).get('/' );
            const dataObat = await prisma.obat.findMany()
            expect(response.status).toEqual(dataObat ); 
        } catch (error) {
            console.log(error)
        }
    
   
    });
    test('should create a new obat', async () => {
         jest.setTimeout(10000);
         try {
         const reqBody =  { 
           ID_Obat: '2', 
           NamaObat :'konidin', 
           stok: 5000  ,
         }
          const response = await request(app)
          .post('/obat')
            .send(reqBody) 
         
        
           
             const {ID_Obat,NamaObat,stok} = request.body 
             const createObat = await prisma.obat.create({
                data: {
                  ID_Obat,
                  NamaObat,
                  stok,
                }
              });
              expect(response.body).toEqual({
                status:true,
                message:'Data Created',
                data: {
                    id:obat.ID_Obat,
                    data:obat
                }
              })

            } catch (error) {
             console.log(error)
            }
}) 
})