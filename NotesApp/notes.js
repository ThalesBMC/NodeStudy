const fs = require('fs'); 
const chalk = require('chalk')
const getNotes = () =>{
    notes = "Salve eu sou thales"
    return notes
}

const removeNotes = (title) =>{
    const notes = loadNotes()
    const notaDuplicada = notes.filter(word => word.title !== title)
    if (notes.length !== notaDuplicada.length){
        console.log(chalk.yellow(title,"Foi removido"))
        saveNotes(notaDuplicada)
    }else{
        console.log(chalk.blue("Esse titulo nao existe"))
    }
}

const addNotes = (title,body) =>{
    const notes = loadNotes()
    const notaDuplicada = notes.filter(function(note){
        return note.title === title
    })
    if (notaDuplicada.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.red("Nova nota"))
    }else{
        console.log(chalk.yellow("Titulo duplicado"))
    }
    
}
const saveNotes = (notes) =>{
    const dataJson= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}
const loadNotes = () =>{
    try{
        const data= fs.readFileSync("notes.json")
        const dataJson= data.toString()
        return JSON.parse(dataJson)
    }catch(err){
        return []
    }
    
}
module.exports ={
    getNotes, 
    addNotes,
    removeNotes
}