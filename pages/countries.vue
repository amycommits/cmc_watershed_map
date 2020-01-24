<template>
  <div>
    <country-info :countries="countries" />
  </div>
</template>
<script>
import axios from 'axios'
import CountryInfo from '@/components/CountryInfo'
export default {
  components: {
    CountryInfo
  },
  data() {
    return {
      countries: []
    }
  },
  asyncData(context) {
    return axios({
      method: 'POST',
      url: 'https://countries.trevorblades.com/',
      data: {
        query: `
      { countries {
            name,
            continent {
            name
          }
        }
      }
     `
      }
    }).then((result) => {
      return { countries: result.data.data.countries }
    })
  }
}
</script>
