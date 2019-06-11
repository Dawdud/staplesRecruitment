<template>
  <div class="home">
    <search/>
    <product/>
  </div>
</template>

<script>
import product from "../components/product";
import search from "../components/search";
export default {
  name: "home",
  components: {
    product,
    search
  }
};
</script>
