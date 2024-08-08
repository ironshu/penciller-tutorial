<template>
  <div class="contacts">
    <div class="contacts-header">
      <ui-filter
        :options="people"
        :fuse="{ keys: ['name'] }"
        placeholder="Find a contact..."
        @filter="handleFilter"
      />
    </div>
    <div class="contacts-list">
      <contact-item
        v-for="(person, personIdx) in results"
        :key="'item_' + personIdx"
        :details="person"
      />
    </div>
  </div>
</template>

<script>
import ContactItem from './contact-item.vue'

export default {
  name: 'contacts',
  components: {
    ContactItem,
  },
  data: function () {
    let people: [
      { name: 'Alexander Berry' },
      { name: 'Jeanette Welch' },
      { name: 'Marvin White' },
      { name: 'Larry Baldwin' },
      { name: 'Jonathan Pratt' },
      { name: 'Ann Santos' },
      { name: 'Ralph Chandler' },
      { name: 'Jordan Green' },
      { name: 'Lillie Moody' },
      { name: 'Lester Warren' },
      { name: 'Brent Walker' },
      { name: 'Elijah Nunez' },
      { name: 'Walter Walker' },
      { name: 'Tillie Mason' },
      { name: 'Ruth Miles' },
      { name: 'Jackson Stephens' },
      { name: 'Adrian Price' },
      { name: 'Samuel Sherman' },
      { name: 'Warren Cummings' },
      { name: 'Jessie Ingram' },
    ]
    
    return {
      people,
      results: people,
    }
  },
  methods: {
    handleFilter: function (results) {
      this.results = results
    }
  }
}
</script>

<style scoped>
.contacts {
  width: 46rem;
  height: 40rem;
  border: solid 0.2rem var(--color-brdr-quarternary);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

.contacts-header {
  padding: 1rem;
  border-bottom: solid 0.2rem var(--color-brdr-quarternary);
}

.contacts-header .ui-filter {
  margin: 0;
}

.contacts-list {
  flex-grow: 1;
  overflow: auto;
  padding: 0 1rem;
}
</style>
