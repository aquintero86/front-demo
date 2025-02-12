<template>
    <div>
      <h1>Detalles de la campana</h1>
      
      <input type="file" @change="handleFileUpload" accept=".csv" />
  
      <table v-if="data.length > 0">
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
          <tr v-for="(row, index) in data" :key="index">
            <td>{{ row.nombre }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.telefono }}</td>
            <td>{{ row.deuda }}</td>
            <td>{{ row.porcentaje }}</td>
            <td>
              <button @click="showDetails(row)">Detalles</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal para mostrar detalles -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            Detalles de {{ selectedRow.nombre }}
          </div>
          <div class="modal-body">
            <p><strong>Ciudad:</strong> {{ selectedRow.ciudad }}</p>
            <p><strong>Barrio:</strong> {{ selectedRow.barrio }}</p>
            <p><strong>Edad:</strong> {{ selectedRow.edad }}</p>
          </div>
          <button class="close-btn" @click="closeModal">Cerrar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "ViewGrid",
    data() {
      return {
        data: [], // Array para almacenar los datos del CSV
        showModal: false, // Estado del modal
        selectedRow: {} // Fila seleccionada para mostrar detalles
      };
    },
    methods: {
      // Manejar la carga del archivo
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          Papa.parse(file, {
            header: true,
            complete: (results) => {
              this.data = results.data.map((row) => ({
                nombre: row.nombre,
                email: row.email,
                telefono: row.telefono,
                deuda: row.deuda,
                porcentaje: row["%"],
                ciudad: row.ciudad,
                barrio: row.barrio,
                edad: row.edad
              }));
            }
          });
        }
      },
      // Mostrar el modal con los detalles
      showDetails(row) {
        this.selectedRow = row;
        this.showModal = true;
      },
      // Cerrar el modal
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f9f9f9;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
  button {
    padding: 5px 10px;
    background-color: #007BFF;
    color: rgb(75, 6, 81);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
  }
  .modal-header {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .close-btn {
    background-color: red;
    border: none;
    color: white;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>