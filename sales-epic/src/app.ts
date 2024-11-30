import express from 'express';
const bodyParser = require('body-parser');

require('dotenv').config();
var cors = require('cors');
var cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');

import { connection  } from './config/connection';

import { Routes } from './routes/Routes';


connection.then((connection) => {
  console.log("---Successfully established connection with DB----")
}).catch((err) => {
  console.log(err)
  console.log("---Unable to establish connection with DB----")

})

class App {
  public app: express.Application;

  public routePrv: Routes;
  constructor() {

    this.app = express();

    this.app.use(bodyParser.json({limit: 1000000}));
    this.app.use(cookieParser())
    this.app.use(bodyParser.urlencoded({ extended: false }));
    
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(async (req:any, res, next) => {

      this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(null, 
        {
          spec: {
            version: "1.0.0",
            title: "My API",
            description: "SALES API's",
            servers: [
              {
                description: "Sales Server",
              },
            ],
          
            // Controllers to include in the generated spec
            controllers: [__dirname + "/controller/*.ts"],
          
            // Output file name and location
            outputDirectory: "public",
            specVersion: 3,
          },
        
          // Swagger UI configuration options
          explorer: true,
          swaggerOptions: {
            authAction :{ 
              jwt: { 
                name: "jwt", 
                schema: {type: "http", in: "header", name: "Authorization", description: "JWT Token for Authentication"}, 
              },
              secret: {
                name: "secret", 
                schema: {type: "http", in: "header", name: "secret_token", description: "Secret Token for Authentication"}, 
                value: ''
              }
            },
            urls: [
              {
                url: "/swagger.json",
                name: "API",
              },
            ],
          },
        }
      ));
       
      next();
      
    });

    this.routePrv = new Routes();
    this.routePrv.routes(this.app);

  }
}

export default new App().app;
module.exports = new App().app;

