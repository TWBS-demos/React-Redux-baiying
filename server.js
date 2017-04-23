let express  = require("express")
let app = new express();

app.use(express.static('./public'));

app.listen(3000,()=>{
    console.log("listining 3000 port");
})