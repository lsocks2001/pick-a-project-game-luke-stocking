input.onButtonPressed(Button.A, function () {
    if (total >= 5) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        score += 1
        if (score == 3) {
            music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
            basic.showLeds(`
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                . # # # .
                `)
            basic.pause(500000)
        }
        n1 = randint(1, 4)
        n2 = randint(1, 4)
        total = n1 + n2
        basic.showString("" + (n1))
        basic.showString("+")
        basic.showString("" + (n2))
        basic.showString("=")
        basic.showString("?")
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 789, 373, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        score = 0
        n1 = randint(1, 4)
        n2 = randint(1, 4)
        total = n1 + n2
        basic.showString("" + (n1))
        basic.showString("+")
        basic.showString("" + (n2))
        basic.showString("=")
        basic.showString("?")
    }
})
input.onButtonPressed(Button.B, function () {
    if (total < 5) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        score += 1
        if (score == 3) {
            music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
            basic.showLeds(`
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                . # # # .
                `)
            basic.pause(500000)
        }
        n1 = randint(1, 4)
        n2 = randint(1, 4)
        total = n1 + n2
        basic.showString("" + (n1))
        basic.showString("+")
        basic.showString("" + (n2))
        basic.showString("=")
        basic.showString("?")
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 789, 373, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        score = 0
        n1 = randint(1, 4)
        n2 = randint(1, 4)
        total = n1 + n2
        basic.showString("" + (n1))
        basic.showString("+")
        basic.showString("" + (n2))
        basic.showString("=")
        basic.showString("?")
    }
})
let total = 0
let n2 = 0
let n1 = 0
let score = 0
score = 0
n1 = randint(1, 4)
n2 = randint(1, 4)
total = n1 + n2
basic.showString("" + (n1))
basic.showString("+")
basic.showString("" + (n2))
basic.showString("=")
basic.showString("?")
