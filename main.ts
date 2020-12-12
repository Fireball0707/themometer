let Temp = 0
basic.forever(function () {
    Temp = input.temperature()
    basic.showNumber(Temp)
    if (Temp < 18) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Temp > 18) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
