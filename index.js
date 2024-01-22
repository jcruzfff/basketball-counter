let home = 00
let guest = 00

document.getElementById("homeScore").textContent = home
document.getElementById("guestScore").textContent = guest


function addOneToHome() {
    home = home + 1
    homeScore.textContent = home
}

function addTwoToHome() {
    home = home + 2
    homeScore.textContent = home
}

function addThreeToHome() {
    home = home + 3
    homeScore.textContent = home
}

function addOneToGuest() {
    guest = guest + 1
   guestScore.textContent = guest
}

function addTwoToGuest() {
    guest = guest + 2
    guestScore.textContent = guest
}

function addThreeToGuest() {
    guest = guest + 3
    guestScore.textContent = guest
}

function newGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    home = 0
    guest = 0
}

function winning() {
   let homeScore = parseInt(document.getElementById("homeScore").innerHTML)
   let guestScore = parseInt(document.getElementById("guestScore").innerHTML)
   
    let homeTeam = document.getElementById('homeTeam');
    let guestTeam = document.getElementById('guestTeam');
    
    homeTeam.classList.remove('highlight')
    guestTeam.classList.remove('highlight')
    
    if (homeScore > guestScore) {
        homeTeam.classList.add('highlight')
    } else if (guestScore > homeScore) {
        guestTeam.classList.add('highlight')
    }
}

winning();