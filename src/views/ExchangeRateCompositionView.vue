<template>
  <div>
    <h1>Taux de change des devises (API Composition)</h1>
    <table>
      <thead>
        <tr>
          <th>Devise</th>
          <th>Symbole</th>
          <th>Taux de change</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="devise in devises" :key="devise.code">
          <td>{{ devise.nom }}</td>
          <td>{{ devise.symbole }}</td>
          <td>{{ devise.taux }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const devises = ref([
  { code: 'USD', nom: 'Dollar américain', symbole: '$', taux: 1.00 },
  { code: 'EUR', nom: 'Euro', symbole: '€', taux: 0.92 },
  { code: 'GBP', nom: 'Livre sterling', symbole: '£', taux: 0.79 },
  // Ajoutez d'autres devises ici
])
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>