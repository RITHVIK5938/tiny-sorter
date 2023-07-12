basic.forever(function () {
    basic.pause(100)
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.setAngle(0)
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.B)) {
        servos.P0.setAngle(180)
        basic.pause(100)
    } else {
        servos.P0.setAngle(79)
        basic.pause(100)
        servos.P0.setAngle(101)
        basic.pause(100)
    }
})
