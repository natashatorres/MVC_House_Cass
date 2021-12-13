const deleteBtn = document.querySelectorAll('.del')
const thumbUp = document.querySelectorAll('.upvote')
const thumbDown = document.querySelectorAll('.downvote')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteMessage)
})

Array.from(thumbUp).forEach((el)=>{
    el.addEventListener('click', thumbsUp)
})

Array.from(thumbDown).forEach((el)=>{
    el.addEventListener('click', thumbsDown)
})

async function deleteMessage(){
    const messageID = this.parentNode.dataset.id
    
    console.log(messageID)
    try{
        const response = await fetch('/deleteMessage', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'messageIdFromJSFile': messageID
            })
        })
      
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function thumbsUp(){
    const messageID = this.parentNode.dataset.id
    const number = parseFloat(this.parentNode.childNodes[5].innerText)

    try{
        const response = await fetch('/thumbUp', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'messageIdFromJSFile': messageID,
                'numberFromJSFile': number

            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function thumbsDown(){
    const messageID = this.parentNode.dataset.id
    const number = parseFloat(this.parentNode.childNodes[5].innerText)
    console.log(number)
    console.log(messageID)
    try{
        const response = await fetch('/thumbDown', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'messageIdFromJSFile': messageID,
                'numberFromJSFile': number
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}