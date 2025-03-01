player.onChat("ameen", function () {
    rollerCoasterBuilder.placeTrackStart(pos(0, 0, 0), NORTH)
    rollerCoasterBuilder.addStraightLine(10)
    rollerCoasterBuilder.placeTrackStart(pos(0, 0, 0), NORTH)
    rollerCoasterBuilder.addTurn(LEFT_TURN)
    rollerCoasterBuilder.addRamp(RcbVerticalDirection.Up, 10)
    rollerCoasterBuilder.addRamp(RcbVerticalDirection.Up, 10)
    rollerCoasterBuilder.addSpiral(
    RcbVerticalDirection.Up,
    LEFT_TURN,
    10,
    3
    )
    rollerCoasterBuilder.addFreeFall(10)
    rollerCoasterBuilder.addTurn(RIGHT_TURN)
    rollerCoasterBuilder.addStraightLine(10)
    rollerCoasterBuilder.addFreeFall(10)
    rollerCoasterBuilder.addStraightLine(10)
    rollerCoasterBuilder.placeTrackEnd()
})
