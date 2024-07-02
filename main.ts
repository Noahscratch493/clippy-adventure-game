namespace SpriteKind {
    export const SceneBG = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    Level += 1
    if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(Clippy, assets.tile`myTile`)
    } else if (Level == 3) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(Clippy, assets.tile`myTile`)
    } else if (Level == 4) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(Clippy, assets.tile`myTile`)
    } else {
        tiles.setCurrentTilemap(tilemap`level8`)
        sprites.destroy(Clippy)
        scene.setBackgroundImage(assets.image`EndScene`)
        game.showLongText("Clippy is Now Back in Microsoft Office.", DialogLayout.Center)
        game.showLongText("He's a Star Again!", DialogLayout.Center)
        game.gameOver(true)
    }
})
let Clippy: Sprite = null
let Level = 0
game.setGameOverPlayable(true, music.stringPlayable("C D C E F E D G ", 120), true)
game.splash("Clippy Adventure", "Press A To Play")
game.splash("In 2003, Clippy got Fired from Microsoft since Everyone Didn't Like Him.")
game.splash("But, Clippy has a Plan. He Wants to be a Star Again by Sneaking into Microsoft.")
Level = 1
tiles.setCurrentTilemap(tilemap`level`)
Clippy = sprites.create(assets.image`Clippy`, SpriteKind.Player)
tiles.placeOnRandomTile(Clippy, assets.tile`myTile`)
controller.moveSprite(Clippy)
Clippy.setStayInScreen(true)
scene.cameraFollowSprite(Clippy)
