<template>
  <div id="app">
    <h2>Part 1</h2>
    <contacts-part-one />

    <h2>Part 2</h2>
    <contacts-part-two />

    <h2>Part 3</h2>
    <contacts-part-three />
  </div>
</template>

<script>
import ContactsPartOne from './components/part1/contacts.vue'
import ContactsPartTwo from './components/part2/contacts.vue'
import ContactsPartThree from './components/part3/contacts.vue'

export default {
  name: 'App',
  components: {
    ContactsPartOne,
    ContactsPartTwo,
    ContactsPartThree,
  }
}
</script>

<style>
body {
  padding: 4rem;
}

.contacts {
  margin-bottom: 10rem;
}
</style>
