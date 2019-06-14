<template>
  <button :disabled="disabled"  class="btn__pagination">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>