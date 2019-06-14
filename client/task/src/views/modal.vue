<template>
  <transition name="modal-slide">
    <div class="modal__backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal__header">
          <button type="button" class="btn-green" @click="close" aria-label="Close modal">X</button>
          <slot name="header">
            <detailView :data="data" :parrentData="parrentName"></detailView>
          </slot>
        </header>

        <section class="modal__body">
          <slot name="body"></slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
import detailView from "../views/Details";
export default {
  name: "modal",
  props: ["data"],
  data() {
    return { parrentName: this.$options.name };
  },

  methods: {
    close() {
      this.$emit("close");
    }
  },
  components: {
    detailView
  }
};
</script>
<style>
</style>
