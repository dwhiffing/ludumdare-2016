import Ranged from './ranged'

const MIN_SHOT_TIME = 200
const MIN_SHOT_VELOCITY_X = 350
const MAX_SHOT_VELOCITY_X = 450
const MIN_SHOT_VELOCITY_Y = -150
const MAX_SHOT_VELOCITY_Y = -200

export default class Archer extends Ranged {
  reset(x, y, direction) {
    super.reset(x, y, direction)
    this.shoot()
  }

  shoot(numShots=5, size=1) {
    this.game.time.events.repeat(MIN_SHOT_TIME, numShots, () => {
      super.shoot(1, size, MIN_SHOT_VELOCITY_X, MAX_SHOT_VELOCITY_X, MIN_SHOT_VELOCITY_Y, MAX_SHOT_VELOCITY_Y, 0, 0)
    })
  }
}
