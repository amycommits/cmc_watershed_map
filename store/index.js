import CountryService from '@/api/CountryService'

export const actions = {
  setCountries({ commit }) {
    CountryService.fetchCountries().then((results) => {
      return results.data
    })
  }
}
