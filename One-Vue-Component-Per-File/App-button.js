export default {
  mounted() {
    console.log('Mounted!')
  },
  data() {
    return {
      name: 'Bruno'
    }
  },
  template: /*html*/`
    <button :class="name">
      <slot />
    </button>          
  `
}