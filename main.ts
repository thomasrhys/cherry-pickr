sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cherry = 0
game.splash("cherry pickr")
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(150, function () {
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
