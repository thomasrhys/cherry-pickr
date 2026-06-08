sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cherry = 0
game.splash("cherry pickr")
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(100, function () {
    cherry = 0
    sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 3 5 4 3 e c 8 . . . 6 7 8 . 
        e 3 4 3 3 3 3 3 c . . . 6 7 8 . 
        e 3 3 3 3 3 3 3 c . . . 8 6 8 . 
        e 3 e e 3 3 3 3 e e e e c 6 8 . 
        c 3 e e 3 3 3 3 e 3 5 4 3 c 8 . 
        . c 3 e e e 3 e 3 4 3 3 3 3 c . 
        . . c 3 3 3 e e 3 3 3 3 3 3 3 e 
        . . . e c c e c 3 3 3 3 3 3 3 e 
        . . . . . . . c 3 e e 3 3 e 3 c 
        . . . . . . . c e e e e e e 3 c 
        . . . . . . . . c e 3 3 3 3 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food).setPosition(randint(0, 160), randint(0, 120))
})
