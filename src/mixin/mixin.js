export default {
  methods: {
    createGradient(ctx, direction, width, height, color) {
      let d = direction === 'l'
      const gradient = ctx.createLinearGradient(
        d ? 0 : width,
        d ? 0 : height,
        width,
        0
      )
      if (d) {
        gradient.addColorStop(0.01, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(0.99, 'rgba(255, 255, 255, 0)')
      } else {
        gradient.addColorStop(0.01, 'rgba(0, 0, 0, 1)')
        gradient.addColorStop(0.99, 'rgba(0, 0, 0, 0)')
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    },
  },
}
