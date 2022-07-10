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
        axios
          .patch(url, data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  } 