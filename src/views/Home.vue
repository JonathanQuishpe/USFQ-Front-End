<script setup>
import { ref } from 'vue';
import HeaderV from "../components/Header.vue"
import TableData from "../components/TableData.vue"
import Swal from 'sweetalert2';
import { getUsers, sendEmail } from "../services/api";

const item = ref(null);
const document = ref('');
const loading = ref(false);
const emailLoading = ref(false);

async function updateItems() {
  loading.value = true;
  await getUsers(document.value).then((res) => {
    const { data: { data, status, message } } = res;
    loading.value = false;
    if (!status) {
      Swal.fire('¡Aviso!', message, 'warning');
      return;
    }
    item.value = data;
  })
    .catch((res) => {
      const { message } = res;
      Swal.fire('¡Aviso!', message, 'warning');
      loading.value = false;
    });

}
async function handleClickOnEmail() {
  emailLoading.value = true;
  await sendEmail(
    { email: 'andres.quishpe@nextisolutions.com' }
  )
    .then((res) => {
      const { data } = res;
      console.log(data);
      emailLoading.value = false;
      Swal.fire('¡Aviso!', data, 'success');
    })
    .catch((res) => {
      emailLoading.value = false;
      Swal.fire('¡Aviso!', 'Problemas en la red', 'warning');
    });
}
function resetSearch() {
  item.value = null;
  document.value = '';
}
</script>

<template>
  <div class="container">
    <header-v />
    <div class="row">
      <form @submit.prevent="updateItems">
        <div class="col-md-3">
          <label class="m-2">Identificación</label>
          <div class="input-group">
            <input type="text" class="form-control" name="document" placeholder="9999999999" autocomplete="off"
              v-model="document">
            <button v-if="!loading && document.length > 2 && !item" type="submit" class="btn btn-primary">
              <v-icon name="co-search" />
            </button>
            <button v-if="loading" type="button" class="btn btn-primary" disabled>
              <v-icon name="co-codacy" animation="spin-pulse" />
            </button>
            <button v-if="item" type="button" class="btn btn-danger" @click="resetSearch">
              <v-icon name="co-trash" />
            </button>
          </div>
        </div>
      </form>
    </div>
    <table-data :item="item" :loading="emailLoading" @send-email="handleClickOnEmail" />
  </div>
</template>
