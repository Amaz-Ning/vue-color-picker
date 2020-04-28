<template>
  <div class="container" ref="box">
    <color-picker @colorChange="change"></color-picker>
  </div>
</template>

<script>
import colorPicker from './src/components/colorPicker.vue'
export default {
  data() {
    return {}
  },
  methods: {
    change(data) {
      this.$nextTick(() => {
        this.$refs.box.style.background = data
      })
    },
  },
  components: { colorPicker },
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
