
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    goingup,
    goingdown,
    goingright,
    goingleft,
    Running_Scared,
    Blinking,
    Death
}
namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Spirit = SpriteKind.create()
}
function Play_Opening_Melody() {
    scene.setBackgroundImage(img`
        f f c f f f f 6 6 9 6 6 f 1 1 1 1 1 c d d d d d d d d d d d d d d d d d d d 1 d d 1 6 1 d 1 d 1 d d d b d 6 8 1 d 1 1 d 8 d d d b b 6 6 6 1 d 1 c d d d d d d d b d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d b b b b b c c c c c
        f f f c c f f 6 9 9 6 6 d 1 1 1 1 1 c d d d d d d d d d d d d d d d d d d 5 d 1 1 6 6 d d 1 1 d d d c b d d d d d d d 1 8 d d d d 1 7 d d 1 d c b d 1 d 1 d d d 7 1 d 7 d d 9 d d 9 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 6 9 9 9 9 9 9 9 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 d 1 1 d d d d b b b b b b b e
        f f c f f f f 6 9 6 6 9 d 1 1 1 1 1 c d d d d d d d d d d 1 d d d d d d d 1 1 d 1 6 6 1 d d d d d b 3 d 1 d 1 d d d d d 8 d d d 1 d 1 d d d 1 a b 1 d d d d d 1 9 b 1 d 7 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 9 6 6 9 9 6 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d b d d b b b 7 b
        f f c f f f f 6 6 9 9 9 d 1 1 1 1 1 c d d d d d d d d d d d d d d d d 1 d d d d d 6 6 d d d d d 1 b c c c e e d d d d d 6 d d d d d d d d d d b c d d 1 1 d 1 d d d d d d d d d d d d d 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 6 6 6 6 9 6 9 9 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 d d d d d b d d b 4 b
        f f c f c f f 6 9 6 6 9 d 1 1 1 1 1 c d d d d d d d d d d d d d 1 d d d 1 1 d d d 6 6 d 1 1 d d d d d d d 7 1 1 d d d d 6 d d d d d d d d d c c d d d d d 1 d 6 6 6 6 6 6 7 d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 6 6 6 6 6 6 6 6 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d
        f f c f f f f 6 6 6 6 6 b 8 8 8 8 8 6 d d d d d d d d d d d d d d 1 d 1 7 d 5 1 d 9 9 d d d d d d d d d d d d d d d d d d d d 1 d d 1 d 1 7 b d d 6 6 6 9 6 9 9 6 6 9 9 6 1 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 6 6 6 6 6 6 6 6 6 6 6 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d
        f f c f f f f 6 9 9 9 8 6 8 6 8 8 8 c d d d d d d d d d d 1 d 1 d 1 1 5 1 d 1 d 1 d 6 1 5 1 d 1 d d d d 5 d e 5 1 d d 1 d c e e b d d d d c b d 6 9 9 6 6 d d d d 9 d d a 6 d d d d d 9 d 9 6 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 6 6 6 8 6 6 6 6 6 6 6 6 6 6 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d 1 d
        f f c f f f f 6 9 6 6 8 c c 8 8 8 8 c d d d d d d d d d d 1 d d d 1 d d 1 d d d 1 d d 6 9 d d d d d d d e b 4 d d d d d d d d d d d d d d e c b c d d d d d 1 d d d d b 6 9 d 7 d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 1 1 1 1 1 1 1 1 1 1 d 9 9 6 6 6 9 d 1 1 1
        f c f f f f f 6 6 6 6 6 c c 8 8 8 8 c d d d d d d d d d d d d 1 d d d d b b 5 d d 1 d d d 8 d 1 d d 1 d b b 1 d d d d d d d 5 d d d d d d d 1 c b d d d d d b d 1 d a 9 d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 c
        f f f f f c f 6 6 9 9 6 c f 8 8 8 8 c d d d d d d d d d d 1 d d d 1 d 6 6 b 3 b b b b d d 1 b b e e b b d d d d d d d d d d d d d d d d d d d d c d d d d 1 f d d d b b d 6 d 6 d d d d d d 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8
        8 f 8 f f f f 6 6 6 6 6 c f 8 8 8 8 c d d d d d d d d d d d d d d 1 1 9 6 d d d d d d d 1 d e e e b e d d d d d d d d d d d d d d d d d d d d d d d c d d d d d d d 7 d d d d 6 1 d d d d d 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 9 9 6 6 8 8 8 8 8 8 8 8 8 8 8
        f 8 f f f f f 8 6 6 9 6 8 8 8 f f 8 c d d d d d d d d d d d 1 1 d 1 5 d 6 d d d d d d 1 5 7 d d d b e 1 5 d d d d d d d d d d d d d d d d d d d d c a d d d d d 1 b d d d d d d 7 d d d d d 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 8 6 8 6 6 6 6 6 9 9 9 8 8 8 8 8 8 8 8 8
        f f f c c f c 8 8 6 9 6 8 8 f 8 8 8 c d d d d d d d d d d d d d d 5 d 1 6 1 d d d d d d d d 1 7 1 e 1 d d d d d d d d d d d d d d d d d d d d d d 1 a b d d d 7 d b d d d d d d d d d d d d d 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8
        8 f 8 f f f f 8 8 6 6 9 8 8 c 8 f 8 8 d d d d d d d d d d d d d d d d d 1 6 7 1 d 6 f d d d 1 e b d d d d d d d d d d d d d d d d d d d d d d d d d d d c d d 6 b d d d d d d d 7 d d d d d d 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 9 6 6 9 6 6 6 6 6 6 9 8 8 8 8 8 8 8 8
        f 8 f f f f f 8 8 6 6 6 8 f 8 8 8 8 c d d d d d d d d d d d 5 d 1 d d d d 6 6 d 5 d 1 d 5 d d a e d d d d d d d d d d d d d d 5 d d d d d d d d d d d d b d 7 b b d d d d d 5 d 9 9 d d d d 7 d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 6 6 6 6 6 6 9 6 9 6 6 8 8 8 8 8 8 8 8
        f f f 8 f f f 8 8 6 9 9 8 8 8 f f 8 8 d d d d d d d d d d d e d d d d d d 5 6 b d d d d d d e e 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d c a d b d d 9 1 9 8 8 6 9 c d d d d d d 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 6 9 6 6 6 6 6 6 9 6 6 8 c c c c c
        f f f 8 8 f f 8 c 8 9 6 c f 8 f f 8 8 d d d d d d d d d d d 1 d d a b b b d 1 6 5 1 5 5 d b d 1 d d d d d d d d d d 5 d d d d d 5 d d d d d d d d d d d d b b 8 6 6 d d d d d d 6 c 1 d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 b 6 b 9 6 6 9 6 c 6 c d d 1 d 1 1 1 1
        8 f 8 f f f f 8 c 8 9 9 8 c 8 8 8 8 f d d d d d d d d d d e d c b d 1 1 b e d 6 d d d d d b d d 5 d d d d d d d d 5 d d d d d 5 d d d d d d d d d d d d d d c d d d d d d d d b c d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 8 8 8 8 8 8 8 8 b a 6 6 a 6 6 8 6 6 8 6 1 1 5 1 1 1 1 1
        f f f f f f f 8 f 8 6 9 8 f 8 f f 8 8 d d d d d d d d d d e 1 c d d 5 7 1 b b 1 8 5 d d b e d d d d d d d d d d d d d d d 5 d d d d d d d d d d d d d d d 7 b d d d d d d d d 6 d d d d d d d d 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 8 8 8 8 9 6 a b 6 b a 6 8 6 8 6 1 d 1 1 1 1 1 1
        f f f f f f f 8 8 8 6 9 8 f c 8 f 8 c d d d d d d d d d d d 1 d 5 d d d 5 d e e 6 6 d b d 5 d d d d d d d d d 5 d d d d d d d d d d d d 5 d d 5 d d d d d b b d d d d d d b 7 d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 8 8 6 8 6 8 9 9 9 a c c 6 8 c 8 7 1 1 1 1 1 1 1 1
        c f f f c f f 8 8 8 9 9 8 c 8 8 8 8 f d d d d d d d d d d 1 b d d d d d 5 d d b d d e 4 d 5 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d 8 8 8 8 6 8 d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 9 9 d d d 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 6 9 6 6 6 6 8 9 6 8 8 8 8 8 6 d 9 b 8 c 8 c c c 8 d 1 1 1 1 1 1 1 1
        f f f f f f f 8 8 c 9 9 8 f c f 8 f 8 d d d d d d d d d d d 9 d 5 1 1 d d 7 1 b 5 d 5 1 d d d d d d d d d d 5 d d d d d d d d 5 d d d 5 d d d d 5 d d d 5 d b d d d d d c 6 6 6 6 6 6 d d d d d d 9 8 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 6 6 6 6 8 6 9 9 d d d 7 d 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 8 8 6 8 6 8 6 9 d 9 9 6 6 c c c c d d 1 1 1 1 1 1 1
        c 8 f f c f f 8 8 8 6 9 c c c 8 f 8 f d d d d d d d d d e 6 6 d d 5 8 d 5 d 5 1 d 5 1 e e 1 d 5 d d d d d d d d d d 5 d d d d d d d d d 5 d d d d d d d d d b d d d d d d d d d d d 6 d d d d d d d 9 8 8 6 8 8 6 8 8 6 8 8 8 8 8 8 8 8 8 8 6 6 9 9 d 7 7 d 7 d d 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 6 6 8 8 c 6 9 b 9 9 6 6 9 6 c c 7 d d d d d d d
        f f f f f f f 8 8 c 9 9 8 f 8 f 8 f 8 d 5 d d d d d d d c a 6 1 5 d d d d d d d 1 d d a e d d d d d d d d d d d 1 d d d d d d 5 5 5 d d d d d 5 d d d d 5 d c 1 d d d d d d d d d d 8 d d d d d 5 7 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 9 9 d 7 d d d d d 9 1 1 1 1 1 1 1 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 8 6 8 8 8 8 8 8 9 6 9 9 9 9 9 9 9 8 c f c f f f f f
        c f c f f f f 8 f c 6 9 c c c f f 8 f d d d d d 5 d d d b c 6 d d d d d d 5 d 5 d 5 d a e d d d d d 5 d d 6 8 8 8 8 d d 1 d d 7 d d d d 5 d d d d d d d 5 d e d d d 7 d d 5 d d d d f d d d d d d d d f 8 8 8 8 8 8 8 8 c c c 6 c 9 1 c 8 8 9 6 7 9 9 d d d 9 d 9 1 5 5 5 5 1 1 5 1 1 1 1 1 1 5 5 1 5 1 1 1 1 1 1 d 8 8 8 6 c 8 f 8 8 8 a 8 8 8 8 8 8 8 c f f f c f f f
        f f f c f f f 8 f c 6 9 c f c 8 c f f d 5 d d d d d d d d 6 6 d d d d d d d d d d d d a 4 d d 5 d 8 8 6 6 6 6 6 6 6 6 6 6 d d d d 5 d d d 5 d d d d d d d d e e e e e e c c e f c b f d d d d d d d d d 1 1 1 c 8 f f c d 1 d 1 8 1 1 c 8 8 6 9 b 9 d 7 d d d d d 1 5 1 1 5 5 1 1 5 1 1 9 c c 7 1 5 5 5 1 5 d 1 1 d 8 8 8 c 8 f f 8 8 c 8 a a 8 a a 8 a 8 8 a c f f f f
        c f f f f c f f f c 9 6 f f c f f f 8 d d d 5 d 5 d 1 5 d c 6 d d 5 d 5 d 5 d 5 d 5 5 e 7 d d d 1 6 6 6 6 6 6 6 6 6 6 6 6 8 d 5 d d 5 d 5 d 5 d 5 5 d 5 5 d d d d b c c e e e e e a e d d d d d d d d d d 1 1 f f f f c c 1 1 1 9 d 9 c 8 8 6 7 9 b 7 d 7 d 7 d 9 1 5 1 1 1 1 1 1 1 1 6 c c c 8 6 5 5 5 1 5 5 1 1 9 8 6 8 f c 8 8 6 b 8 a c 8 a 8 8 a 8 c c 8 8 c f c f
        f f f f f f f 8 c f 6 9 8 c f 8 f 8 f d 5 d d d d 5 d 5 d e 6 d 5 d d d d 1 d d c 6 b d d 5 d c 8 6 6 6 6 6 6 6 6 6 6 6 6 6 8 d 5 d d d d d d d d d d d d d d f c b f f c d c b c e c d 5 d d d d d d 5 1 1 1 c c 8 c f f c 9 1 1 1 1 f 8 8 9 b 7 d d b d b d d d 1 1 1 1 1 1 1 1 1 1 c c 8 8 6 8 1 1 1 1 5 5 1 1 d 8 8 8 c f 6 9 9 8 c c 8 c c c a 8 c c 8 c c c f f c
        f f f f f c f f f f 6 6 c c f 8 f 8 f 5 d 5 5 d d 5 d d 8 6 6 6 6 6 6 9 d d d d 5 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 d d 5 d d d 5 d d d d d d d c 7 d c d c c f f d d c 7 d d d d d d d d e 4 f f f c c f c c c 9 1 1 1 1 8 8 6 7 9 9 b 7 b b b d d 1 1 1 1 1 1 1 1 1 7 c c 8 8 8 c 1 1 1 1 1 1 1 1 1 8 6 6 9 6 8 9 1 9 b 8 c c c c c 8 c c c 8 c c c c f
        c f f f f f f 8 f c a 6 c f c f c f f d d d d d d d 5 5 8 b 9 1 1 5 d d d d d d d d d d 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 d 5 d 5 5 5 d d 5 d 5 5 d d b d 7 f d f 6 f 8 d c f b d d d d d d d d d c c c 8 f f f 8 8 c 8 9 1 1 9 8 8 6 9 b 7 b 6 6 b 7 d d 1 1 1 1 1 1 1 1 1 6 c 8 c c c c 9 1 1 1 1 1 1 1 9 8 6 9 9 b 9 9 9 1 9 d c c c c 8 c 8 8 c c 8 c c f f
        f f f f f f f f 8 f 6 6 a c c f f f c 5 d 5 5 d 5 d d 5 6 d d 5 d d 5 d 5 d d 5 5 d d c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d 5 d d 5 d 5 d 5 d 5 d f c d c 7 d f c 7 c 7 c c c d d d 5 d d d d d c 8 f f c c 8 f f 8 c b 1 1 1 1 8 6 b 7 b 6 b b 6 b 7 9 d d 1 1 1 1 1 1 1 c f c 8 8 f c 6 1 1 1 1 1 1 d b 6 9 6 d 9 6 c c c 9 1 8 c c c c c c c c c c c c 8 f
        8 f f f f c f f 8 f 6 6 c c c f f f f 5 d d d 5 d d 5 d 6 6 1 1 d d d d d d 5 5 d d 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 5 d 5 d d d 5 d d 7 b d d e d 7 f 7 5 6 7 7 c c 5 d d d d d d d 7 d c f f f f c f c f f c 6 8 f f f 6 7 6 c 6 c 6 b b d d b f f 8 f f f f c c 8 c 8 8 8 c c c c f f c f f c b 6 9 6 6 a c c c c c d f c c c c c c c c c f c c f
        f c f c f f f f 8 f a 6 c c f f 8 f f d d 5 5 d d d 5 d 6 6 1 d 5 5 d d d c f e c d 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 d 5 d d 5 5 d 5 5 e f 5 e d 5 e b d d d 7 d c 7 7 d d d 5 5 d d d d c c f c c f f f c 8 8 6 8 f f 8 6 b b 6 b c b 6 b b d b c f c c f c f f c c f c 8 c f 8 c c c f f f f c 6 9 6 c a 6 c c c c c d c c c c c c f c c c f 8 c 8
        f f f f f f f 8 f f 6 6 c f c f f f c 5 5 d d 5 5 5 d 5 6 8 d d 7 d c c b 8 8 c f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 5 d e 5 d d 5 d d c 7 d c c d d c d 5 7 e f 7 d d d 5 d d d d d d 5 7 f f f f f c f 8 8 c 6 a f 8 8 6 b 6 c b b b c 6 b d d f f c c c f c c c 8 c 8 f c 8 c c f f f f f f f c 6 6 f 6 c c c c c c c f c c c f c c c f c f c f 8
        f f c f f f f f f f 6 6 c f c f f f f 5 d 5 5 d 5 5 d 5 8 8 c 8 8 6 8 f f f f b 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f e d 5 d 5 5 d 5 d 5 5 d d 5 5 7 d 5 d c 5 7 c d d 5 5 d d d d 5 5 d 5 f f f f f c 8 f 8 8 8 6 8 8 8 b 6 b b b c 6 c 6 7 b d d 1 d d 1 1 1 1 1 1 1 d b 8 8 8 f f f f f f f f 6 f f f c 6 c c c c c c c c c f c c c c f f c f f c
        8 f f f f c f f c f a 6 c c f f f f f 5 d 5 5 d 5 5 d 5 6 8 8 8 8 6 f 8 8 f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b d d 5 d d d 5 d 5 5 d 5 5 d d d 5 d c 5 d 5 d d 5 d d 7 d d 5 d d 7 d f c 8 c f 8 f 8 8 8 8 6 8 6 8 6 b c c c 7 b b 7 7 d d 1 d d 1 1 d d b c b d 1 9 9 9 8 f f f f f f f f c c c c 7 9 c c c c c c f c f c c c c f c c f c f c
        f c f f f f f f f f 6 6 a e f c f f f 5 5 d d 5 d d 5 d 6 8 f 8 f 6 8 8 f 8 f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 d 5 d 5 d d 5 d d d 5 d d 5 5 d 5 5 5 d 5 d d d d 5 5 d 5 d d 5 5 d 5 7 f 8 f f f 8 8 8 8 6 1 1 1 9 b b c c c b 7 6 c b b d b 4 d d d b c c d b b d d 9 9 9 9 8 f f f f f f 6 f f 9 d d c c c c c c c f e f c c f c f f c f c f
        8 c f f f f f f c f 6 6 c e f c f f f 5 d 5 d 5 d d d 5 6 8 f f 8 8 f 8 f 8 f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 6 6 6 6 6 6 6 6 6 6 f 5 d 5 5 5 d 5 5 d 5 d 5 d 5 d d 5 d 5 5 d d d 5 d 5 d 5 d 5 d 5 d 7 d c 8 f 8 f f 8 f 8 9 1 1 1 1 6 b b b c c b 7 c d d d d d 4 b c c c c c c c e d a b 9 9 9 9 8 f 8 f f 6 f f d b 7 c c c c c c e f c c c f f c f f c f f f
        f f f f f f f f c f 6 a c c f c f f f d 5 5 5 5 d d 5 d 8 6 8 f 8 8 f 8 f f 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 8 6 6 6 6 6 6 6 8 8 8 d d 5 d d 5 d d 5 d 5 d 5 d 5 d d 5 d d d 5 d 5 d d 5 d 5 d d d d 5 5 d 8 8 f 8 8 8 8 9 1 1 1 1 1 6 b c c c 7 7 6 d b b e e e c c c c c c c c c c b a 6 d 9 9 d 9 6 f f f a f c d b 7 c c c c c c f c c c c c c f c f c f f c
        f f f f f f f f f f 6 6 8 e f f f f f 5 5 d d d 5 5 d 5 8 6 8 8 f 8 f 8 f f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 8 8 6 6 6 6 8 8 8 8 6 d 5 5 d d 5 d d 5 d d 5 d d d 5 5 d 5 d 5 d d d 5 d d 5 d 5 d d 5 d 5 d c f 8 c 8 c 8 1 1 1 1 1 1 9 b c c c c c 7 b b c c c c 6 b b 6 b 6 b c c c b c c 9 9 9 9 9 9 f f f 6 c f 7 7 b c c c c c c c f e c f c c c f c f f f f
        f f f f f c f f c f 6 6 6 e c f f f f 5 5 d 5 d 5 5 5 d 8 6 f f f 8 f 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 6 6 6 8 8 6 6 8 8 6 6 6 8 c 5 d d d 5 5 d 5 5 d 5 d d 5 d d 5 5 5 5 d d d 5 d 5 5 5 d d d 5 d d 5 d 8 8 8 8 8 8 1 1 1 1 1 1 1 9 c c c c 7 b 1 c c b d 1 1 9 d d d d d b b c f c c b 9 9 9 9 b 8 f f 8 c c d b 7 c c c c c c c f e c f c c f f f f f f f
        f c f f f f f f 8 f 8 a a c f c f f f 5 d 5 5 5 d d 5 d f 6 8 8 f 8 8 8 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 6 6 8 6 6 6 6 6 f 5 d 5 5 5 d 5 5 d 5 d 5 d 5 d d 5 d 5 d d d 5 5 5 d d d d 5 5 d 5 d 7 d 8 8 8 f 8 6 1 1 1 1 1 1 1 1 a c c 8 e b d f c b 1 d d d d d d d d d b b c c c 9 9 9 9 b 9 8 f f c 6 f b 7 b c c c c c c f c f c c c c f c f c c c f
        f f f f f f f f c f 6 a 6 e f f f f f 5 5 d d d 5 5 5 d c 6 f f 8 f f f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 8 6 8 8 6 6 6 6 6 8 5 d 5 d 5 5 d 5 5 d 5 d d 5 d d 5 d d 5 5 5 d d d 5 d 5 d 5 7 d 5 5 d 5 c 8 8 8 8 6 1 1 1 1 1 1 1 1 9 c 8 8 c 1 e c c b d d d d d d d d d b d b c f 8 a 9 d 3 9 a a c f f a c 7 d 7 c c c c c c c f e c f c c c f f c c f f
        f f f f f f f f c f c 6 6 e f c f f f 5 5 5 5 5 d 5 5 d e c 8 f 8 f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 8 5 d 5 d 5 5 5 5 d 5 d 5 5 d 5 5 d d d 5 d d 5 d d 5 d d 5 d d 5 d 5 d 5 d 6 8 6 6 9 1 1 1 1 1 1 9 1 9 c 8 8 8 1 e c c 3 d d d d 3 d d d 3 b 3 b c c c a b a b a a b 9 f f c c 7 b 7 c c c c c c f c f f c f c c f f c f c f
        8 c f f f f f f 8 f 8 a a f c f f f f 5 5 d 5 d 5 5 d 5 d f 6 8 f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 8 5 d 5 5 5 d 5 d 5 d 5 d 5 5 5 d 5 5 5 d 5 5 d 5 5 d 5 5 d 5 5 7 d d 7 5 5 9 6 6 6 9 1 1 1 1 1 1 9 9 c 8 8 8 8 b c f b b b d d d d d d d d d d b c c c 8 9 b a a 9 9 9 8 f 8 b d d 7 c c c c c c c f c e f e f c f c f f f f
        f f f f f f f f c f c 6 a e f c f f f 5 5 d 5 5 d 5 5 5 d f b f 8 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 5 d 5 5 d 5 d 5 5 5 d 5 5 d 5 5 d 5 d 5 d d 5 d d 5 d d 5 d d 5 5 5 d 5 7 d 9 9 9 1 1 1 1 1 1 1 6 c c 8 8 8 8 d c c b b c c c d d d d d d b b 3 e c c a d a a b 9 9 b a f 8 b d d b c f e c c f f c f f c f c f c f f c f c
        f c f f f f f f f c c a 6 e f c f f f 5 d 5 5 d 5 5 d 5 5 f 9 8 8 6 6 6 6 6 6 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 6 6 6 6 6 6 6 6 8 6 6 8 5 5 d 5 5 5 5 5 d 5 5 d d 5 d 5 5 5 5 5 d d 5 d d 5 d d 5 d d 5 5 5 7 5 5 d d 1 1 1 1 1 1 1 1 9 b e f 8 8 8 8 c c c b 4 b d d 3 d d d b d b b b f c c a b 3 a b b 9 a b f f a b c f f c f e f c f c f f e f f f c c f c f c
        f f f f f f f f 8 f 8 6 a e e f f f f 4 5 5 d 5 5 d 5 5 5 f 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 b e 8 6 6 6 6 6 6 6 6 6 6 6 f 5 d e 5 5 d 5 d 5 5 d 5 5 d 5 5 d 5 5 d 5 5 5 d d 5 d d 5 d 7 5 d 5 d 5 5 7 5 1 1 1 1 1 1 1 1 1 c e c 8 8 8 8 c e f c 4 d d d d d 1 d d d b b e e c c 9 b a c 8 a a 3 a f c 6 b c c c c f f c f e f f c f f f c f c c c c 6
        f c f f f f f f c f c a 6 e f c f f f 5 5 d 5 5 d 5 d 5 5 f 8 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 8 a a 2 2 8 6 6 6 6 6 6 6 6 6 6 8 5 5 d d 5 5 d 5 5 5 5 5 5 5 5 d d 5 d 5 d d 5 d d 5 7 d 5 7 5 d 5 d 5 d d 5 d 1 1 1 1 1 1 1 1 1 6 b f 8 8 8 8 e e c d d d e b d d 3 d e b b b e e a d b 3 a c c a a c a f f a b c c c f f f f c f f c c f c f f f f c f 8 8
        f c f f f f f f f f c a b e f c f f f 7 d 5 5 5 d d d 5 d 8 6 6 6 6 6 6 6 6 8 6 8 6 6 8 6 6 6 6 6 6 6 6 8 a 2 2 2 a c 6 6 6 6 8 c c c 6 6 c 5 5 d d 5 5 5 5 d 5 5 d 5 d 5 d 5 d d 5 5 5 5 d d 5 d 7 5 d d 5 5 5 d 5 5 d 5 1 1 1 1 1 1 1 1 1 6 b c 8 8 8 8 c c b b 3 d d 3 3 b d 3 d d d b 3 b 9 3 3 b b 8 8 f b 9 d f c a b c e c c f f c f c c 8 8 8 8 f 8 f f 8 8 c c
        f f f f f f f f f c c 8 6 e e f f f f e 5 5 5 d 5 5 5 5 8 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 8 6 6 6 6 6 6 6 8 a 2 2 e 2 a 8 6 6 8 a 2 2 2 6 6 c 5 d 5 5 5 5 5 d 5 5 d 5 d 5 5 5 5 5 5 5 5 5 d 5 5 5 5 5 d 5 5 5 d 7 5 d d 5 d d 1 1 1 1 1 1 1 1 8 c 8 8 8 f f c c d b b d d d b d d d d d d d d b 3 b b b a 8 8 8 9 d d c c c e e e c f c f f f f c 8 8 f 8 8 8 8 8 8 f f f
        f f c f f f f f 8 f c 8 a e f c f f f e 5 d 5 5 5 d 5 d 6 6 6 6 6 6 6 6 6 8 6 8 6 6 6 6 6 8 6 6 6 6 6 6 8 a 2 2 2 a e 8 6 8 c 2 2 e 2 8 6 d 5 5 5 5 d 5 5 5 5 5 5 5 5 5 d 5 d 5 5 d 5 5 5 d d d 5 d 5 d 7 d 5 5 d 5 5 d 5 5 1 1 9 1 1 9 9 1 9 8 f 8 8 f f c e b 4 4 d 3 d 3 d 3 3 d d d d 3 3 b 9 9 a b 8 6 6 b b b 8 8 b e c b c f f c f c c 8 f 8 8 8 f 8 f 8 8 8 f f
        f c f f f f f f 8 f f 6 a e e c f f f e d 5 5 5 5 8 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 a b a 8 8 6 6 6 6 6 6 8 a a 2 2 e e 8 6 2 a 2 e 2 2 8 8 5 5 5 5 d 5 d 5 5 d 5 5 d 5 d 5 d 5 5 5 d 5 5 d 5 d 5 5 7 5 5 5 d 7 5 5 d 5 5 7 d 5 1 1 1 1 1 1 1 1 9 b c f c f e c e b 4 4 d d 4 d d 3 d d d d d a 6 6 8 8 6 8 b b a c a f f f 8 8 8 8 f c c f c f c f f 8 f 8 f 8 8 8 8 c f
        f f f f f f f f f f c a a e e f f f f e d 5 5 d 5 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 b a b a 8 6 6 6 6 6 6 8 a 2 e 2 e 2 8 6 2 e 2 2 e 2 8 8 5 5 5 5 5 5 5 5 d 5 5 d 5 d 5 5 5 5 d d 5 5 d 5 5 5 5 d 5 5 d d 5 5 5 d 5 d 5 d d 5 d 1 1 1 1 1 1 1 8 8 f 8 f f c c e e d d d 3 b d d d d d d d b 9 6 6 6 6 6 6 a a c c 9 f f f 8 8 8 8 c f f f f c 8 8 8 8 8 8 8 8 f 8 8 f f
        f f c f f f f c f c f 6 a e e f f f f f d 5 5 5 7 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 a a a a a a 8 6 6 6 6 6 6 c 2 2 c c a f c 2 e 2 e 2 2 6 8 d 5 d 5 5 d 5 5 5 5 5 5 5 5 5 d d 5 5 5 5 d 5 5 d 5 d 5 d 5 5 5 5 d 7 5 5 5 7 5 5 d d 1 1 1 1 1 1 6 8 c c f c c c e e 7 3 4 d 4 3 d d d d d d d 4 b 6 6 6 6 6 8 8 c c f 8 8 8 c 8 8 8 8 c c f f c 8 8 f f 8 f f 8 f f 8 f f f
        f c f f f f f f 8 f f a 6 e e c f f f f d 5 5 d 5 6 6 6 6 6 6 6 6 6 6 6 6 8 8 e a a a 2 2 a a b 8 6 6 6 6 8 c e c 8 c c c c e e 2 2 e 8 e d 5 d 5 5 5 d 5 5 d 5 5 5 5 d 5 5 5 5 d 5 d 5 5 5 5 d 5 d 5 5 5 d 5 5 5 5 5 d 5 d 5 5 1 1 1 9 9 9 6 f 8 c f c f f c 1 d 1 4 4 3 e b 4 4 d d d d d 8 1 1 6 6 6 6 8 f f f f c f f 8 8 8 8 8 b c f 8 c 8 8 8 8 8 8 f 8 f 8 f f f
        f f f f f f f f f c c 6 a e e f f f f f 5 5 d 5 5 8 6 6 6 6 6 6 6 6 6 6 6 8 8 b 2 a 2 a a a a 2 a 6 6 6 6 6 8 a f f c f e f f 2 2 e 8 8 d 5 d 5 5 5 d 5 5 d 5 d 5 d d 5 d 5 d 5 5 5 5 d 5 d d 5 5 5 5 d d 5 5 d 5 d 5 5 5 5 5 d d 6 6 8 6 8 6 8 8 c f f b d 1 d c 1 4 d d 3 4 4 d d d 4 3 1 f d d 6 6 6 6 8 f f f f f f f 8 8 8 8 8 c 8 c 8 8 8 8 8 8 8 8 8 8 8 f 8 f f
        f f c f f f f f c f c 8 c e e f f f f f d 5 d 5 5 c 6 6 6 6 6 6 6 6 6 6 6 8 c a a 2 a 2 2 2 2 a 2 8 6 6 6 6 6 a c f 8 f e c f e 2 c 8 8 d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 5 5 5 d 5 5 5 5 5 5 d 5 d 5 5 5 7 5 5 5 d 5 d 5 d 5 5 6 6 6 6 6 8 8 8 c f d d d 1 d c 1 4 b d d b 3 d d d d b d c b d 1 6 6 6 8 c f f c f f c 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 f 8 f f f f f f
        f f c f f f f f f f c 6 c e e f f f f f 5 5 5 5 d 5 d 8 6 6 6 6 6 6 6 6 6 c a 2 a 2 a 2 2 e a 2 2 2 a 6 6 6 6 6 6 8 8 f c f f 2 8 6 6 c 5 5 5 d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 5 d 5 d 5 5 d 5 d 5 5 5 d 5 5 5 5 5 d 5 d 5 5 d 9 8 6 6 6 1 1 1 1 1 1 1 1 1 f f a b 4 4 4 d d d 4 d d 1 b c f d 8 d 1 1 8 b e e e e e c 8 8 8 8 8 8 f f 8 c 8 8 8 8 8 8 f 8 f f 8 f f
        f c f f f f f f f c c c a e e c f f f f d 5 5 5 5 5 5 c 6 6 6 6 6 6 6 6 6 e e 2 2 e 2 2 a 2 2 2 a 2 a 8 6 6 6 6 6 6 6 6 8 f e 8 6 6 6 f 5 d 5 5 5 5 d 5 5 d 5 d 5 d 5 5 5 5 5 5 5 5 5 d 5 5 d 5 5 5 5 d 5 5 5 5 d 5 5 5 5 5 5 d d 7 6 8 6 9 1 1 1 1 1 1 d 1 d d d 1 d b 4 4 4 4 4 d f 1 1 8 c 8 8 c d 1 1 1 1 4 5 5 5 5 7 c 8 8 8 8 8 8 f 8 f 8 f 8 8 c f f c 8 f f f f
        f f f f f f f f f f c 8 c e e e f f f f d 5 5 5 5 5 d 5 6 6 6 6 6 6 6 6 6 e a 2 e 2 e a 2 2 e 2 2 e 2 2 a c c f 8 8 6 6 6 6 8 6 6 6 6 8 5 d 5 5 5 d 5 5 5 5 5 d d 5 7 5 d 7 7 5 e 5 d 5 5 d 5 5 d 5 d 5 d 5 d 5 5 5 5 d 5 5 d 5 5 b 6 6 1 1 1 1 1 1 1 1 8 c f 1 1 1 1 d b 4 4 5 e c c 1 b a f c f d d d 1 1 1 1 4 5 5 7 4 8 8 8 8 8 8 f f 8 8 8 8 8 f 8 f 8 f f f f f f
        f f f f f f f f f c c c a e e 7 f f f f d 5 5 5 5 5 5 5 d 8 6 6 6 6 6 6 6 e a 2 2 2 e e 2 2 2 2 2 a 2 e 2 a 2 2 2 e 8 8 8 a e 8 8 8 8 8 7 5 d 6 6 6 6 6 6 9 9 9 9 9 d d d d d 5 5 d 5 5 d 5 5 d 5 d 5 5 d 5 d 5 5 d d 5 5 5 5 5 d 6 8 1 1 1 1 1 1 1 1 1 6 6 8 9 d d a d 1 4 e c e 1 1 a 9 8 8 8 6 a 6 8 1 1 1 1 d 1 4 5 5 8 8 8 8 8 8 8 8 f 8 8 8 f 8 f f 8 f f f f f f
        f f c f f f f f f f c c 6 e e e f f f f 5 5 5 5 5 5 5 d 5 d 8 6 6 6 6 6 6 2 a 2 2 e 2 2 2 e 2 a 2 2 e 2 2 2 2 2 a 2 a e e 2 a 2 a e 2 6 b 5 5 7 4 7 e e c f f f f f f f f f f 7 d 5 5 d 5 d d 5 5 5 5 5 5 5 5 5 d 5 5 5 5 5 5 d d 8 9 1 1 1 1 d d 1 1 1 1 9 8 d 1 b b b d b e f d d 3 9 a 8 6 b 8 9 8 1 1 1 1 d 1 1 1 5 7 c 8 8 8 8 8 8 f f 8 f 8 8 f 8 f 8 f 8 f f f f
        f f f f f f f f c f c c a e e e f f f f 7 5 5 5 d 5 d 5 5 5 d 6 6 6 6 6 6 e 2 2 2 2 2 2 e 2 e 2 2 2 2 2 2 e e e 2 e 2 2 2 2 2 e e 2 e 6 b 5 c f f f f f f f f f f f c f f f f 9 5 5 d 5 5 5 5 5 d 5 d 5 5 5 7 d 5 5 5 d 5 5 5 5 d 8 1 1 1 1 1 a 6 1 1 1 1 b a 1 d 9 9 d 1 d c b 1 d c a 6 8 a 6 8 6 8 1 1 1 1 8 1 1 9 1 d c 8 8 8 8 8 8 8 8 c 8 8 f 8 f 8 f f f f f f f
        c f f f f f f f f f c c 6 4 e e f f f f 7 5 5 5 5 5 5 5 5 5 d 5 f 8 6 6 6 e 2 e 2 2 2 e 2 2 2 2 e 2 2 2 2 e 2 e 2 e e 2 2 2 e 2 2 2 e 6 c d 8 f f 8 8 8 8 8 8 6 8 8 c 8 8 f f 9 5 5 5 5 d 5 5 d 5 5 d 5 d 5 5 5 d 5 5 d 5 5 5 5 1 1 1 1 1 1 a 1 8 1 9 9 9 b a 8 1 1 b b 1 d c 1 1 1 a 8 8 8 6 a 9 8 9 1 1 1 1 1 d 1 6 1 1 f 8 8 8 8 8 8 8 f 8 f f f f f f 8 f f f f f f
        f f c f f f f f f c f c a e 7 e f f f f d 5 5 d 5 5 5 5 5 5 5 5 e f 8 6 6 e e 2 2 e 2 2 2 e 2 e 2 e 2 e 2 2 2 2 e 2 2 2 e e 2 2 e 2 e 6 c 5 c f f 8 8 c 8 a 8 c c c c 8 8 f f 9 5 d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 8 a 1 8 9 6 1 b 6 9 a 6 a c 1 9 9 d b b d 1 1 b 8 9 8 a 9 a 6 1 1 1 1 9 d d d a 9 1 c 8 8 8 8 8 8 8 f c f 8 8 f 8 8 f f f f f f f
        f f f f f f f f f f c c 6 d 4 e c f f f 4 5 5 5 5 5 5 5 5 d 5 5 d f f 8 6 e a 2 2 2 2 2 e 2 e 2 2 2 2 2 e 2 e 2 2 2 e 2 2 2 e 2 2 e 2 6 6 5 c c f 8 e c c f f f f c e 8 8 f c 9 5 5 5 5 5 5 5 d 5 5 d 5 d 5 d 5 5 5 5 5 5 5 5 5 1 1 1 1 1 8 1 6 a 6 a 9 9 9 a 8 6 c b b 9 d 1 1 1 a 9 9 f a 9 b 9 a 1 1 1 d d 9 1 9 9 9 d f 8 8 8 8 8 8 8 f f 8 f 8 8 f f 8 f f f f f f
        f f c f f f f f f f f c c 4 e e c f f f e 5 5 5 5 5 5 5 5 5 5 5 5 f f f 8 8 e 2 2 2 2 2 e 2 2 2 e 2 2 2 2 e 2 2 2 2 e 2 2 2 e 2 2 e 2 6 5 d c c f 8 e 8 f f c f f f e 8 8 f f 9 4 5 5 5 5 d 5 5 5 5 5 d 5 5 d 5 5 5 5 5 5 5 5 5 d e 1 b 1 d c a 8 a a 9 a 9 a 8 9 a 8 9 b 1 1 1 8 6 8 f a a b 9 a a 1 d 1 9 9 d 9 b 9 6 b c f 8 8 8 8 8 8 f f 8 f f f 8 f 8 f f f f f f
        f f f f f f f c f c f c 6 e e e f f f f e 5 5 5 5 5 5 5 5 5 5 5 5 c c f f 8 e e e 2 e 2 2 2 2 e 2 e 2 e 2 2 2 2 e 2 2 2 e 2 2 2 e 2 e 8 d d b f f 6 e f f c f f c f e 8 8 f f 9 7 5 5 5 5 5 d 5 5 5 5 5 d 5 5 5 5 d 5 5 5 5 5 5 1 1 1 1 1 d 3 6 8 a 6 6 9 6 a 6 a 6 b a 9 1 1 1 a 9 a 8 6 9 9 a 6 6 d d d b 8 d 9 b 9 8 6 c f 8 8 8 8 8 8 8 c 8 f f f f f 8 f f f f f f
        f f c f f f f f f f c c c b e e f f f f e 5 5 5 5 5 5 5 5 5 5 5 5 b f f 8 8 f e 2 2 2 e 2 e e 2 2 2 2 2 e 2 e 2 2 e 2 e 2 e 2 e 2 e e 8 5 5 b c f 8 c c f f f f f f c 8 8 f f 9 4 5 5 5 5 d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 5 5 d d 5 d 1 1 b 8 a a 6 a a 6 9 6 a 6 9 8 b 1 1 1 8 8 a 9 8 8 a 6 a 8 c c f 8 1 a 9 a 8 8 1 c f 8 8 8 8 8 8 8 8 f 8 f f 8 8 f f f f f f f
        f f c f f f f f f c f c c b e d c f f f e 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f 8 8 c 2 2 2 e e e e e 2 2 2 2 a e 2 2 2 e 2 a e e c e e e 8 f f f f 8 f 6 e 8 f c f c f f c f 8 f f 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e c f e e b 3 1 f 8 8 8 8 8 8 8 8 a 9 a 6 1 1 a b b 9 9 c c f c c 8 a b f d d 8 8 1 1 b 6 c f 8 8 8 8 8 8 f f 8 f f 8 8 f f 8 f f f f f
        f f f f f c c c f c f c a b 4 e c f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 8 8 8 8 f e 2 e 2 2 2 2 2 2 a e 2 2 2 2 2 e 2 e 2 2 8 8 8 2 c 8 8 f 8 8 f f 8 a f f f f f f c c c 8 8 f 9 7 5 5 5 d 5 5 5 d 5 d 5 5 5 d 5 5 5 5 5 5 5 5 5 1 e b b b e b a c f f c b 9 a c f 8 a 9 a 1 9 6 b 9 8 8 6 a 8 8 8 8 8 8 a 9 8 1 1 d 9 b 9 8 f f 8 8 8 8 8 f f 8 f 8 f f f 8 f f f f f f
        f f c f f f f f c f f c c e e e f f f f f 5 5 5 5 5 5 5 5 5 d d 5 5 f 8 8 f 8 8 c c c c c f f 8 8 8 8 e 2 e 2 2 2 e 2 c f 8 8 8 c 8 8 f f f f f c 8 e f c f f f f f c f 8 f f 9 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d e e e b b 3 b b 1 f c f f f f c c f f 9 b 6 8 6 b 9 a f f c f f f f c c c d 6 1 1 1 9 d a 9 b f f 8 8 8 8 8 f 8 f 8 f 8 8 8 f 8 f f f f f
        f f c f f f f c f f f c c e e e c f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 8 f f f 8 8 8 8 8 8 c f f f 8 8 2 2 2 e e f 6 8 8 f 8 f 8 8 f f c f c f f 8 c e e c c c e e c 8 8 f c d 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e b e b 4 e d b c f f f c f f f c f 9 b 9 8 9 b b b 8 c f c f f c c c f 1 1 1 1 d 9 9 9 6 9 f f 8 8 8 8 8 f 8 f 8 8 8 f f f 8 f f f f f
        f f f f f f f f f c f f c e e e f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 7 8 8 f c f f f f c f f f f c f 8 6 8 f 8 8 6 8 8 f f f 8 8 f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 f f d 5 5 d 5 d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 4 4 4 3 d d d 3 f c 8 c c 8 c 6 b b a b 9 8 9 b a 6 8 c c c c f c c f 8 d 1 1 d 9 d b 9 a 6 f f 8 8 8 8 f f f f 8 8 f 8 f 8 f f f f f f
        f f f f f f f f f f f c c e e e c f f f f 5 5 5 5 5 5 5 5 5 5 5 5 d d f c f f f 8 8 f 8 8 8 f c f 8 f f 6 6 6 8 8 f 8 f f f f 8 f f c f f f f c f 8 8 8 8 8 8 8 f 8 8 f f f f d d 5 5 5 5 d 5 5 d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e 4 4 b d d f 8 8 8 8 6 a b a a 6 9 9 a a b a a 8 9 b 9 d b b b b b 8 d 1 d 1 b 9 1 9 9 a 8 f 8 8 8 8 f f f 8 f f f f 8 f 8 f f f f f
        f f f f f f f f c f f c c e e e c f f f f 5 5 5 5 5 5 d 5 5 d d 5 d 5 f c 8 f f f 6 8 c f 8 c f 8 c f f f f 6 c f c f 5 d 5 5 5 5 5 5 5 d d f f f f f f c f f 8 8 8 8 8 8 f f d 9 6 6 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 e b e e c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d a 6 b 9 b 9 d 9 b b b 8 a 9 d b 9 d 6 9 9 a 9 f 8 8 8 8 8 f f f f 8 f 8 8 f 8 f f f f f
        f c f f f f f f f f f f c e e e f f f f f 5 5 5 5 5 5 5 5 5 5 d d 5 5 d f 8 8 f f 8 8 f 8 6 f 8 8 f f f f 8 8 f f f d 5 5 5 5 5 5 5 5 5 d 5 d c c 8 f f f f f 8 8 8 8 8 8 f f 5 d d d 5 5 5 5 d 5 d 5 5 5 5 5 5 5 5 5 5 5 5 e f f f f f f f f f c c f f c f c c c c c f c f c c 6 6 a b 9 b b b b b 8 8 b 9 d 9 d d 1 a b 9 9 f 8 8 8 8 8 8 8 f 8 f 8 8 f 8 f f f f f f
        f f f c f f f f f f f c c c e e c f f f f 5 5 5 5 d d 7 9 b 6 b d 5 5 d f 8 8 f f 8 6 f f 8 f f 8 f c f f f f e c c 5 5 5 5 5 d 5 5 d 5 5 5 5 5 d f f 8 f f c 8 a c f e c f f f c f f f 6 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d e f c b d d d b f c f f c c c 9 9 d 9 b c 8 8 c c 8 8 a 6 a b b 9 a b 8 8 8 8 a a b 9 9 1 1 9 6 6 f 8 8 8 8 8 8 f f f 8 f 8 8 f f f f f f f
        f c f f f f f f c f f c c e e e c c f f f 5 5 5 5 9 e f f f f f f f f f c f 8 8 c f 8 8 f f 8 f f 8 f f f c f 2 e 2 2 2 e 5 5 5 f f 2 2 2 2 e e d 5 d f f f f 8 8 f f e 8 f f f f f f f 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 4 e c e e b c c f c f f c c c 6 a b b b c b 2 f c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 d b 9 1 9 f f 8 8 8 8 8 8 f f 8 f 8 8 f 8 f f f f f
        f f f c f f f f c f f f c e e e f f c f f 5 5 5 d 6 7 f f f f f f c 8 f 8 f 8 8 f f f 8 8 c 8 8 f f f 2 f f c e 2 2 2 e 2 d b e c f e e 2 e 2 2 e 5 5 5 f c f 8 8 f f e 8 f f f c f f f b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d e e c e d 5 4 d c f f f c f c b b b b 6 f b 2 e c c 8 8 8 8 8 8 8 8 8 8 8 8 8 6 9 9 1 d d 9 9 a b f 8 8 8 8 8 8 8 f 8 f 8 f f 8 8 f f f f f
        f f f f f c f f f c f c c b 4 e e e f f c 5 5 5 5 6 b f c 8 6 8 8 8 8 8 8 f 8 f c f f 8 8 f 8 8 f f c 2 e e e 2 e 2 e 2 2 e f 2 f f 2 2 e 2 2 e e 5 5 d f f f 8 8 c f e 8 f f c f f f f 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d f e c e 5 4 4 4 f c f f c f c b a b b b c e f f c c 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 d d d 9 a d b 9 f f 8 8 8 8 8 8 f 8 8 f f 8 f f f f f f f
        f f f c f f f f f f f f c e e e f f f f f 5 5 5 5 b d f c e c f c f f f f 8 f 8 c 8 f 8 8 8 f 8 8 e e 2 2 e 2 2 2 2 2 e 2 e e 2 2 e 2 2 2 2 2 e 2 d 5 5 d f f 8 8 e f e c f f f f f f f d 5 d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d e f f f f f c f f c f f c f f c c f c f f c f f c c 8 8 8 8 8 8 8 8 8 8 8 8 8 d d 9 6 8 8 d 9 9 9 f f f 8 8 8 8 8 f f 8 f 8 f f 8 f 8 f f f
        c f f f f f f f c c f c c c 4 e f f f f f 5 5 5 5 b d f 8 e f f f f f f f 6 f f f 8 f 8 6 8 f 8 8 e 2 2 2 2 2 e 2 e 2 e 2 2 2 e 2 2 e 2 e e e 2 2 e 5 d 5 f f 8 8 c c c c f c f f c f f d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d f f f c e c c f c f c f c c c 8 c c f c c f c f c c 8 8 8 8 8 8 8 8 8 8 8 8 9 9 d d 9 9 8 a d b b f f f f 8 8 8 8 8 f f f 8 f 8 f 8 f 8 f f
        d f c f f f f c f f f f c c e e f f f f f 5 5 5 5 b d f 8 c f f f c f c e c 8 f f 8 f f 8 8 f f 8 e 2 e 2 e 2 2 2 2 2 e 2 e e 2 2 e 2 2 2 2 2 e e e 5 5 5 e c 8 8 e f e c f f f f f f f d 5 5 d 5 5 5 d 5 5 5 5 5 5 5 5 5 d e f f e e f f c f c f b f c f f c f c c f c f c f c 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 9 3 d 1 1 8 9 9 f f f 8 8 8 8 8 f f f 8 f 8 f 8 f 8 f f f
        d b f f f f f f f c f c c c e e f f f f f 5 5 5 5 9 d f 8 c c c f e f 8 8 8 8 f f f 8 f 8 8 8 f c e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 2 e 2 2 2 2 e 2 d 5 5 5 d c 8 8 f f e c f f c f c f f d 5 5 d 5 5 5 5 5 5 5 5 5 5 5 5 5 d e c f f 5 c e d d 1 d 3 1 d d d b c b c c f c c f c 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 8 d d d 9 6 f c f f 8 8 8 8 f f 8 f 8 f 8 8 f f 8 f f
        e f f c f f f c c f f c c c e e f f f f f 4 5 5 5 b d f 8 8 8 f f e f 8 f f 8 8 c f 8 f f 8 8 f f f e 2 2 2 2 e 2 2 2 e 2 c 2 2 2 e 2 2 e e 2 e 2 5 5 5 5 5 f 8 8 e f e c f c f c f f f d 5 d b d 5 5 5 5 5 5 5 5 5 5 5 5 d f f c e 5 e e f c f c c c c c c 1 d 4 f f c f c c c 8 f 8 f 8 8 8 8 8 8 6 6 9 6 6 6 9 9 9 9 d b c f f c 8 8 8 8 8 8 f f 8 f 8 f f f f f f 8
        f f f f f f f f f f c c a c e e f f f f f 7 5 5 5 d 5 f f 8 8 f f e 8 f f f f 8 f f f f f c 8 c f f c e 2 e 2 2 2 e 2 e 2 c e e 2 e 2 2 2 2 e 2 e 5 5 5 d 5 c 8 8 c c c c c f f f f c f d d d c c 5 d 5 5 5 5 5 5 d 5 5 5 d e c f f d c e c c c f f c c c c c d d d c f c f f c 8 8 8 8 8 8 f 8 8 8 8 8 8 6 9 6 6 9 3 d d a f f f 8 8 8 8 8 8 8 f f f 8 f 8 f f f f 8 f
        f f f c f f f f c c c a c c e e f e f f f e 5 5 5 d d c f 8 8 c f f 8 c f f f f 8 c f 8 c f 8 8 8 c e 5 a 2 2 2 2 e e e d 5 5 f 2 e 2 2 e 2 2 e d 5 d 5 5 5 c 8 8 e f f c c f c f c f f d d b f c 5 5 5 5 5 5 5 5 5 5 5 5 d e c e c e c f c f f f f c c c c c c c c c f 9 d c c 8 8 8 8 8 8 6 6 6 a 9 d d 1 9 9 b 9 9 d 9 c f c f 8 8 8 8 8 8 8 f 8 f 8 f 8 f f 8 f f f
        f c f f f f f c c c c c c c e e e f c f f e 5 d 5 d d f f 8 8 f c f 8 f f c f f f f f 8 f f 8 8 8 f e 5 4 e e e a e e 5 5 5 5 d e e 2 2 2 2 e d 5 d 5 5 5 d f 8 8 e f c c f f f c f f c d 5 9 c f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f c c f c c f c c f c f c f f c c c f b d c c 8 8 8 8 8 8 9 9 9 6 6 d d d d b 9 b b d d c f c c 8 8 8 8 8 8 8 f f f f 8 f f f f f f f
        f f f c f f c c c c c c c c e e c f f c f e 5 5 5 d d f c 8 8 f f f 8 f f f f f 8 f c 8 8 f f 8 8 f 5 5 5 d d 5 5 d 5 5 5 5 5 5 d e f f f e 5 5 5 e 7 5 5 d f 8 8 e f c e f c f f f c f d 5 6 f c 5 d 5 5 5 5 5 5 5 5 5 5 d f c e f c c 1 f f c f f c f c f 8 1 c f c c b e c b 8 8 8 8 8 6 6 6 6 9 6 a d d 1 d d 9 a 9 b c f c 8 8 8 8 8 8 8 f f f 8 f f 8 f f 8 f f 8
        f f f c f f f c c c c c c c e e e f c f f f 5 5 5 d d f f c 8 f f f 8 8 f f f c f 8 8 8 f 8 c f 8 f d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d 5 5 5 f c 8 8 e f f e c f f f c f c d 5 6 f c 5 d 5 5 5 5 5 d 5 5 5 5 5 e f c f e f f c c f c c f f f c f f c f c f c f c e 1 1 1 1 1 9 9 9 9 9 9 a a b 9 d d b b b 7 c f f f 8 8 8 8 8 8 8 f 8 f 8 f 8 f f f f 8 f
        f f f f f f f f c c c c c c e e e f e f f f 5 5 5 5 d f f f 8 f f c 8 f f f c f f 8 f 8 f 8 f f f 8 5 d d 5 5 5 5 5 5 5 5 5 d 5 5 5 5 5 5 5 5 5 d 5 5 5 d c f 8 f e e e a 8 f c c f f f d 5 6 c f d 5 5 5 5 5 5 5 5 5 5 5 5 f f c f c c c f f c f f c c c f c c f c f c f c f d 1 d d 1 1 d 9 d d 9 b b 9 6 a d 9 a b e e c f f f f f 8 8 8 8 8 f f f f 8 f 8 f f f f f
        f f c f f f f c c c c c c c c e e f f f f f 5 d 5 d d f c f f e e e f f f f f f f 8 6 c 8 f f c f 8 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 5 5 5 b f 5 5 5 e f f f 8 8 8 8 8 f f f f c f f d d 6 c c 5 d 5 5 d 5 5 5 5 5 5 d 5 c f f c f f f c c f c c f c f c c c f c c c f c b 1 d 3 b d d 1 b d d d d 9 b 9 a 9 d b e e 7 c 8 8 8 8 8 8 8 8 8 8 f f f f f f f 8 f f f 8
        f f f f f f f f c c c c c c e e e e f f f f 5 5 5 5 d f f f 8 8 8 8 8 f f f f f c f f f 8 c 6 f c f 5 d d 5 5 5 5 d c f f 5 5 5 5 5 5 5 5 5 f d 5 5 5 5 f c f c f c c f f c f c c c c f 5 d 6 c c 5 d 5 5 5 5 5 d 5 5 d 5 5 e f f f c f c f f c f f c f f c f f f c c c c f e e 1 d d d d d b b 9 d d b d b d 9 b c e e c f 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f 8 f 8 8
        f f c f f f f c c c c c c c e e e f f f f f d 5 5 5 b 7 d d d d c c f c f d d f 8 f f 8 f 8 8 c f f 4 e 5 5 d 5 d 5 5 5 5 f c e d d 5 5 e f d 5 d 5 5 d c f f f f f f f c c f f d d 9 d d 5 6 c c d 5 5 5 d 5 5 5 5 5 5 5 5 c f c f c c f c c f c c f c c c c c c f c c f f c d d d 1 d d d d b d d d b 9 d d b c f f f f c 8 f 8 8 8 8 8 8 8 8 8 f f f 8 f 8 8 8 f 8 8
        f f f f f f f f c c c c c a c e c f e f f f 5 5 5 d 7 d b d d 9 f f f f f 5 5 5 f f f 8 f 8 f 8 f f e d 5 5 5 5 5 5 5 5 5 5 5 5 4 e e 7 5 d 5 5 5 5 5 e f f c 5 7 f f c f f c c 9 5 5 d 5 5 b c f d 5 5 5 5 5 5 d 5 5 d 5 5 f f f f f f c f f c f f f f f f f f c c f c c 1 1 d d 4 d 1 d 1 3 9 b d 9 b d b d f 8 6 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 8 f 8 f 8
        f f f f f f f f c c c c c c e e e f c f f f 5 5 5 5 5 5 5 5 5 6 e f f f f 5 5 5 d f c f 6 f f 8 8 f e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d f f d 5 5 5 5 d c f f f f c d 5 d 9 b d d c e d 5 5 5 5 5 d 5 d d 5 5 5 e f f f c c f c c f c f f f c f c f c c f c f e e b 1 d 1 e 3 d 3 9 b d d b d b 9 8 8 8 8 f f 8 8 6 6 6 6 8 c c 8 8 8 f f f f f 8 f f f 8 8
        f f f f f f f c c c c c c b c 5 e e f f f f 5 5 5 5 5 5 5 5 d 9 e f c f c d 5 5 5 e f f 8 8 8 f f f 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e f f 5 5 5 5 5 d f f c c f c d 7 d 5 5 7 e e c d 5 5 5 d 5 5 5 5 5 5 d 5 e f c f f f c f f c f f c f f c f c f c c c c f d 1 d e e d d 1 b d 3 9 b b b 9 b 9 b 8 8 8 8 8 8 6 6 6 6 6 8 8 6 8 8 8 f 8 f f f f 8 8 8 f
        f f f f f f f f c c c c a a c e e f f f f f 5 5 5 5 5 5 5 5 5 6 e f f f f d 5 5 5 5 f f f 8 f 8 c f 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f d 5 5 5 5 5 e c f f f f f 9 d b f f c 8 c e 1 5 d 5 5 d 5 d 5 5 d 5 5 e f f f c c f c c f c c f c c c c f c c c c c c e 3 c d d 1 1 f b d b b b b d d b a b a 8 8 8 6 6 6 6 6 6 6 6 6 6 8 8 f f f 8 f 8 8 8 8 8 8
        f f f f f f f f c c c c c a e 7 e f c f f f 5 5 5 5 5 5 5 5 5 6 4 f f f c e 5 5 5 5 5 f f f f f 8 c d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d f 5 5 5 5 5 5 5 d f f f f c f f 9 d 5 d d d d b e 1 d d 5 d 5 d 5 5 5 d d 5 e c f f f f f c f c c f c c c c f f c c c f c c f c b b 3 b f b d d d d d d d b 9 b 6 b b 9 6 6 6 6 6 6 6 8 6 6 6 8 8 f f f f f f f 8 8 6 8
        f f f f f f f f c c c c a b c 4 f c f f f f 5 5 5 5 5 5 5 5 5 6 5 f f f f f d 5 5 5 5 f c f 8 c 8 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d f e 5 5 5 5 5 5 5 e f f c f f f c 9 5 5 5 5 5 1 7 e d 5 5 d 5 5 5 5 d 5 d 5 5 e f c f c 8 c c c c c c c c f c c c c c c c c f c c d d b d d d d d d d d d d b b b 3 9 c 8 a 9 6 8 8 8 8 6 8 8 8 8 c f f f f f f f f 8 8 f
        f f f f f f f f c c c c c a c 4 e f f f f f 5 5 5 5 5 5 5 5 5 6 d f f c f f d 5 5 5 5 c c f f f 8 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f d 5 5 5 5 5 5 5 d f c f f f c f f 9 5 5 d 5 d d b e 1 d 5 5 d d d 5 5 d 5 d 5 e c c c c b 8 c f f c c c c c c f b c e b b b e b e d b d b d b d d d d d d b 9 d b 9 b 8 8 8 8 8 8 a a 9 8 8 8 6 6 8 f f f f f f f 8 f f 8
        f f f f f f c c c c c c c b b d c c c f f f 5 5 5 5 9 d c c f f f c c f f f f 5 5 5 5 5 e f f 8 8 e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d b e 5 5 5 5 5 5 5 5 5 c c f f f f c f f e c c c c d d 5 e 1 5 d d 5 d d 5 5 5 5 d d b 8 8 8 f 1 c c c c c c c c f c c b c b c c c c b b b d b b b d b d d d d d d d d b d d d 8 f 8 f f a 6 6 8 8 8 c 8 8 f f f f f f 8 f 8 8 8
        f f f f f f f c c c c c b b b d c c f f f f 5 5 5 5 d d c f f f c f f f c c f d 5 5 5 5 5 f f c c 5 5 5 5 5 5 5 5 5 d 5 5 5 5 5 5 d 5 f 5 5 5 5 5 5 5 5 5 5 d f f c f c f f f c f e f e e d d d b d d 5 5 d 5 5 5 d 5 d 5 5 d 8 8 8 8 c c c 6 c c c c f c c f e c e e c e b b b b b d d d d d d d d d d b d 9 b d d 9 f f f f 8 8 6 9 8 8 f f c 8 f f f f f f f f 8 8 8
        f f f f f f c f c c c c b b d 4 c f c c f f 5 5 5 5 d 5 f f c c f f f c f f f e 5 5 5 5 5 c c f f 5 5 d 5 5 5 e f f 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 b f c f f f f f c f f c f c f c d d d b d d 5 5 d 5 5 d 5 d 5 d d d c c c c 8 8 c c c c c c a c c c c c c c b b b b e b b b b d d b d d d d b d b a d d d b 6 6 8 8 f c c 8 6 6 6 8 c 8 c 8 c f 8 f f 8 f 8 8
        f f f f f f c f c c c c c d d b c c c f f c 5 5 5 5 d 5 f f c c b f c f f c f f 5 5 5 5 5 d f f f 5 5 5 5 c c c f c f 5 5 d 5 e d 5 5 5 5 5 5 5 5 5 5 d f c f f f c f c f f f f f f c c c d 5 d d 5 5 d 5 d 5 5 5 5 5 d 5 5 d c c c c c c c c 8 c c c c c c c c c c c c c e b c b b b b b b b d d b d b 8 b d b b b a 6 6 8 8 8 8 8 8 f f f f c f c c 8 8 8 8 8 8 8 8 8
        f f f f f c f f c c c c c 1 1 1 c c c f c f 5 5 5 5 d d b d 6 9 9 f f f f f f f d 5 5 5 5 5 f c c 5 5 5 e 8 8 c f f e 5 5 5 5 d 5 5 5 5 5 5 5 5 5 5 7 f f f f f c f c f c f f c f c c e c d 5 5 5 5 5 5 d 5 d 5 d d d 5 d 5 5 f c c c c c c c c c c c c c c c b c c c c c c c b b b b b b b c d b a 8 a d b b b a b 8 f 8 8 f f f 8 f f c 8 8 f f f f f f 8 6 8 8 8 8 8
        f f f f c c c b c c c c c d 1 d c c c f f f 5 5 5 5 5 5 5 5 d d d f f c f f c f e 5 5 5 5 5 f c f 5 5 5 8 f 8 f f c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e f c 8 c f f f f f f c c f c c c f f e d 5 5 5 5 d 5 5 5 d d 5 5 5 d 5 5 d c f c c c c c c c c 8 c c c c b b b c e c c b c b d b b d b d d b b a b d b b b 6 a 6 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 f f f f f 8 8 8 8 6 8
        f f f f f e e 3 c c c c c 3 3 3 1 b c c f c 5 5 5 5 5 5 5 5 5 d 6 f c f f f f f f e d 5 5 5 d f d 5 5 f 6 8 8 c f f 5 5 5 5 5 5 5 5 5 5 5 5 e f c f f c 8 8 8 f f c f f c c c c c f c c e d d 5 5 d 5 5 5 d 5 d 5 d d 5 5 5 d c 8 c c c c c c c c 8 c c a 6 c c c b c c c b c c c 6 c b b d d d b b b b c 6 a 8 8 9 8 8 8 8 8 8 c 8 a 8 a a 8 8 8 8 f 8 f 8 f f f 8 8 8
        f f f f c e e e c c c c b e b e e e d b d d 5 5 5 5 5 5 5 5 5 5 9 f f f c f c f c f e 5 5 5 5 f 5 5 5 c 8 c 8 c f d 5 5 5 5 5 5 5 5 5 5 5 f c f f f c f f 8 8 f f c c 8 f f 8 f f c f e c 7 5 5 5 5 5 d d 5 5 5 d 5 5 5 5 5 d c c c c c c c c c 6 c c a c b b b c b b e c b b b b b b b b d b b b b c d b d d d b a 8 8 8 f f f f c 8 8 8 c e 3 a 8 8 8 8 f f f 8 f f 8
        f f f f f c f c e d 1 d d b e d d e d d d 1 5 5 5 5 5 5 5 5 5 5 6 f 8 c e e e c f f f 5 5 5 5 4 5 5 f c c 8 f 8 f b 5 5 5 5 5 5 5 d 4 f f f 8 f f f f f f 8 8 8 f f 8 f c c 8 8 f c c f e d d 5 d 5 d 5 5 5 d d 5 5 5 d 5 5 d c c 8 c c c c c c c b c c a c b c c c c b c f c b b b b d d b b b b d b 8 b a 8 b 6 a 8 8 8 8 f f f f f 8 f 8 8 8 8 8 8 8 f 8 8 8 f f 8 f
        f f f f f c f c c d e c d b c f c c d 1 1 1 5 5 5 5 5 5 d d 5 d b f 8 c f f e 8 f f c e 5 5 5 5 5 e f c f f f c 8 c f f f f f c f f f 6 8 8 f 8 8 f f f f f f 6 8 8 f 8 8 8 f c 8 c c f c d 5 d 5 d 5 5 5 d 5 5 5 5 d 5 5 5 d c c c 6 6 c a c a 6 8 c a c b a b c c c c b b c c b b d b 6 c b b 6 8 a 6 9 a 9 9 a 9 6 8 8 8 8 8 8 8 f 8 8 8 8 8 8 a a 3 a 3 2 2 e c 8 8
        f f f f c f f f c d e f c 8 c f f f f f f c 4 5 5 5 5 5 5 5 5 d b c 8 c e c e 8 f c f f e d 5 5 5 c f f f c f c f c c f c 8 8 c f c f f 8 8 f c f f f c f c f f 8 8 c f f c 8 f 8 c c e e d d 5 5 5 5 d d 5 5 5 d 5 5 5 d 5 d 6 6 c c 8 a a a b c b a c b c 6 c b c c b c c b c c b b c c b c c c a b b a 6 a a a 6 9 8 a 8 c 8 c 8 8 8 a 8 8 8 8 8 8 8 8 8 8 8 a 3 d 3
        f f f f f f f f f b d f f f f c f f c c f f 5 5 5 5 5 d b b 6 6 6 f 8 c f f e 8 f c f c f 5 5 5 5 f f c f f f c c f f f f 8 8 f 8 f f f c 8 f f f f f f c f f f c 8 f 8 c 8 f c c 8 8 c c d d 5 5 5 5 5 5 5 d d 5 5 5 d 5 5 d c c c a b c 8 8 a 6 6 a c a b c c c c c c c c c b c c b b d c c b b b b b 9 d b 9 9 a a 8 8 c a c 8 a a a a a a a a 8 8 8 8 c f 8 8 8 f c
        f f f f f c f f f d c f c f f c c c c c f c d 5 5 5 5 b f c f f f f 8 c e c e 6 c f f c f f f c f f f c f f f c f f f 8 f 8 f 8 f 8 8 f f c 8 8 8 f f c f f 8 5 d 5 d 8 8 c 8 c 9 d d d d 5 d 5 5 5 5 5 5 d 5 5 5 5 d 5 d d 5 c c c c c c c a b c c c c a 8 c c c c b c c c b c c b b b c c c a 6 a b b b b a 9 b 9 9 8 c 8 c c c c 8 a a a 3 3 3 a a a a 8 8 8 8 8 8 8
        f f f f f c f f f d f c f f c f f c f f f f 5 5 5 5 5 6 f f c f c f 8 c e c e 8 f c f f f c c f f f c f f c c f c c f c 8 6 8 f 8 f c f c f f 8 8 c c 8 f c f 6 7 d d d f 8 8 c d 5 5 5 5 4 5 5 5 d 5 5 5 5 5 5 d 5 5 d 5 d 5 c c c c c c f c c c c b c c c c c c c b b f b c b c c c c b b b b b b 6 a b 9 b a 9 a a 8 8 c 6 b c c c 8 a a a a a a 8 a a a 8 8 8 8 c c
        f f f f c f f f f c c f c c f c f f f f f f d 5 5 5 5 6 f c f c f c 8 c e f e c f f c c c f 8 8 8 c c f c f f e e e f f 8 f 8 8 c 8 f 8 8 f c f 8 8 f f 8 c f 8 c 5 5 5 5 8 c 8 c 7 d 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 5 5 5 5 5 c 8 c c c c c c c c c c c c c c c c c c c c f c b b b b b b b b b b a b b a b a 6 a b 6 6 8 c c c c c c c c 8 c c 8 c 8 9 8 8 8 c f c 8 8
        f f f f c f f f f d c f c f f f f f f f f f 4 5 4 4 5 6 f c f 8 8 8 c c e f e c 8 6 8 c c c c c c f 8 c f f d 5 d 5 d c f 8 f c c f c c 8 8 c f f 8 8 8 f 8 8 8 f 8 5 d 5 d c 8 f 8 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 5 d c c c c a 8 c c c c a b 8 c f c c c c c c c f c c c c b b b b b a b a 6 b a 9 a b a b 9 6 8 b d c c c c 9 b 8 8 c 8 6 6 a a 6 8 8 f a a b
        f f f f f f f f f e c f f f f f f f f e e e e 5 5 5 5 6 c f c c c c c e e f c e e c e c f f f c f c 8 f f c d 5 5 5 5 d f 8 8 f 8 c f f f 8 8 f f f f 8 f f f f 8 8 c 5 5 5 5 b 8 8 c 6 5 5 5 5 5 5 5 5 5 5 d d 5 d d 5 5 d 5 8 c f c c c c c 8 a c 8 c c c c e e c b d b c c c c b c c c c b b b b b a b b b b 9 b a 8 8 1 1 d c c c c c f b b b a a 9 8 c c f c c 8 8
    `)
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(98, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(98, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(98, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
}
function Initialize_Pacman() {
    Pacman = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 f f f f f f f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    Pacman.setPosition(185, 263)
    Pacman.setVelocity(50, 0)
    Pacman.z = 2
    if (debug == 1) {
        scene.cameraFollowSprite(Pacman)
    }
    Right_Pac = animation.createAnimation(ActionKind.goingright, 100)
    animation.attachAnimation(Pacman, Right_Pac)
    Right_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Right_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 f f f f f f f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Right_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 f f . . .
        . . . 5 5 5 5 5 5 5 f f f f . .
        . . . 5 5 5 5 5 5 f f f f f . .
        . . 5 5 5 5 5 5 f f f f f f f .
        . . 5 5 5 5 5 f f f f f f f f .
        . . 5 5 5 5 f f f f f f f f f .
        . . 5 5 5 5 5 f f f f f f f f .
        . . 5 5 5 5 5 5 f f f f f f f .
        . . . 5 5 5 5 5 5 f f f f f . .
        . . . 5 5 5 5 5 5 5 f f f f . .
        . . . . 5 5 5 5 5 5 5 f f . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    animation.setAction(Pacman, ActionKind.goingright)
    Left_Pac = animation.createAnimation(ActionKind.goingleft, 100)
    animation.attachAnimation(Pacman, Left_Pac)
    Left_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Left_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . f f f 5 5 5 5 5 5 5 5 5 5 .
        . . f f f f f f 5 5 5 5 5 5 5 .
        . . f f f f f f f f f 5 5 5 5 .
        . . f f f f f f 5 5 5 5 5 5 5 .
        . . f f f 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Left_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . f f 5 5 5 5 5 5 5 . . .
        . . . f f f f 5 5 5 5 5 5 5 . .
        . . . f f f f f 5 5 5 5 5 5 . .
        . . f f f f f f f 5 5 5 5 5 5 .
        . . f f f f f f f f 5 5 5 5 5 .
        . . f f f f f f f f f 5 5 5 5 .
        . . f f f f f f f f 5 5 5 5 5 .
        . . f f f f f f f 5 5 5 5 5 5 .
        . . . f f f f f 5 5 5 5 5 5 . .
        . . . f f f f 5 5 5 5 5 5 5 . .
        . . . . f f 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Up_Pac = animation.createAnimation(ActionKind.goingup, 100)
    animation.attachAnimation(Pacman, Up_Pac)
    Up_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Up_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f . . . . .
        . . . . 5 5 f f f f f 5 5 . . .
        . . . 5 5 5 f f f f f 5 5 5 . .
        . . . 5 5 5 5 f f f 5 5 5 5 . .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Up_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f . . . . .
        . . . . f f f f f f f f f . . .
        . . . f f f f f f f f f f f . .
        . . . f f f f f f f f f f f . .
        . . 5 5 f f f f f f f f f 5 5 .
        . . 5 5 5 f f f f f f f 5 5 5 .
        . . 5 5 5 5 f f f f f 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Down_Pac = animation.createAnimation(ActionKind.goingdown, 100)
    animation.attachAnimation(Pacman, Down_Pac)
    Down_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Down_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . . 5 5 5 5 f f f 5 5 5 5 5 .
        . . . 5 5 5 f f f f f 5 5 5 . .
        . . . . 5 5 f f f f f 5 5 . . .
        . . . . . . f f f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Down_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 f f f f f 5 5 5 5 .
        . . 5 5 5 f f f f f f f 5 5 5 .
        . . 5 5 f f f f f f f f f 5 5 .
        . . . f f f f f f f f f f f . .
        . . . f f f f f f f f f f f . .
        . . . . f f f f f f f f f . . .
        . . . . . . f f f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama = animation.createAnimation(ActionKind.Death, 100)
    animation.attachAnimation(Pacman, Death_Drama)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 5 5 . . . . . . . . . 5 5 .
        . . 5 5 5 . . . . . . . 5 5 5 .
        . . 5 5 5 5 . . . . . 5 5 5 5 .
        . . 5 5 5 5 5 . . . 5 5 5 5 5 .
        . . 5 5 5 5 5 5 . 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 5 . . . . . . . . . . . 5 .
        . 5 5 5 5 . . . . . . . 5 5 5 5
        . 5 5 5 5 5 . . . . . 5 5 5 5 5
        . 5 5 5 5 5 5 5 . 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . . 5 5 5 . 5 5 5 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 5 5 5 . . . . . . . . . 5 5 5
        . 5 5 5 5 5 5 . . . 5 5 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . . 5 5 5 . 5 5 5 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 5 5 5 5 . . . . . . . 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . . 5 5 5 5 . 5 5 5 5 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . . 5 5 5 5 . 5 5 5 5 . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 . 5 5 5 5 5 5 .
        . . . . 5 5 5 . . . 5 5 5 . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 . 5 5 5 5 5 5 .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . 5 5 5 . 5 5 5 . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . 5 . 5 . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 5 . . . 5 . . . . .
        . . . . . . . 5 . 5 . . . . . .
        . . . 5 . . . . . . . . . 5 . .
        . . . . 5 . . . . . . . 5 . . .
        . . . . . . . . . . . . . . 5 .
        . . . . . . . . . . . . . 5 . .
        . . 5 5 . . . . . . . . . . . .
        . . . . . . . . . . . . . 5 5 .
        . . . . . . . . . . . . . . . .
        . . . . 5 . . . . . . . . . . .
        . . . 5 . . . . . . . 5 . . . .
        . . . . . . . 5 . 5 . . 5 . . .
        . . . . . . 5 . . . 5 . . . . .
        . . . . . . . . . . . . . . . .
    `)
}
function Initialize_Blinky() {
    Is_Fight_Timer_Running = 0
    Is_Eyes = 0
    Blinky = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `, SpriteKind.Player)
    Blinky.setPosition(182, 135)
    controller.moveSprite(Blinky, 30, 30)
    Blinky.z = 3
    Idle_Blinky = animation.createAnimation(ActionKind.Idle, 800)
    if (debug == 0) {
        scene.cameraFollowSprite(Blinky)
    }
    animation.attachAnimation(Blinky, Idle_Blinky)
    Idle_Blinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    Idle_Blinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 8 8 1 2 2 1 8 8 1 . .
        . . 2 2 1 8 8 1 2 2 1 8 8 1 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    animation.setAction(Blinky, ActionKind.Idle)
    UpBlinky = animation.createAnimation(ActionKind.goingup, 800)
    animation.attachAnimation(Blinky, UpBlinky)
    UpBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 8 8 2 2 2 2 8 8 . . . .
        . . . 1 8 8 1 2 2 1 8 8 1 . . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    UpBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 8 8 2 2 2 2 8 8 . . . .
        . . . 1 8 8 1 2 2 1 8 8 1 . . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    DownBlinky = animation.createAnimation(ActionKind.goingdown, 800)
    animation.attachAnimation(Blinky, DownBlinky)
    DownBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . 2 2 1 8 8 1 2 2 1 8 8 1 2 2 .
        . 2 2 2 8 8 2 2 2 2 8 8 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    DownBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . 2 2 1 8 8 1 2 2 1 8 8 1 2 2 .
        . 2 2 2 8 8 2 2 2 2 8 8 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    RightBlinky = animation.createAnimation(ActionKind.goingright, 800)
    animation.attachAnimation(Blinky, RightBlinky)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    LeftBlinky = animation.createAnimation(ActionKind.goingleft, 800)
    animation.attachAnimation(Blinky, LeftBlinky)
    LeftBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 1 1 2 2 2 2 1 1 2 2 2 . .
        . . 1 1 1 1 2 2 1 1 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    LeftBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 1 1 2 2 2 2 1 1 2 2 2 . .
        . . 1 1 1 1 2 2 1 1 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    Blue_Ghost = animation.createAnimation(ActionKind.Running_Scared, 800)
    animation.attachAnimation(Blinky, Blue_Ghost)
    Blue_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 . 8 8 8 . . 8 8 8 . 8 8 .
        . 8 . . . 8 8 . . 8 8 . . . 8 .
    `)
    Blue_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 .
        . . 8 8 . . . 8 8 . . . 8 8 . .
    `)
    Blinking_Ghost = animation.createAnimation(ActionKind.Blinking, 400)
    animation.attachAnimation(Blinky, Blinking_Ghost)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 . 8 8 8 . . 8 8 8 . 8 8 .
        . 8 . . . 8 8 . . 8 8 . . . 8 .
    `)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 1 1 1 1 1 1 . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 3 3 1 1 3 3 1 1 3 3 1 1 .
        . 1 3 1 1 3 3 1 1 3 3 1 1 3 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 . 1 1 1 . . 1 1 1 . 1 1 .
        . 1 . . . 1 1 . . 1 1 . . . 1 .
    `)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 .
        . . 8 8 . . . 8 8 . . . 8 8 . .
    `)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 1 1 1 1 1 1 . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 3 3 1 1 3 3 1 1 3 3 1 1 .
        . 1 3 1 1 3 3 1 1 3 3 1 1 3 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 . 1 1 1 1 . 1 1 1 1 .
        . . 1 1 . . . 1 1 . . . 1 1 . .
    `)
}
function Spawn_Eyes() {
    Eyes = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Spirit)
    Eyes.x = Blinky.x
    Eyes.y = Blinky.y
    Eyes.z = 3
    Blinky.destroy()
    controller.moveSprite(Eyes, 100, 100)
    if (debug == 0) {
        scene.cameraFollowSprite(Eyes)
    }
    Idle_Blinky = animation.createAnimation(ActionKind.Idle, 800)
    animation.attachAnimation(Eyes, Idle_Blinky)
    Idle_Blinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    animation.setAction(Eyes, ActionKind.Idle)
    UpBlinky = animation.createAnimation(ActionKind.goingup, 800)
    animation.attachAnimation(Eyes, UpBlinky)
    UpBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 8 8 . . . . 8 8 . . . .
        . . . 1 8 8 1 . . 1 8 8 1 . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . . 1 1 . . . . 1 1 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    DownBlinky = animation.createAnimation(ActionKind.goingdown, 800)
    animation.attachAnimation(Eyes, DownBlinky)
    DownBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 1 1 . . . . 1 1 . . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . 1 8 8 1 . . 1 8 8 1 . . .
        . . . . 8 8 . . . . 8 8 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    RightBlinky = animation.createAnimation(ActionKind.goingright, 800)
    animation.attachAnimation(Eyes, RightBlinky)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    LeftBlinky = animation.createAnimation(ActionKind.goingleft, 800)
    animation.attachAnimation(Eyes, LeftBlinky)
    LeftBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 1 1 . . . . 1 1 . . . . .
        . . 1 1 1 1 . . 1 1 1 1 . . . .
        . . 8 8 1 1 . . 8 8 1 1 . . . .
        . . 8 8 1 1 . . 8 8 1 1 . . . .
        . . . 1 1 . . . . 1 1 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
}
function Initialize_Array_of_Walls() {
    Rows_list_1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    Rows_list_2 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_3 = [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_4 = [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_5 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_6 = [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_7 = [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1]
    Rows_list_8 = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_9 = [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0]
    Rows_list_10 = [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_11 = [0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 0, 0, 0, 0, 0]
    Rows_list_12 = [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_13 = [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0]
    Rows_list_14 = [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_15 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_16 = [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_17 = [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1]
    Rows_list_18 = [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1]
    Rows_list_19 = [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1]
    Rows_list_20 = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
    Rows_list_21 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_22 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    list = [Rows_list_1, Rows_list_2, Rows_list_3, Rows_list_4, Rows_list_5, Rows_list_6, Rows_list_7, Rows_list_8, Rows_list_9, Rows_list_10, Rows_list_11, Rows_list_12, Rows_list_13, Rows_list_14, Rows_list_15, Rows_list_16, Rows_list_17, Rows_list_18, Rows_list_19, Rows_list_20, Rows_list_21, Rows_list_22]
}
function AnimateBlinky() {
    if (Is_Eyes == 0) {
        if (Is_Fight_Timer_Running == 1) {
            if (Fight_Start_Time + Fight_End_Time - Time < 5) {
                animation.setAction(Blinky, ActionKind.Blinking)
            } else {
                animation.setAction(Blinky, ActionKind.Running_Scared)
            }
        } else {
            if (Blinky.vx > 29) {
                animation.setAction(Blinky, ActionKind.goingright)
            } else if (Blinky.vx < -29) {
                animation.setAction(Blinky, ActionKind.goingleft)
            } else if (Blinky.vy > 29) {
                animation.setAction(Blinky, ActionKind.goingdown)
            } else if (Blinky.vy < -29) {
                animation.setAction(Blinky, ActionKind.goingup)
            } else {
                animation.setAction(Blinky, ActionKind.Idle)
            }
        }
    } else {
        if (Eyes.vx > 29) {
            animation.setAction(Eyes, ActionKind.goingright)
        } else if (Eyes.vx < -29) {
            animation.setAction(Eyes, ActionKind.goingleft)
        } else if (Eyes.vy > 29) {
            animation.setAction(Eyes, ActionKind.goingdown)
        } else if (Eyes.vy < -29) {
            animation.setAction(Eyes, ActionKind.goingup)
        } else {
            animation.setAction(Eyes, ActionKind.Idle)
        }
    }
}
function AI() {
    WasChoiceMade = 0
    Old_vert_velocity = Pacman.vy
    Old_horiz_velocity = Pacman.vx
    Above = list[TileY - 1][TileX]
    Below = list[TileY + 1][TileX]
    Left = list[TileY][TileX - 1]
    Right = list[TileY][TileX + 1]
    if (Pacman.isHittingTile(CollisionDirection.Right)) {
        if (Above != 1 && Below == 1) {
            Pacman.setVelocity(0, -50)
        } else if (Above == 1 && Below != 1) {
            Pacman.setVelocity(0, 50)
        } else {
            V_Choice()
        }
    }
    if (Pacman.isHittingTile(CollisionDirection.Top) && WasChoiceMade == 0) {
        if (Left != 1 && Right == 1) {
            Pacman.setVelocity(-50, 0)
        } else if (Left == 1 && Right != 1) {
            Pacman.setVelocity(50, 0)
        } else {
            H_Choice()
        }
    }
    if (Pacman.isHittingTile(CollisionDirection.Left) && WasChoiceMade == 0) {
        if (Above != 1 && Below == 1) {
            Pacman.setVelocity(0, -50)
        } else if (Above == 1 && Below != 1) {
            Pacman.setVelocity(0, 50)
        } else {
            V_Choice()
        }
    }
    if (Pacman.isHittingTile(CollisionDirection.Bottom) && WasChoiceMade == 0) {
        if (Left != 1 && Right == 1) {
            Pacman.setVelocity(-50, 0)
        } else if (Left == 1 && Right != 1) {
            Pacman.setVelocity(50, 0)
        } else {
            H_Choice()
        }
    }
    if (Above != 1 && Below != 1 && (Left != 1 && Right != 1) && WasChoiceMade == 0) {
        Four_Way_Choice()
    }
    if ((Pacman.vx == 50 || Pacman.vx == -50) && (Above != 1 && Below == 1 && Left != 1 && Right != 1) && WasChoiceMade == 0) {
        if (Pacman.left % 16 == 0) {
            if (Old_vert_velocity != 50) {
                Up_Choice()
            }
        }
    }
    if ((Pacman.vx == 50 || Pacman.vx == -50) && (Above == 1 && Below != 1 && Left != 1 && Right != 1) && WasChoiceMade == 0) {
        if (Pacman.left % 16 == 0) {
            if (Old_vert_velocity != -50) {
                Down_Choice()
            }
        }
    }
    if ((Pacman.vy == 50 || Pacman.vy == -50) && (Above != 1 && Below != 1 && Left != 1 && Right == 1) && WasChoiceMade == 0) {
        if (Pacman.top % 16 == 0) {
            if (Old_horiz_velocity != 50) {
                Left_Choice()
            }
        }
    }
    if ((Pacman.vy == 50 || Pacman.vy == -50) && (Above != 1 && Below != 1 && Left == 1 && Right != 1) && WasChoiceMade == 0) {
        if (Pacman.top % 16 == 0) {
            if (Old_horiz_velocity != -50) {
                Right_Choice()
            }
        }
    }
    if (WasChoiceMade == 1) {
        OldTileX = TileX
        OldTileY = TileY
    }
}
function H_Choice() {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(-50, 0)
        } else if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(50, 0)
        } else if (Blinky.x < 182) {
            Pacman.setVelocity(-50, 0)
        } else {
            Pacman.setVelocity(50, 0)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(50, 0)
        } else if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(-50, 0)
        } else if (Pacman.x < 182) {
            Pacman.setVelocity(50, 0)
        } else {
            Pacman.setVelocity(-50, 0)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(50, 0)
        } else {
            Pacman.setVelocity(-50, 0)
        }
    }
    WasChoiceMade = 1
}
function V_Choice() {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, -50)
        } else if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, 50)
        } else if (Blinky.y < 167) {
            Pacman.setVelocity(0, -50)
        } else {
            Pacman.setVelocity(0, 50)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, 50)
        } else if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, -50)
        } else if (Pacman.y < 167) {
            Pacman.setVelocity(0, 50)
        } else {
            Pacman.setVelocity(0, -50)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(0, 50)
        } else {
            Pacman.setVelocity(0, -50)
        }
    }
    WasChoiceMade = 1
}
function Four_Way_Choice() {
    if (Old_vert_velocity == 50 && Pacman.y % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) < Math.abs(Blinky.x - Pacman.x)) {
            H_Choice()
        }
    }
    if (Old_vert_velocity == -50 && Pacman.y % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) < Math.abs(Blinky.x - Pacman.x)) {
            H_Choice()
        }
    }
    if (Old_horiz_velocity == -50 && Pacman.x % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) > Math.abs(Blinky.x - Pacman.x)) {
            V_Choice()
        }
    }
    if (Old_horiz_velocity == 50 && Pacman.x % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) > Math.abs(Blinky.x - Pacman.x)) {
            V_Choice()
        }
    }
    WasChoiceMade = 1
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (Is_Fight_Timer_Running == 1) {
        BlinkyLives = BlinkyLives - 1
        Is_Fight_Timer_Running = 0
        otherSprite.destroy()
        Spawn_Eyes()
        Is_Eyes = 1
        TwoHundred(otherSprite.x, otherSprite.y)
    } else {
        otherSprite.destroy()
        PacmanLives = PacmanLives - 1
        sprite.vx = 0
        sprite.vy = 0
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
        animation.setAction(sprite, ActionKind.Death)
        pause(1100)
        sprite.destroy()
        Initialize_Pacman()
        animation.setAction(sprite, ActionKind.goingright)
        Initialize_Blinky()
    }
    if (PacmanLives == 0) {
        music.setVolume(5)
        game.over(true, effects.confetti)
    }
    if (BlinkyLives == 0) {
        music.setVolume(5)
        game.over(false, effects.confetti)
    }
})
function Up_Choice() {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, -50)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, -50)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(0, -50)
        }
    }
    WasChoiceMade = 1
}
function Left_Choice() {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(-50, 0)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(-50, 0)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(-50, 0)
        }
    }
    WasChoiceMade = 1
}
function Animate_Pacman() {
    if (Pacman.vx == 50) {
        animation.setAction(Pacman, ActionKind.goingright)
    } else if (Pacman.vx == -50) {
        animation.setAction(Pacman, ActionKind.goingleft)
    } else if (Pacman.vy == 50) {
        animation.setAction(Pacman, ActionKind.goingdown)
    } else if (Pacman.vy == -50) {
        animation.setAction(Pacman, ActionKind.goingup)
    }
}
function Down_Choice() {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, 50)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, 50)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(0, 50)
        }
    }
    WasChoiceMade = 1
}
function Right_Choice() {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(50, 0)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(50, 0)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(50, 0)
        }
    }
    WasChoiceMade = 1
}
function TwoHundred(num: number, num2: number) {
    twohundredpoints = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 9 9 9 . . . 9 9 . . . 9 9 . .
        9 . . . 9 . 9 . . 9 . 9 . . 9 .
        . . . . 9 . 9 . . 9 . 9 . . 9 .
        . . . 9 . . 9 . . 9 . 9 . . 9 .
        . . 9 . . . 9 . . 9 . 9 . . 9 .
        . 9 . . . . 9 . . 9 . 9 . . 9 .
        9 9 9 9 9 . . 9 9 . . . 9 9 . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Spirit)
    twohundredpoints.setPosition(num, num2)
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    pause(2000)
    twohundredpoints.destroy()
}
function Initialize_Power_Pellet(num: number, num2: number) {
    Power_Pellet = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Food)
    Power_Pellet.setPosition(num, num2)
    idle_Power_pellet = animation.createAnimation(ActionKind.Idle, 400)
    animation.attachAnimation(Power_Pellet, idle_Power_pellet)
    idle_Power_pellet.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    idle_Power_pellet.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    animation.setAction(Power_Pellet, ActionKind.Idle)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    Fight_Start_Time = Time
    Is_Fight_Timer_Running = 1
})
sprites.onOverlap(SpriteKind.Spirit, SpriteKind.Door, function (sprite, otherSprite) {
    Initialize_Blinky()
    sprite.destroy()
})
let rowHit = 0
let columnHit = 0
let Flight_Start_Time = 0
let idle_Power_pellet: animation.Animation = null
let Power_Pellet: Sprite = null
let twohundredpoints: Sprite = null
let OldTileY = 0
let OldTileX = 0
let Right = 0
let Left = 0
let Below = 0
let TileX = 0
let TileY = 0
let Above = 0
let Old_horiz_velocity = 0
let Old_vert_velocity = 0
let WasChoiceMade = 0
let Fight_Start_Time = 0
let list: number[][] = []
let Rows_list_22: number[] = []
let Rows_list_21: number[] = []
let Rows_list_20: number[] = []
let Rows_list_19: number[] = []
let Rows_list_18: number[] = []
let Rows_list_17: number[] = []
let Rows_list_16: number[] = []
let Rows_list_15: number[] = []
let Rows_list_14: number[] = []
let Rows_list_13: number[] = []
let Rows_list_12: number[] = []
let Rows_list_11: number[] = []
let Rows_list_10: number[] = []
let Rows_list_9: number[] = []
let Rows_list_8: number[] = []
let Rows_list_7: number[] = []
let Rows_list_6: number[] = []
let Rows_list_5: number[] = []
let Rows_list_4: number[] = []
let Rows_list_3: number[] = []
let Rows_list_2: number[] = []
let Rows_list_1: number[] = []
let Eyes: Sprite = null
let Blinking_Ghost: animation.Animation = null
let Blue_Ghost: animation.Animation = null
let LeftBlinky: animation.Animation = null
let RightBlinky: animation.Animation = null
let DownBlinky: animation.Animation = null
let UpBlinky: animation.Animation = null
let Idle_Blinky: animation.Animation = null
let Blinky: Sprite = null
let Death_Drama: animation.Animation = null
let Down_Pac: animation.Animation = null
let Up_Pac: animation.Animation = null
let Left_Pac: animation.Animation = null
let Right_Pac: animation.Animation = null
let Pacman: Sprite = null
let Is_Eyes = 0
let Is_Flight_Timer_Running = 0
let Is_Fight_Timer_Running = 0
let BlinkyLives = 0
let PacmanLives = 0
let Time = 0
let Fight_End_Time = 0
let debug = 0
debug = 0
let Pellet_Count = 191
let Powerup = 0
let Flight_End_Time = 5
Fight_End_Time = 30
Time = 0
let offset = 3
PacmanLives = 3
BlinkyLives = 3
Is_Fight_Timer_Running = 0
Is_Flight_Timer_Running = 0
Is_Eyes = 0
Play_Opening_Melody()
scene.setBackgroundImage(img`
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
`)
scene.setTile(2, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(1, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(11, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 . . . . . . . . 8 8 8 8 8
    8 8 8 8 . . . . . . 8 8 8 8 8 8
    . . 8 8 8 . . . . 8 8 8 . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . 8 8 8 8 8 8 8 8 8 8 8
    . . . . 8 8 8 . . . . . . . . .
    . . . . 8 8 . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . 8 8 . . . . . 8 8 8 8 8 8
    . . . 8 8 . . . . 8 8 8 . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(6, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 . . . . . . . . .
    8 8 8 8 8 8 8 8 8 . . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . . . 8 8 8 . . . . . .
    . . . . . . . . 8 8 8 . . . . .
    . . . . . . . . 8 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(7, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . 8 8 8 8 8 8 . . . . . .
    . . . . 8 8 . . 8 8 . . . . . .
    . . . 8 8 8 . . 8 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(8, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . . 8 8 . . 8 8 . . . . . .
    . . . . 8 8 . . 8 8 . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . . . 8 8 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(9, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 8
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . 8 8 . . . . . . . .
    . . . . . . 8 8 . . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . . . . . 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(3, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 8 . . . .
    . . . 8 8 . . . . . 8 8 8 8 8 8
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . . 8 8 . . . . . . . . . .
    . . . . 8 8 . . . . . . . . . .
    . . . . . 8 8 . . . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . . . . . 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(4, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    . . . . . . . . 8 8 8 . . . . .
    . . . . . . . . 8 8 8 . . . . .
    . . . . . . . 8 8 8 . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    8 8 8 8 8 8 8 8 . . . . . . . .
    8 8 8 8 8 8 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(12, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(10, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 . . . . . . . . . .
    8 8 8 8 8 8 8 8 . . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . . . . 8 8 . . . . . . .
    . . . . . . . 8 8 . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    8 8 8 8 8 8 8 8 . . . . . . . .
    8 8 8 8 8 8 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(13, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . . 8 8 . . . .
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . 8 8 . . . . . . . 8 8 8 8
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . 8 8 8 8
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . 8 8 . . . . . 8 8 . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(14, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . 8 8 8 . . . . . 8 8 . . . .
    . 8 8 8 . . . . . . 8 8 8 . . .
    8 8 8 . . . . . . . . 8 8 8 8 8
    8 8 . . . . . . . . . . . 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(0, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, false)
scene.setTile(15, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f 5 5 5 f f f f f f f
    f f f f f f 5 5 5 f f f f f f f
    f f f f f f 5 5 5 f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, false)
scene.setTileMap(img`
    5 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 6
    2 f f f f f f f f f f 2 f f f f f f f f f f 2
    2 f 5 1 6 f 5 1 1 6 f 2 f 5 1 1 6 f 5 1 6 f 2
    2 . 3 1 4 f 3 1 1 4 f 8 f 3 1 1 4 f 3 1 4 . 2
    2 f f f f f f f f f f f f f f f f f f f f f 2
    2 f 9 1 a f 7 f 9 1 1 b 1 1 a f 7 f 9 1 a f 2
    2 f f f f f 2 f f f f 2 f f f f 2 f f f f f 2
    3 1 1 1 6 f d 1 1 a f 8 f 9 1 1 c f 5 1 1 1 4
    . . . . 2 f 2 . . . . . . . . . 2 f 2 . . . .
    1 1 1 1 4 f 8 . 5 1 1 1 1 1 6 . 8 f 3 1 1 1 1
    . . . . . f . . 2 . . . . . 2 . . f . . . . .
    1 1 1 1 6 f 7 . 3 1 1 1 1 1 4 . 7 f 5 1 1 1 1
    . . . . 2 f 2 . . . . . . . . . 2 f 2 . . . .
    5 1 1 1 4 f 8 f 9 1 1 b 1 1 a f 8 f 3 1 1 1 6
    2 f f f f f f f f f f 2 f f f f f f f f f f 2
    2 f 9 1 6 f 9 1 1 a f 8 f 9 1 1 a f 5 1 a f 2
    2 . f f 2 f f f f f f f f f f f f f 2 f f . 2
    d 1 a f 8 f 7 f 9 1 1 b 1 1 a f 7 f 8 f 9 1 c
    2 f f f f f 2 f f f f 2 f f f f 2 f f f f f 2
    2 f 9 1 1 1 e 1 1 a f 8 f 9 1 1 e 1 1 1 a f 2
    2 f f f f f f f f f f f f f f f f f f f f f 2
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4
`)
let Portal = sprites.create(img`
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Door)
Portal.setPosition(182, 154)
Portal.z = 1
Initialize_Array_of_Walls()
Initialize_Blinky()
Initialize_Pacman()
Initialize_Power_Pellet(23, 56)
Initialize_Power_Pellet(23, 263)
Initialize_Power_Pellet(343, 56)
Initialize_Power_Pellet(343, 263)
game.onUpdateInterval(1000, function () {
    Time += 1
    if (Time % 4 == 0) {
        light.setAll(0x000000)
        for (let index = 0; index <= PacmanLives - 1; index++) {
            light.setPixelColor(index, 0xffff00)
        }
    }
    if (Time % 4 == 2) {
        light.setAll(0x000000)
        for (let index = 0; index <= BlinkyLives - 1; index++) {
            light.setPixelColor(index, 0xff0000)
        }
    }
})
game.onUpdate(function () {
    if (Math.abs(Blinky.x - Pacman.x) + Math.abs(Blinky.y - Pacman.y) < 60) {
        Flight_Start_Time = Time
        Is_Flight_Timer_Running = 1
    }
    TileX = Math.floor(Pacman.x / 16)
    TileY = Math.floor(Pacman.y / 16)
    if (TileX != OldTileX || TileY != OldTileY) {
        AI()
    }
    AnimateBlinky()
    Animate_Pacman()
    if (Pacman.left <= 1) {
        Pacman.x = 345
    }
    if (Pacman.right >= 360) {
        Pacman.x = 15
    }
    if (Blinky.left <= 1) {
        Blinky.x = 345
    }
    if (Blinky.right >= 360) {
        Blinky.x = 15
    }
    columnHit = Math.floor((Pacman.x + 0) / 16)
    rowHit = Math.floor((Pacman.y + 0) / 16)
    if (list[rowHit][columnHit] == 2) {
        scene.setTileAt(scene.getTile(columnHit, rowHit), 0)
        list[rowHit][columnHit] = 0
        music.playTone(196, music.beat(BeatFraction.Sixteenth))
        music.playTone(147, music.beat(BeatFraction.Sixteenth))
        Pellet_Count = Pellet_Count - 1
    }
    if (Flight_Start_Time + Flight_End_Time == Time && Is_Flight_Timer_Running == 1) {
        Is_Flight_Timer_Running = 0
    }
    if (Fight_Start_Time + Fight_End_Time == Time && Is_Fight_Timer_Running == 1) {
        Is_Fight_Timer_Running = 0
    }
    if (Pellet_Count == 0) {
        game.setDialogTextColor(7)
        game.showLongText("Pac-man cleared the board", DialogLayout.Bottom)
        pause(2000)
        game.over(false, effects.melt)
    }
})

