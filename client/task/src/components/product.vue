<template>
   <div class="Products">
       <div class="content" v-for="item in products">
            <detailView :data="item"></detailView>
            <button @click="showModal(item)">Add to Cart</button>
       </div>
      
      <modal v-show="isModalVisible"
        @close="closeModal" :data = "modalData" v-if="modalData !== null" >
       
        
        
    </modal>
   
  </div>
</template>

<script>
import {mapState} from 'vuex'
import modal from '../views/modal';
import detailView from '../views/Details';
export default {
  
created(){
this.$store.dispatch('LOAD_PRODUCT_LIST')
},
   data(){
        return { isModalVisible:false,
                 modalData: null,
              
                  }
    },
   computed: {
  ...mapState(['products'])  
},
 methods: {
        showModal(data) {
          this.modalData= data;
        this.isModalVisible = true;
      },
      closeModal() {
       
        this.isModalVisible = false;
      }
    },

components: {
        modal,
        detailView,
     
    },
}
</script>