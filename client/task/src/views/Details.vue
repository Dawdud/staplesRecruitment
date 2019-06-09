<template>
    <div>
        <div class="content__image"><img  :src= "data.images.primary.large" alt=""></div>
           <div class="content__title"><p>{{data.general.name}}</p></div>
           <div class="content__id"><p>{{data.id}}</p></div>
           <button @click="showParrent"> detail</button>
    </div>
</template>

<script>
export default {
    name: 'detailView',
     props: ['data'],
     methods: {
         showParrent(){
             console.log(this.$parent)
         }
     },
}
</script>