let snibley = {
  name: "mr. snibley",
  pets: 0,
  moods: ["happy", "bitey"],
  tolerance: 3,
  images: ["https://i.pinimg.com/236x/38/3a/08/383a08912f8d07e97671d7b7bb14db0d--cat-birthday-birthday-memes.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2016/02/japanese-grumpy-cat-angry-koyuki-moflicious-22.jpg"]
}

function pet() {
  snibley.pets++
  draw()
}

function reset() {
  snibley.pets = 0
  draw()
}

function draw() {
  let template = ''
  if (snibley.pets <= snibley.tolerance) {
    template = `
  <img src="${snibley.images[0]}"/>
      <h2> Name: ${ snibley.name}</h2>
        <h2>Pets:${snibley.pets}</h2>
        <h2>Mood: ${snibley.moods[0]}</h2>
  `
  }
  else {
    template = `
  <img src="${snibley.images[1]}"/>
      <h2> Name: ${ snibley.name}</h2>
        <h2>Pets:${snibley.pets}</h2>
        <h2>Mood: ${snibley.moods[1]}</h2>
    `
  }
  document.getElementById('cat-stats').innerHTML = template
}
draw()