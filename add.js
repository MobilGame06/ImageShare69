const mysql = require("mysql")
require("dotenv").config()
CONFIG = process.env
const inquirer = require('inquirer');

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
})

async function mainMenu(){
    console.clear()
const mainMenu = await inquirer.prompt({
    name: 'mainMenu',
    type: 'list',
    message: 'What you wanne do?',
    choices: [
        'add new image',
        'add new category'
    ]
})
.then((answers) =>{
    if (answers.mainMenu == "add new image"){
        newImage()
    }else{
        newCategory()
    }
})
}

async function newImage(){
    console.clear()
    const imageUrl = await inquirer.prompt({
        name: 'imageUrl',
        type: 'input',
        message: 'Enter the url (quit to go back)'
    })

    if (imageUrl.imageUrl == "quit"){
        mainMenu()
        return
    }

    const category = await inquirer.prompt({
        name: 'category',
        type: 'input',
        message: 'Enter the category Name (quit to go back)'
    })
    if (category.category == "quit"){
        mainMenu()
        return
    }
    imagesData = {url: imageUrl.imageUrl, category: category.category}
    db.query('INSERT INTO images SET ?', imagesData)
    newImage();
    return
}


async function newCategory(){
    console.clear()
    const categoryName = await inquirer.prompt({
        name: 'categoryName',
        type: 'input',
        message: 'Enter the Category Name (quit to go back)'
    })

    if (categoryName.categoryName == "quit"){
        mainMenu()
        return
    }

    categoryData = {category: categoryName.categoryName}
    db.query('INSERT INTO categories SET ?', categoryData)
    newCategory();
    return
}

mainMenu()