basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (modules.distance1.distance() > 0.5) {
        basic.showIcon(IconNames.Yes)
        modules.led1.setPixelColor(0, 0xff0000)
        modules.led1.setPixelColor(1, 0x000000)
    } else {
        basic.showIcon(IconNames.No)
        modules.led1.setPixelColor(1, 0x00ff00)
        modules.led1.setPixelColor(0, 0x000000)
    }
})
