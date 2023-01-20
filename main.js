const mysql = require("mysql")
require("dotenv").config()
CONFIG = process.env

const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true}))

const db = mysql.createConnection({
    host : CONFIG.myHost,
    user : CONFIG.myUser,
    password : CONFIG.myPassword,
    database : CONFIG.myDatabase
})

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log("Mysql Connected...")
})

app.set("view engine", "ejs")

//index
app.get("/", (req, res) => {
    db.query('SELECT category FROM categories', function (error, results, fields) {
        if (error) throw error;
        res.render('index', { categories: results });
    });
})


app.route("/category/:id").get(handleCategory).post(handleCategory)

async function handleCategory(req, res){
    db.query('SELECT * FROM images WHERE category = ?', req.params.id ,(err, rows)=>{
        if (err){
            throw err
        }else{
            var data = JSON.parse(JSON.stringify(rows))
            const imageUrls = [];
            var category = req.params.id
            // Füge jede URL aus der Datenbank dem Array hinzu
            data.forEach((element, index) => {
                imageUrls.push(data[index].url);
            });

            // Übergebe das Array an das Template als Variable
            console.log(imageUrls)
            res.render("category", { imageUrls, category });
           
        }    
    })
}

let server = app.listen(CONFIG.PORT, () => {
    console.log('Listening on port ' + server.address().port)
})