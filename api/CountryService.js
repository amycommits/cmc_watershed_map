import axios from 'axios'
// curl 'https://countries.trevorblades.com/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://countries.trevorblades.com' --data-binary '{"query":"# Write your query or mutation here\n{ countries {\n  name,\n  continent {\n    name\n  }\n} }"}' --compressed
const apiClient = axios.create({
  url: 'https://countries.trevorblades.com/',
  data: {
    query: `
    query { countries {
            name,
            continent {
            name
          }
        }
      }
     `
  }
})

export default {
  fetchCountries() {
    return apiClient.post().then((countries) => {
      console.log('???')
      console.log(countries)
    })
  }
}
