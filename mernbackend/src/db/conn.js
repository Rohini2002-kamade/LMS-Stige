const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27-17/DemoSessionRegistration", {
    useNewurlParser:true,
    useUnifiesTopology:true,
    useCreateIndex:true
}).then(() =>{
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(`no Connection`)
})