class Cardnews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())


    }

    build(){
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class','card')

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class','cardLeft')

        const autor = document.createElement('span')
        autor.textContent ='By ' + (this.getAttribute('autor') || "Anonymous")

        const title = document.createElement('h1')
        title.textContent = this.getAttribute('title')

        const news = document.createElement('p')
        news.textContent = this.getAttribute('content')

        cardLeft.appendChild(autor)
        cardLeft.appendChild(title)
        cardLeft.appendChild(news)

        const cardRight = document.createElement('div')
        cardRight.setAttribute('class','cardRight')

        const img = document.createElement('img')
        cardRight.appendChild(img)
        img.src = this.getAttribute('photo') || './assets/foto-default.jpg'

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot;
    }

    style(){
        const style = document.createElement('style')
        style.textContent = `

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI',sans-serif;
        }
        
        
        .card{
            display: flex;
            flex-direction: row;
            width:80%;
            height: 250px;
            justify-content: space-between;
            -webkit-box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.75);
            box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.75);   
            margin-top:20px;
        
        .cardLeft{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .cardLeft > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        .cardLeft > span {
            font-weight: 500;
            color: rgb(66, 63, 63);
        }
        .cardLeft > p {
            color: rgba(52, 52, 52, 0.856);
        }
        .cardRight  {
            display: flex;
            align-items: center;
            padding-right: 10px;
            
            
        
        }
        
        .cardRight > img {
            max-height: 94%; 
        }
        
        `
        return style
    }
}

customElements.define('card-news',Cardnews)