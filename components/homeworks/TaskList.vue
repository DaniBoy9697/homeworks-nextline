<template>
  <div class='py-8 max-w-full bg-white text-gray-700'>
    <div
      class='
        container max-w-full
      '
    >
      <div class='w-full md:w-12/12'>
        <div class='flex md:px-8 border-b pb-5'>
          <span class='text-green-500 flex-none mt-1'>
            <grid-plus-icon></grid-plus-icon>
          </span>
          <h2 class='md:px-5 flex items-center text-3xl flex-auto'>
            <b>Task Manager</b>
          </h2>
          <div class='flex flex-initial w-48 justify-end'>
            <NuxtLink
              to='/tareas/nueva'
              class='text-green-600 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4
              focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
               mb-2 dark:border-green-400 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-600
                dark:focus:ring-green-700'
            >
              Crear Tarea
            </NuxtLink>
          </div>
        </div>
        <div class='flex container md:px-8'>
          <h2 class='md:px-5 mt-8 flex items-center justify-center text-2xl flex-auto'>
            <b>Lista de tareas</b>
          </h2>
        </div>
        <div
          class='
            shadow-lg
            w-full
            bg-white
            dark:bg-gray-700
            relative
            overflow-hidden
          '
        >
          <a href='#' class='w-full h-full block'> </a>
        </div>
      </div>
      <div class='flex items-center w-full md:w-1/2 space-x-4'>
        <div class='w-1/2'></div>
      </div>
    </div>
    <div class='max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
      <div class='overflow-hidden sm:rounded-md mt-5'>
        <template v-if='tasksList.length === 0'>
          <p>
            Cargando...
          </p>
        </template>
        <ul v-else>
          <li
            v-for='(task, index) in tasksList'
            :key='index'
          >
            <div
              class='
                  block
                  hover:bg-gray-100
                  focus:outline-none focus:bg-gray-50
                  transition
                  duration-150
                  ease-in-out
                '
            >
              <div class='px-4 py-4 sm:px-6'>
                <div class="container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row max-w-7xl">
                  <div class="relative flex flex-col md:flex-row">
                      <div
                        class='text-md leading-5 font-medium text-black truncate'
                      >
                        {{ task.title }}
                      </div>
                  </div>
                  <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                    <button
                      class='ml-2 flex-shrink-0 flex'
                      @click='deleteTask(task.id)'
                    >
                        <span
                          class='
                            px-5
                            py-2
                            inline-flex
                            text-xs
                            leading-5
                            font-semibold
                            rounded-full
                            bg-red-100
                            text-red-800
                            transform hover:scale-110
                          '
                        >
                          <div class="w-4 mr-2 mt-0.5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </div>
                          Eliminar Tarea
                        </span>
                    </button>
                    <NuxtLink
                      class='ml-2 flex-shrink-0 flex'
                      :to='`/tareas/${task.id}/editar`'>
                        <span
                          class='
                            px-5
                            py-2
                            inline-flex
                            text-xs
                            leading-5
                            font-semibold
                            rounded-full
                            bg-green-100
                            text-green-800
                            transform hover:scale-110
                          '
                        >
                        <div class="w-4 mr-2 mt-0.5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                          Editar Tarea
                        </span>
                    </NuxtLink>
                    <NuxtLink
                      class='ml-2 flex-shrink-0 flex'
                      :to='`/tareas/${task.id}/`'>
                        <span
                          class='
                            px-5
                            py-2
                            inline-flex
                            text-xs
                            leading-5
                            font-semibold
                            rounded-full
                            bg-blue-100
                            text-blue-800
                            transform hover:scale-110
                          '
                        >
                        <div class="w-4 mr-2 mt-0.5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div> Ver
                        </span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getErrorDetails } from '@/assets/utils/index.js'
import GridPlusIcon from '~/components/icons/GridPlus.vue'

export default {
  name: 'CategoriesList',
  components: {
    GridPlusIcon
  },
  data() {
    return {
      token:'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd',
      tasksList: [],
    }
  },
  mounted() {
    this.getTasksData()
  },
  methods: {
    async getTasksData() {
      this.$vs.loading({ scale: 0.65, type: 'radius' })
      try {
        this.tasksList = await this.$store.dispatch('tasks/getTaskList', this.token)
      } catch (err) {
        let res = ''
         if (err.response) {
          res = getErrorDetails(err.response.data.errors)
        } else {
          res = err.message
        }
        this.$vs.notify({
          title: 'Ops..',
          text: `${res}`,
          color: 'danger',
          position: 'top-right'
        })
      } finally {
        this.$vs.loading.close()
      }
    },
    async deleteTask(id) {
      try {
        this.$vs.loading({ scale: 0.65, type: 'radius' })
        await this.$store.dispatch('tasks/deleteTask', id)
      } catch (err) {
         let res = ''
         if (err.response) {
          res = getErrorDetails(err.response.data.errors)
        } else {
          res = err.message
        }
        this.$vs.notify({
          title: 'Ops..',
          text: `${res}`,
          color: 'danger',
          position: 'top-right'
        })
      } finally {
        this.$vs.loading.close()
        this.getTasksData()
      }
    },
  }
}
</script>

<style scoped>

</style>
