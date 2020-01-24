<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Continent</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in countries" :key="country.name">
          <td>{{ country.name }}</td>
          <td>{{ country.continent.name }}</td>
        </tr>
      </tbody>
    </table>
    <h1>The raw info</h1>
    <pre>
      {{ countries }}
    </pre>
  </div>
</template>
<script>
export default {
  name: 'CountryInfo',
  props: {
    countries: {
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>
