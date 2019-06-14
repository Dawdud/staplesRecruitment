<template>
  <div class="base-pagination">
    <BaseButton @click.native="previousPage" :disabled="isPreviousButtonDisabled">←</BaseButton>
    <paginationTrigger :pageNumber="currentPage" @loadPage="onLoadPage"/>
    <BaseButton @click.native="nextPage" :disabled="isNextButtonDisabled"> → </BaseButton>
  </div>
</template>

<script>
import paginationTrigger from "./paginationTrigger";
import BaseButton from "./BaseButton.vue";
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
    },
    pagesList: {
      type: Array,
      required: true
    }
  },
  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1;
    },
    isNextButtonDisabled() {
      return this.currentPage === this.pageCount;
    }
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    previousPage() {
      this.$emit("previousPage");
    },
    onLoadPage(value) {
      this.$emit("loadPage", value);
    }
  },
  components: {
    paginationTrigger,
    BaseButton
  }
};
</script>