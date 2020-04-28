<template>
  <div class="bar" @mousedown="basMouseDown">
    <canvas ref="bar" width="20" height="150"></canvas>
    <div ref="bs" class="bar_selector" :style="selectorStyle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectorStyle: {},
    }
  },
  mounted() {
    this.initBar()
  },
  methods: {
    initBar() {
      const c = this.$refs.bar
      const width = c.width
      const height = c.height
      const ctx = c.getContext('2d')
      const gradient = ctx.createLinearGradient(0, height, 0, 0)
      gradient.addColorStop(0, '#FF0000') // 红
      gradient.addColorStop(0.17 * 1, '#FF00FF') // 紫
      gradient.addColorStop(0.17 * 2, '#0000FF') // 蓝
      gradient.addColorStop(0.17 * 3, '#00FFFF') // 青
      gradient.addColorStop(0.17 * 4, '#00FF00') // 绿
      gradient.addColorStop(0.17 * 5, '#FFFF00') // 黄
      gradient.addColorStop(1, '#FF0000') // 红
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    },
    basMouseDown(e) {
      const c = this.$refs.bar
      const ctx = c.getContext('2d')
      const { top: h } = this.$el.getBoundingClientRect()
      const height = c.height
      const mouseMove = (e) => {
        let y = e.clientY - h

        if (y < -1) {
          y = -1
        }
        if (y > height - 1) {
          y = height - 1
        }

        this.selectorStyle = {
          top: y + 'px',
        }
        // // 如果用最大值，选择的像素会是空的，空的默认是黑色
        const imgData = ctx.getImageData(0, y + 1, 1, 1)
        const [r, g, b] = imgData.data
        this.$emit('changeColor', [r, g, b])
      }
      mouseMove(e)
      const mouseUp = function() {
        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp)
      }
      document.addEventListener('mousemove', mouseMove)
      document.addEventListener('mouseup', mouseUp)
    },
  },
  components: {},
}
</script>

<style scoped lang="scss">
.bar {
  position: relative;
  .bar_selector {
    width: 100%;
    height: 3px;
    position: absolute;
    top: 149px;
    left: 0px;
    background: white;
  }
}
</style>
