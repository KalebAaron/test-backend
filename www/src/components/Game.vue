<template>
  <div id='gameScreen'></div>
</template>

<script>
  import 'pixi'
  import 'p2'
  import Phaser from 'phaser'

  export default {
    name: 'game',
    props: {
      width: Number,
      height: Number
    },
    mounted() {
      let self = this
      if (this.game == null) {
        this.game = new Phaser.Game(1024, 650, Phaser.AUTO, this.$el, {
          preload: function preload() {
            self.preload(this)
          },
          create: function create() {
            self.create(this)
          },
          update: function update() {
            self.update(this)
          }
        })
      }
    },
    methods: {
      preload() {
      },
      create(phaser) {
      },
      update(phaser) {
      }
    },
    data() {
      return {
        game: null
      }
    }
  }
</script>
<style>
</style>