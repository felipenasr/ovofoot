import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";


export class App{
    public express = new express();
    constructor() {
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors());
        this.express.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    

    private routes(): void { 
        let router = express.Router();

        router.post('/', (req, res, next) => {
            console.log(req.body);
            res.send({
                json: "TESTE"
            });
        });
        this.express.use('/', router);
    }   
    
}
