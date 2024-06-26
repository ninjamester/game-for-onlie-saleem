controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (trex.isHittingTile(CollisionDirection.Bottom)) {
        trex.vy = -220
    }
})
let projectile: Sprite = null
let trex: Sprite = null
scene.setBackgroundColor(13)
trex = sprites.create(img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb2525555555c..
    .....cc..b222555555555c.
    .....cccb522555ff155555c
    .....ccb55225555ff55e55c
    ......b5525525555555555c
    ...c..b525d55255ee12eec.
    ...cccd55ddddd55ee2225c.
    ....cbdddddddddd55b225c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `, SpriteKind.Player)
trex.setPosition(20, 70)
trex.ay = 400
tiles.setCurrentTilemap(tilemap`level2`)
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
        ....................
        .......77...........
        ....7.c7c7.77.7.....
        ..77c77c666c67cc7...
        ...767fffffffff6c7..
        ..776cfffffffff677..
        ....76f7777777f767..
        ....77f77f7f77f77...
        ...7c7f7777777f777..
        ..7767f7f777f7f777..
        ..7667f7f777f7f767..
        ..7777f7fffff7f76...
        ....67f7777777f677..
        ....66fffffffff.77..
        ...777.e766eff7..6..
        ..66....e6eee76...7.
        ...76.....6....6..6.
        ....6...77....7....6
        ...67...6.....76..7.
        ....................
        `, randint(-200, -120), 50)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
