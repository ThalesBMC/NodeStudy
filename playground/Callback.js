const geocode= (adress, callback)=>{
    setTimeout(()=>{
        const data=1
    callback(data)
    },2000)
}
geocode("recife",(data)=>{
    console.log(data)
})


const add=(valor1,valor2,callback)=>{
    setTimeout(()=>{
        sum= valor1 + valor2
    callback(sum)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})
