express = require("express");
config = require("./config.json")
app = express();

app.use("/",express.static("./public"))

app.listen(config.port,()=>{
    console.log(`Sunucu ${config.port} portunda hizmet veriyor`)
})
