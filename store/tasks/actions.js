import axios from 'axios'

export default {
    /**
     * Método de obtención de tarea.
     *
     * @returns {Promise<Object>}
     */
    // eslint-disable-next-line no-unused-vars
    getTask({ commit }, id) {
      return new Promise((resolve, reject) => {
        const token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'
        const url = `/tasks/${id}?token=${token}`
       this.$axios
          .get(url)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     * Método de obtención de lista de tareas.
     *
     * @returns {Promise<Object>}
     */
    // eslint-disable-next-line no-unused-vars
    getTaskList({commit},token){
      return new Promise((resolve, reject) =>{
       //
        const url = `/tasks?token=${token}`
        const params = new URLSearchParams()
        params.append('token', '1342')
        console.log(params)
        this.$axios
          .get(url, params)
          .then((response) =>{
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
      },
    /**
     * Actualiza la información de una tarea en la bd
     */
    updateTask({ commit }, { data, id }) {
      return new Promise((resolve, reject) => {
        const url = `/profile/${id}/`
        this.$axios
          .patch(url, data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     * Método de eliminación de tarea.
     *
     * @returns {Promise<Object>}
     */
    // eslint-disable-next-line no-unused-vars
    deleteTask({ commit }, id) {
      return new Promise((resolve, reject) => {
        const url = `/profile/${id}/`
        axios
          .get(url)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  }
