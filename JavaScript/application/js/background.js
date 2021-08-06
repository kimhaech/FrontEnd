const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

// const bImage = document.createElement("img")

// bImage.src = `img/${chosenImage}`

const bgimg = "url(" + `img/${chosenImage}` + ")"
document.body.style.backgroundImage = bgimg
