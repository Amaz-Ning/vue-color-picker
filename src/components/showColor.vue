<template>
  <div class="show">
    <div class="area" :style="showColor"></div>
    <div class="btn"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showColor: {
        background: 'rgb(0, 0, 0)',
      },
    }
  },
  props: {
    color: {
      type: String,
      default: 'rgb(0, 0, 0)',
    },
  },
  watch: {
    color: function(n, o) {
      this.initColor(n)
    },
  },
  mounted() {
    this.initColor(this.color)
  },
  methods: {
    initColor(color) {
      this.showColor.background = color
    },
  },
  components: {},
}
</script>

<style scoped lang="scss">
.show {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  .area {
    width: 170px;
    height: 30px;
  }
  .btn {
    width: 30px;
    height: 30px;
    background: blue;
    cursor: pointer;
  }
}
</style>
