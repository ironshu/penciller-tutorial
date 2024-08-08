<template>
  <div class="details" v-if="localDetails">
    <div class="details-header ui-cols">
      <div class="details-label --expanded">Contact Details</div>
      <div class="details-close" @click="$emit('close')" />
    </div>
    <ui-form @submit="handleSubmit">
      <ui-field
        type="text"
        name="name"
        label="Name"
        autocomplete="off"
        :value="localDetails.name"
        @input="handleNameInput"
      />
      <ui-field
        type="date"
        name="birthday"
        label="Birthday"
        autocomplete="off"
        :value="localDetails.birthday"
        @input="handleBirthdayInput"
      />
      <ui-repeater
        :values="localDetails.phones"
        :template="phoneTemplate"
        v-slot="phone"
        min="1"
        max="3"
        label="Add Phone"
        @update="handlePhones"
      >
        <div class="ui-cols">
          <ui-field
            type="select"
            label="Phone"
            style="width: 16rem;"
            :name="'phone[' + phone.idx + '][location]'"
            :options="locations"
            :value="phone.location"
            :rules="[]"
            @input="val => handleLocationInput(val, phone.idx)"
          />
          <ui-field
            type="phone"
            label="Number"
            autocomplete="off"
            class="--expanded"
            :name="'phone[' + phone.idx + '][number]'"
            :value="phone.number"
            @input="val => handleNumberInput(val, phone.idx)"
          />
        </div>
      </ui-repeater>
      <ui-field
        type="textarea"
        name="notes"
        label="Notes"
        maxlength="180"
        :value="localDetails.notes"
        @input="handleNotesInput"
        :rules="[]"
      />
      <ui-submit
        name="submit"
        label="Save Contact"
        noisy="true"
      />
    </ui-form>
  </div>
</template>

<script>
export default {
  name: 'contact-app-details',
  props: {
    details: Object,
    idx: Number,
  },
  data: function () {
    return {
      phoneTemplate: { location: '', number: '' },
      locations: [
        { label: 'Mobile', value: 'mobile' },
        { label: 'Home', value: 'home' },
        { label: 'Work', value: 'work' },
      ]
    }
  },
  computed: {
    localDetails: {
      get: function () {
        return this.details
      },
      set: function (newValue) {
        return newValue
      }
    }
  },
  methods: {
    handleNameInput: function (newValue) {
      this.localDetails.name = newValue
    },
    handleBirthdayInput: function (newValue) {
      this.localDetails.birthday = newValue
    },
    handleNotesInput: function (newValue) {
      this.localDetails.notes = newValue
    },
    handlePhones: function (newValue) {
      this.localDetails.phones = newValue
    },
    handleLocationInput: function (newValue, idx) {
      this.localDetails.phones[idx].phone = newValue
    },
    handleNumberInput: function (newValue, idx) {
      this.localDetails.phones[idx].number = newValue
    },
    handleSubmit: function (form) {
      if (form) {
        form.startProcessing()

        setTimeout(() => {
          form.endProcessing()
          this.$emit('save', this.localDetails, this.idx)
        }, 2000)
      }
    }
  }
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
  position: relative;
  cursor: pointer;
  opacity: 0.5;
}

.details-close:before,
.details-close:after {
  content: '';
  display: block;
  position: absolute;
  width: 0.3rem;
  height: 1.6rem;
  background-color: #000;
  border-radius: 0.2rem;
  top: calc(50% - 0.8rem);
  left: calc(50% - 0.5rem);
  transform: rotate(45deg);
}

.details-close:after {
  transform: rotate(-45deg);
}

.ui-form {
  padding: 2rem;
  overflow: auto;
  flex-grow: 1;
}
</style>
