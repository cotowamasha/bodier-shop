import * as TYPES from './types'
import functions from '~/utils/functions'

const namespaced = true

const state = () => ({
})

const actions = {
  // Добавить товар
  async addItem({ commit }, data) {
    try {
      const response = await this.$api.post('/item', data)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  },

  // Добавить картинку к товару
  async addItemImage({ commit }, data) {
    try {
      const response = await this.$api.post('/item/image', data.form, {
        params: {
          id: data.id,
          cover_id: data.cover
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  },

  // Получить все товары
  async getItems({ commit }, data) {
    try {
      const response = await this.$api.get('/items')

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  }
}

const mutations = {
}

const getters = {}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters,
}
