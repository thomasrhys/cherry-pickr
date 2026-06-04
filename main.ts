sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cherry = 0
game.splash("cherry pickr")
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
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
