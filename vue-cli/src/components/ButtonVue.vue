<template>
  <button class="btn" :style="{ background: color }" >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'ButtonVue',

    props: {
      color: String
    }
  }
</script>