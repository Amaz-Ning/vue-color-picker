<template>
  <div class="picker">
    <div class="pick_area mb10">
      <pick-area :color="color"></pick-area>
      <pick-bar @changeColor="changeColor"></pick-bar>
    </div>
    <div class="show_area mb10">
      <show-color :color="color"></show-color>
    </div>
    <show-text :color="color" :colorType="'HEX'"></show-text>
    <show-text :color="color" :colorType="'RGB'"></show-text>
    <div class="block_area"></div>
  </div>
</template>

<script>
import pickArea from './pickArea.vue'
import pickBar from './pickBar.vue'
import showColor from './showColor.vue'
import showText from './showText.vue'
export default {
  data() {
    return {
      color: 'rgb(0, 0, 0)',
    }
  },
  components: {
    pickArea,
    pickBar,
    showColor,
    showText,
  },
  methods: {
    changeColor(data) {
      this.color = `rgb(${data[0]}, ${data[1]}, ${data[2]})`
      this.$emit('colorChange', this.color)
    },
  },
}
</script>

<style scoped lang="scss">
.picker {
  padding: 10px;
  border-radius: 3px;
  width: 200px;
  background: #fff;
  .pick_area {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
  }
  .mb10 {
    margin-bottom: 10px;
  }
}
</style>
