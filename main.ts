let elo = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    led.plot(elo, y)
    elo += 1
    if (elo == 5) {
        y += 1
        elo = 0
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
    	
    }
})
