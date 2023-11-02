function clickForBlue () {
    var b = document.getElementById("Main")
    b.style.backgroundColor = "blue"
}

function clickForRed () {
    var c = document.getElementById("Main")
    c.style.backgroundColor = "red"

}

function clickForOrange () {
    var d = document.getElementById("Main")
    d.style.backgroundColor = "orange"
}

function clickForYellow() {
    var e = document.getElementById("Main")
    e.style.backgroundColor = "yellow"
}

function clickForRandom() {
    var colours = ["red", "blue", "yellow", "orange"]
    var index = Math.floor(Math.random()*colours.length)

    var g = document.getElementById("Main")
    g.style.backgroundColor = `${colours[index]}`
    console.log(index)
    console.log(`${colours[index]}`)
}




