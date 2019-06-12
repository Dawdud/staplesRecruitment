<template>
  <div class="content" >
    <div class="content__image">
      <img @click="onClick()" :src="data.images.primary.large" alt>
    </div>
    <div class="content__title">
      <p>{{data.general.name}}</p>
    </div>
    <div class="content__id">
      <p>{{data.id}}</p>
    </div>
   
    <div class="content--modal" v-if="parrentData=== 'modal' ">
     <div class="content__title">
       <p>{{data.general.description}}</p>
    </div>
    <div class="content__id">
      <p>{{data.brand.name}}</p>
      
    </div>
    
   <button class="content__button">Add to Cart</button>

<select id="quantity__select" >
    <option v-for=" index in quantity" :value="index">{{index}}</option>
    
   
</select>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "detailView",
  props: ["data", "parrentData" ],
   data() {
    return { quantity:10 };

  },
  methods: {
    onClick(){
      this.$emit('modalWindow')
    }
  }
  
  
};
</script>