<template>
  <div class="show_text">
    <div class="color_type_name">{{ colorType }}</div>
    <div class="color_text">{{ color }}</div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#FF0000',
    },
    colorType: {
      type: String,
      default: 'HEX',
    },
  },
  data() {
    return {}
  },
  components: {},
}
</script>

<style scoped lang="scss">
.show_text {
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  .color_type_name {
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #999;
    background: #e7e8e9;
  }
  .color_text {
    width: 140px;
    height: 30px;
    text-align: center;
    color: #666;
    line-height: 30px;
    background: #eceef0;
  }
}
</style>
