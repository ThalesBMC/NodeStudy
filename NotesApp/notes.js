const fs = require('fs'); 
const chalk = require('chalk')


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
    const notaDuplicada = notes.find((note) => note.title == title)
    // node inspect app.js add --title="tituldeagorao" --body="testedagora"
    // Tem que ter o inspect para usar o comando debugger para
    //debugger
    debugger
    if (!notaDuplicada) {
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
const listNotes = ()=> {
    const data = loadNotes()
    data.forEach((note)=> console.log(chalk.blue("Titulo: "+note.title, "Texto: "+note.body)))
}
const readingNotes = (title)=>{
    const data = loadNotes()
    const ler = data.find((note)=> note.title === title)
    
    if (ler){
        console.log(chalk.blue(ler.body))
    }else{
        console.log(chalk.red("Nao encontrado"))
    }
    
}
module.exports ={
    addNotes,
    removeNotes,
    listNotes,
    readingNotes
}