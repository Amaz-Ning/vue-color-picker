<template>
  <div class="pick">
    <canvas ref="pick" width="170" height="150"></canvas>
  </div>
</template>

<script>
import mixin from '../mixin/mixin.js'
export default {
  props: {
    color: {
      type: String,
      default: 'rgb(255, 255, 255)',
    },
  },
  watch: {
    color: function(n, o) {
      this.initPickArea(n)
    },
  },
  mixins: [mixin],
  data() {
    return {}
  },
  mounted() {
    this.initPickArea(this.color)
  },
  methods: {
    initPickArea(color) {
      const c = this.$refs.pick
      const ctx = c.getContext('2d')
      const w = c.width
      const h = c.height
      ctx.fillStyle = color
      ctx.fillRect(0, 0, w, h)
      this.createGradient(ctx, 'l', w, h, this.color)
      this.createGradient(ctx, 'p', w, h, this.color)
    },
  },
  components: {},
}
</script>

<style scoped lang="scss"></style>
