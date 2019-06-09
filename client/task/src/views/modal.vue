<template>
<transition name="modal-slide">

  <div class="modal__backdrop">
    <div class="modal"
         role="dialog"
         aria-labelledby="modalTitle"
         aria-describedby="modalDescription"
    >
      <header class="modal__header">
          <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              X</button>
      <slot name="header">
         <detailView :data="data"></detailView>
          
      </slot>
      </header>

      <section class="modal__body">
      <slot name="body">
          I'm the default body!
      </slot>
      </section>
    
        
      
      
    

    </div>
  </div>
  </transition>
</template>
<script>
import detailView from '../views/Details';
export default {
    name: 'modal',
    props: ['data'],
    methods: {
        close(){
            this.$emit('close')
        }
    },
    components: {
      
        detailView,
     
    },
}
</script>
<style>
  
</style>
