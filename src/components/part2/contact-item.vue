<template>
  <div class="contact-item" @click="$emit('click')">
    <div class="contact-item__label">{{ details.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'contact-item',
  props: {
    details: Object,
  }
}
</script>

<style scoped>
.contact-item {
  padding: 2rem 1rem;
  margin: 0;
  border-bottom: solid 0.1rem var(--color-brdr-quarternary);
  cursor: pointer;
}

.contact-item:last-child {
  border-bottom: none;
}
</style>