<template>
  <div class="quantity-toggle">
    <button @click="decrement()">-</button>
    <input type="text" :value="q" readonly>
    <button @click="increment()">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      q: 1
    };
  },
  methods: {
    increment() {
      this.q++;
    },
    decrement() {
      if (this.q === 1) {
        this.q=1;
      } else {
        this.q--;
      }
    }
  }
};
</script>
