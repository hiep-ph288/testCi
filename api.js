let btn = document.getElementById('btn')


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    getInputValue()
})

function getInputValue(){
    let input = document.getElementById('inputbox').value
    console.log(input)
    let BASE_URL = `https://api.shrtco.de/v2/shorten?url=${input}`
    console.log(BASE_URL)
    fetch(BASE_URL).then(res=>res.json()).then(data=>{
        console.log(data.result.short_link)
        document.getElementById('shortlink').innerHTML=data.result.short_link
    })

}

function fetchdata(url){
    fetch(url).then(res=>res.json).then(data=>console.log(data))
}
