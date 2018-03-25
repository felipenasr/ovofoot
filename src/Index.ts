import { App } from "../config/Express.Config";


var app = new App();

app.express.listen(3000, ()=>{
    console.log('Chocando...');            
});