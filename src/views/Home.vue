<script setup>
import { ref } from 'vue';
import HeaderV from "../components/Header.vue"
import TableData from "../components/TableData.vue"
import Swal from 'sweetalert2';
import { getUsers } from "../services/api";

const items = ref([]);
const document = ref('');
const loading = ref(false);

async function updateItems() {
  loading.value = true;
  await getUsers().then((res) => {
    const { data } = res;
    items.value = data;
    loading.value = false;
  })
    .catch((res) => {
      const { message } = res;
      Swal.fire('¡Aviso!', message, 'warning');
      loading.value = false;
    });

}
function sendEmail(id) {
  console.log(id);
  Swal.fire('¡Satisfactorio!', 'Correo electrónico enviado.', 'success');
}
</script>

<template>
  <div class="container">
    <header-v />
    <div class="row">
      <form @submit.prevent="updateItems">
        <div class="col-md-4">
          <div class="input-group">
            <input type="text" class="form-control" name="document" placeholder="Identificación" autocomplete="off"
              v-model="document">
            <button v-if="!loading && document.length > 2" type="submit" class="btn btn-primary">
              <v-icon name="co-search" />
            </button>
            <button v-if="loading" type="button" class="btn btn-primary">
              <v-icon name="co-codacy" animation="spin-pulse" />
            </button>
          </div>
        </div>
      </form>
    </div>
    <table-data :items="items" @send-email="sendEmail" />
  </div>
</template>
