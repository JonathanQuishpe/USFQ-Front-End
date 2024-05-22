<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
  },
  loading: {
    type: Boolean,
    required: true
  },
});


const emits = defineEmits(['send-email']);
const emit = (eventName, ...args) => emits(eventName, ...args);
</script>

<template>
  <div class="row mt-4">
    <div class="col-md-12" v-if="item">
      <h4>
        Datos del estudiante
      </h4>
    </div>
    <div class="col-md-12 table-responsive">
      <table class="table table-striped" v-if="item">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {{ item.banner_id }}
            </th>
            <td>
              {{ item.nombre_completo }}
            </td>
            <td>
              {{ item.correo_usfq }}
            </td>
            <td>
              <button v-if="!loading" class="btn btn-primary" @click="emit('send-email', item.banner_id)">
                <v-icon name="md-email" />
              </button>
              <button v-if="loading" type="button" class="btn btn-primary" disabled>
                <v-icon name="co-codacy" animation="spin-pulse" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-12" v-if="!item">
      <div class="alert alert-primary" role="alert">
        No existen registros
      </div>
    </div>
  </div>
</template>