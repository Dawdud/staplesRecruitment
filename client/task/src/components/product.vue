<template>
  <div class="products">
    <div class="container" v-for="item in paginate">
      <detailView :data="item" @modalWindow="showModal(item)"></detailView>
    
    </div>

    <pagination
      :current-page="page"
      :page-count="pagecount"
      :pagesList="pages"
      @nextPage="pageChangedHandle('next')"
      @previousPage="pageChangedHandle('previous')"
      @loadPage="pageChangedHandle"
    ></pagination>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
      v-bind:data="modalData"
      v-if="modalData !== null"
    ></modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import modal from "../views/modal";
import detailView from "../views/Details";
import pagination from "../views/pagination";

export default {
  name: "Products",
  created() {
    this.$store.dispatch("LOAD_PRODUCT_LIST");
  },
  data() {
    return {
      isModalVisible: false,
      modalData: null,
      parrentName: this.$options.name,
      listOfProducts: [],
      page: 1,
      perPage: 3,
      pages: [],
      pagecount: 4
    };
  },
  computed: {
    ...mapState(["products"]),
    paginate: function() {
     
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return this.products.slice(from, to);
    }
  },
  methods: {
    showModal(data) {
      this.modalData = data;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    pageChangedHandle(value) {
      switch (value) {
        case "next":
          this.page += 1;
          break;
        case "previous":
          this.page -= 1;
          break;
        default:
          this.page = value;
      }
    }
  },

  components: {
    modal,
    detailView,
    pagination
  }
};
</script>