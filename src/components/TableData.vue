<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});


const emits = defineEmits(['send-email']);
const emit = (eventName, ...args) => emits(eventName, ...args);
</script>

<template>
  <div class="row mt-4">
    <div class="col-md-12" v-if="items.length">
      <h4>
        Datos del estudiante
      </h4>
    </div>
    <div class="col-md-12 table-responsive">
      <table class="table table-striped" v-if="items.length">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <th scope="row">
              {{ index + 1 }}
            </th>
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.last_name }}
            </td>
            <td>
              {{ item.age }}
            </td>
            <td>
              <button class="btn btn-primary" @click="emit('send-email', item.id)">
                <v-icon name="md-email" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="alert alert-danger" role="alert" v-if="!items.length">
      No existen registros
    </div>
  </div>
</template>