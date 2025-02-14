<script setup lang="ts">
import { ref } from 'vue';
const alert = ref(true);
</script>
<template>
   <div>
    <v-col cols="12">
                    <UiChildCard title="Campaña">
                        <v-table fixed-header height="300px">
                        <thead>
                            <tr> <th>Identificador Campaña</th> </tr>
                            <tr> <th>Identificador Campaña</th> </tr>
                            <tr> <th>Total Cartera</th> </tr>
                            <tr> <th>Total Cartera recuperable</th> </tr>
                            <tr> <th><input type="file" @change="" accept=".csv" /></th> </tr>
                        </thead>
                    </v-table>
                    </UiChildCard>
        </v-col>
    <v-alert
      v-model="alert"
      border="start"
      variant="tonal"
      closable
      close-label="Close Alert"
      color="primary"
      title="Atencion"
    >
      Estos valores pueden cambiar en cualquier momento
    </v-alert>
    <div
      v-if="!alert"
    >
      <v-btn
        color="primary"
        @click="alert = true" flat>
        ?
      </v-btn>
    </div>
  </div>
</template>
