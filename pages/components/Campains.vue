<script setup>
import { ref } from 'vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
const desserts = ref([
    {
        name: "Frozen Yogurt",
        calories: 159,
    },
    {
        name: "Ice cream sandwich",
        calories: 237,
    },
    {
        name: "Eclair",
        calories: 262,
    },
    {
        name: "Cupcake",
        calories: 305,
    },
    {
        name: "Gingerbread",
        calories: 356,
    },
    {
        name: "Jelly bean",
        calories: 375,
    },
    {
        name: "Lollipop",
        calories: 392,
    },
    {
        name: "Honeycomb",
        calories: 408,
    },
    {
        name: "Donut",
        calories: 452,
    },
    {
        name: "KitKat",
        calories: 518,
    },
]);
</script>

<template>
    <div>

    <h1>Detalles de la campana</h1>
    <input type="file" @change="handleFileUpload" accept=".csv" />
    <v-row class="month-table">       
        <v-col cols="12" sm="12">
            <UiChildCard title="Header Fixed Table">
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
                        <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                            <td>{{ item.telefono }}</td>
                            <td>{{ item.deuda }}</td>
                            <td>{{ item.porcentaje }}</td>
                            <td>
                            <button @click="showDetails(row)">Detalles</button>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </UiChildCard>
        </v-col>
    </v-row>
</div>
</template>

<script setup lang="ts">

</script>

