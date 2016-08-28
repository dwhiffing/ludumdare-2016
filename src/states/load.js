export default {
  preload() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this)

    this.load.spritesheet('tiles', 'assets/images/tiles.png', 75, 75)
    this.load.spritesheet('units', 'assets/images/units.png', 15, 30)
    this.load.spritesheet('soldier', 'assets/images/soldier.png', 8, 15)
    this.load.spritesheet('archer', 'assets/images/archer.png', 11, 13)
    this.load.spritesheet('explosion', 'assets/images/explosion.png', 128, 128)
    this.load.spritesheet('catapult', 'assets/images/catapult.png', 22, 13)
    this.load.spritesheet('highlight', 'assets/images/highlight.png', 495, 175)

    this.load.image('cursor', 'assets/images/cursor.png')
    this.load.image('overlay', 'assets/images/overlay.png')
    this.load.image('castle', 'assets/images/castle.png')
    this.load.image('bullet', 'assets/images/bullet.png')
    this.load.image('ground', 'assets/images/ground.png')

    this.load.audio('big_crash_1','assets/audio/big_crash_1.mp3')
    this.load.audio('big_crash_2','assets/audio/big_crash_2.mp3')
    this.load.audio('medium_crash_1','assets/audio/medium_crash_1.mp3')
    this.load.audio('medium_crash_2','assets/audio/medium_crash_2.mp3')
    this.load.audio('medium_crash_3','assets/audio/medium_crash_3.mp3')
    this.load.audio('medium_crash_4','assets/audio/medium_crash_4.mp3')
    this.load.audio('medium_crash_5','assets/audio/medium_crash_5.mp3')
    this.load.audio('medium_crash_6','assets/audio/medium_crash_6.mp3')
    this.load.audio('medium_crash_7','assets/audio/medium_crash_7.mp3')
    this.load.audio('small_crash_1','assets/audio/small_crash_1.mp3')
    this.load.audio('small_crash_2','assets/audio/small_crash_2.mp3')
    this.load.audio('small_crash_3','assets/audio/small_crash_3.mp3')
    this.load.audio('small_crash_4','assets/audio/small_crash_4.mp3')
    this.load.audio('critical_1','assets/audio/critical_1.mp3')
    this.load.audio('critical_2','assets/audio/critical_2.mp3')
    this.load.audio('critical_3','assets/audio/critical_3.mp3')
    this.load.audio('death','assets/audio/death.mp3')
    this.load.audio('footstep','assets/audio/footstep.mp3')
    this.load.audio('gameover','assets/audio/gameover.mp3')
    this.load.audio('gameover2','assets/audio/gameover2.mp3')
    this.load.audio('pick','assets/audio/pick.mp3')
    this.load.audio('submit','assets/audio/submit.mp3')
    this.load.audio('submit2','assets/audio/submit2.mp3')
    this.load.audio('submit4','assets/audio/submit4.mp3')
    this.load.audio('swap','assets/audio/swap.mp3')
    this.load.audio('swap2','assets/audio/swap2.mp3')
    this.load.audio('swipe','assets/audio/swipe.mp3')
    this.load.audio('whine','assets/audio/whine.mp3')
    this.load.audio('submit_failed','assets/audio/submit_failed.mp3')
  },

  onLoadComplete() {
    this.game.state.start('play')
  }
}
