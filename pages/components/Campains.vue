<script setup>
import { ref } from 'vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Details from '@/components/ui-components/campain/Details.vue';
import json_data from '@/components/ui-components/campain/data.json';
const data_clients =  json_data
function showDetails() {
        showModal = true;
      }
const isOpen = ref(false)
</script>

<template>
    <div>   

    <v-col cols="12">
                    <UiChildCard title="Campaña">
                        <Details />
                    </UiChildCard>
        </v-col>
    <v-row class="month-table">       
        <v-col cols="12" sm="12">
            <UiChildCard title="Detalles de la Campaña">   
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Deuda</th>
                            <th>%</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data_clients" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.mobile }}</td>
                            <td>{{ item.amount }}</td>
                            <td>{{ item.percentage }} % </td>
                            <td>
                                <button type="button"  @click="showDetails(item)" class="v-btn v-theme--light text-primary v-btn--density-default v-btn--size-default v-btn--variant-tonal">
                                    <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator="">Detalles</span><!----><!----></button>                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </UiChildCard>
        </v-col>
    </v-row>
<!-- Modal para mostrar detalles -->
<div v-if="showModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            Detalles de 
          </div>
          <div class="modal-body">
            <p><strong>Ciudad:</strong></p>
            <p><strong>Barrio:</strong></p>
            <p><strong>Edad:</strong> </p>
          </div>
          <button class="close-btn" @click="closeModal">Cerrar</button>
        </div>
      </div>


</div>
</template>

<script>
  export default {
    data () {
      return {
        showModal: false,
      }
    },
  }
</script>

