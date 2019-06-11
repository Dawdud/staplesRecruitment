<template>
  <div class="Products">
    <div class="content" v-for="item in listOfProducts">
      <detailView :data="item"></detailView>
      
      
     
    </div>
    <button @click="paginate"> paginacja</button>
   
      
    <modal v-show="isModalVisible"  @close="closeModal" v-bind:data="modalData"  v-if="modalData !== null"></modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import modal from "../views/modal";
import detailView from "../views/Details";
export default {

  name:"Products",
  created() {
    this.$store.dispatch("LOAD_PRODUCT_LIST");
    this.paginate();
    
  },
  data() {
    return { isModalVisible: false, modalData: null,
             parrentName: this.$options.name,
             listOfProducts:[],
             page:1, 
             perPage:3,
             pages:[] };
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    showModal(data) {
      this.modalData = data;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
   
     setPages(){
       let pagesNumber=  Math.ceil(Object.keys(this.products).length/this.perPage)
       for(let index=1; index<= pagesNumber; index++){
         this.pages.push(index);
       }
       console.log(this.pages);
    },
    paginate(){

      for(var key in this.products){
        this.listOfProducts.push(this.products[key])
      }
      let page= this.page;
      let perPage= this.perPage;
      let from =(page *perPage) - perPage;
      let to= (page* perPage);
      this.listOfProducts= this.listOfProducts.slice(from,to)

    }
   
  },

  components: {
    modal,
    detailView
  }
};
</script>