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
    <button 
      :class= "{
        'background-red': colorscheme === 'secondary',
        'background-blue': colorscheme === 'primary',
        'disabled-button': processing
      }"
      :disabled="processing"
    >
      <slot />
    </button>          
  `,

  props: {
    colorscheme: {
      type: String,
      default: "primary"
    },

    processing: Boolean,
    default: false
  }
}