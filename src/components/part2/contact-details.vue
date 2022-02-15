<template>
  <div class="details" v-if="details">
    <div class="details-header ui-cols">
      <div class="details-label --expanded">Contact Details</div>
      <div class="details-close" @click="$emit('close')" />
    </div>
    <ui-form />
  </div>
</template>

<script>
export default {
  name: 'contact-details',
  props: {
    details: Object,
    idx: Number,
  },
  data: function () {
    return {
    }
  },
}
</script>

<style scoped>
.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-primary);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.details-header {
  display: flex;
  border-bottom: solid 0.2rem var(--color-brdr-quarternary);
}

.details-label {
  flex-grow: 1;
  padding: 2rem;
  font-size: 2.1rem;
  margin: 0;
}

.details-close {
  width: 7rem;
  height: 4rem;
  background: url('~@/assets/images/icon-x.svg') center no-repeat;
  background-size: 3rem;
  cursor: pointer;
  opacity: 0.5;
}

.ui-form {
  padding: 2rem;
  overflow: auto;
  flex-grow: 1;
}
</style>