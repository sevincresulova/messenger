class First {
    constructor(author,text){
    this.author = author
    this.text = text
    }
    date = new Date()
     toString(){
        return `${this.date.getHours()}:${this.date.getMinutes()} ${this.author} ${this.text}` 
    }
}
    
class Second {
    constructor(){
        this.allmessages = []
    }
    
    send(author, text) {
        const first = new First(author,text)
        this.allmessages.push(first.toString())
    }
    show_history(){
        this.allmessages.forEach((item)=>{
            console.log(item)
        })
    }
   

}

let second = new Second()
second.send('Amid', 'ilk mesaj')
second.send('Narmin', 'İkinci mesaj')
second.show_history()