const  express = require("express");
const path= require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const register = require("./models/registers")

const port = process.env.PORT ||  3000;

const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");

// console.log(path.join(__dirname , "../public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path)); 
app.set("view engine" , "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/" , (req , res) => {
    res.render("index")
});
 
app.get("/login" , (req , res) =>{
    res.render("login");
})

app.get("/register" , (req , res) =>{
    res.render("register");
})

app.get("/login" , async(req , res) =>{
    // res.render("login");
    try{

        console.log(req.body.email);
        res.send(req.body.email)

    }catch(error){
        res.status(400).send(error);
    }

})

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})