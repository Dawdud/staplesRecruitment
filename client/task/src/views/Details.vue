<template>
  <section class="content">
    <div class="content__image" >
      <img @click="onClick()" :src="data.images.primary.large" alt>
    </div>
    <div class="content__title">
      <p>{{data.general.name}}</p>
    </div>
    <div class="content__id">
      <p>{{data.id}}</p>
    </div>
       <div class="content__add">
      <div class="btn">
      <button class="btn__cart">Add to Cart</button>
      </div>
      <div>
      <quantity/>
      </div>

      </div>
    <div class="content--modal" v-if="parrentData=== 'modal' ">
      <div class="content__description">
        <p>{{data.general.description}}</p>
      </div>
      <div class="content__id">
        <p>{{data.brand.name}}</p>
      </div>
      

     
    </div>
  </section>
</template>

<script>
import quantity from "./quantity";
export default {
  name: "detailView",
  props: ["data", "parrentData"],
  data() {
    return { quantity: 10 };
  },
  methods: {
    onClick() {
      this.$emit("modalWindow");
    }

  },
  components: {
   quantity,
  }
};
</script>