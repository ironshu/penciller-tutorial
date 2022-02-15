<template>
  <div class="contacts">
    <contact-details
      :details="details"
      :idx="idx"
      @close="details = null"
      @save="handleSave"
    />
    <div class="contacts-header ui-cols">
      <ui-filter
        placeholder="Find a contact..."
        class="--expanded"
        :options.sync="people"
        :fuse="{ keys: ['name'] }"
      />
      <ui-field
        type="button"
        label="Add"
        name="add"
        @click="details = { phones: [{ location:'', number:'' }] }"
      />
    </div>
    <div class="contacts-list">
      <contact-item
        v-for="(person, personIdx) in people"
        :key="'item_' + personIdx"
        :details="person"
        @click="handleItem(person, personIdx)"
      />
    </div>
  </div>
</template>

<script>
import ContactItem from './contact-item.vue'
import ContactDetails from './contact-details.vue'

export default {
  name: 'contacts',
  components: {
    ContactItem,
    ContactDetails,
  },
  data: function () {
    return {
      details: null,
      idx: null,
      people: [
        { name: 'Alexander Berry', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '111-111-1234' }], notes: 'These are my notes' },
        { name: 'Jeanette Welch', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '214-540-9469' }], notes: '' },
        { name: 'Marvin White', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '439-985-2801' }], notes: '' },
        { name: 'Larry Baldwin', birthday: '2022-02-10', phones: [{ location: 'home', number: '638-477-7047' }], notes: '' },
        { name: 'Jonathan Pratt', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '257-275-4433' }], notes: '' },
        { name: 'Ann Santos', birthday: '', phones: [{ location: 'mobile', number: '238-913-1597' }], notes: '' },
        { name: 'Ralph Chandler', birthday: '', phones: [{ location: 'mobile', number: '888-530-5746' }], notes: '' },
        { name: 'Jordan Green', birthday: '', phones: [{ location: 'work', number: '642-427-9162' }], notes: '' },
        { name: 'Lillie Moody', birthday: '', phones: [{ location: 'mobile', number: '767-228-1867' }], notes: '' },
        { name: 'Lester Warren', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '504-238-6867' }], notes: '' },
        { name: 'Brent Walker', birthday: '', phones: [{ location: 'mobile', number: '454-526-3487' }], notes: '' },
        { name: 'Elijah Nunez', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '268-281-4462' }], notes: '' },
        { name: 'Walter Walker', birthday: '', phones: [{ location: 'home', number: '363-289-7140' }], notes: '' },
        { name: 'Tillie Mason', birthday: '2022-02-10', phones: [{ location: 'home', number: '261-986-9537' }], notes: '' },
        { name: 'Ruth Miles', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '222-301-5710' }], notes: '' },
        { name: 'Jackson Stephens', birthday: '', phones: [{ location: 'mobile', number: '907-815-6221' }], notes: '' },
        { name: 'Adrian Price', birthday: '2022-02-10', phones: [{ location: 'mobile', number: '878-458-2840' }], notes: '' },
        { name: 'Samuel Sherman', birthday: '', phones: [{ location: 'mobile', number: '834-849-6022' }], notes: '' },
        { name: 'Warren Cummings', birthday: '', phones: [{ location: 'mobile', number: '904-695-3230' }], notes: '' },
        { name: 'Jessie Ingram', birthday: '', phones: [{ location: 'mobile', number: '672-969-6817' }], notes: '' },
      ]
    }
  },
  methods: {
    handleItem: function (details, idx) {
      this.details = details
      this.idx = idx
    },
    handleSave: function (details, idx) {
      if (idx === null) {
        this.people.unshift(details)
      } else {
        this.people[idx] = details
      }

      this.details = null
      this.idx = null
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

.contacts-header .ui-filter,
.contacts-header .ui-field {
  margin-top: 0;
  margin-bottom: 0;
}

.contacts-list {
  flex-grow: 1;
  overflow: auto;
  padding: 0 1rem;
}
</style>