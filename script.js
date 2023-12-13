const h1 = document.querySelector("h1")

fetch('https://party-wedding.glitch.me/v1/party')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    
    console.log(data[0].name)
    if(data[0].VIP == true) {
        h1.innerText = "true"
        console.log("is VIP")
    }
  })
  .catch(e => console.log(e.message))
