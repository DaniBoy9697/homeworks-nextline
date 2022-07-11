<template>
  <div class='py-8 max-w-full bg-white text-gray-700'>
    <div
      class='container max-w-full'
    >
      <div class='w-full md:w-12/12'>
        <div class='flex md:px-8 border-b pb-5'>
          <span class='text-green-500 flex-none mt-1'>
            <grid-plus-icon></grid-plus-icon>
          </span>
          <h2 class='md:px-5 flex items-center text-4xl font-bold flex-auto'>
            Detalles Tarea
          </h2>
          <div class='flex flex-initial w-48 justify-end'>
            <NuxtLink
                to='/'
                class='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4
                focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600
                dark:focus:ring-red-900'>
                Regresar
            </NuxtLink>
          </div>
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
        <div class='w-1/2'>
        </div>
      </div>
    </div>
    <div class='max-w-3xl mx-auto  lex items-center justify-center px-12 py-5'>
      <div class='mx-auto w-full'>
          <div class='mb-5'>
            <label
              for='name'
              class='mb-3 block text-base font-medium text-[#07074D]'
            >
              Titulo
            </label>
            <label
              for='name'
              class='mb-3 block text-base font-medium text-[#07074D]'
            >
              {{ taskData.title }}
            </label>
          </div>
          <div class="mb-5">
            <label
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Descripción
            </label>
            <label
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              {{ taskData.description }}
            </label>
          </div>
          <div class="mb-5">
            <label
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Comentarios
            </label>
            <label
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
                {{taskData.comments}}
            </label>
          </div>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Tags
            </label>
             <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              {{taskData.tags}}
            </label>
          </div>
          <div class="mb-5">
            <div class="gap-x-16 mb-4 md:flex justify-between">
              <div class="w-1/2 mb-4 md:mr-2 md:mb-0">
                <label class="mb-3 block text-base font-medium text-[#07074D]">
                  Estatus
                </label>
              </div>
              <div class="w-1/2 md:ml-2">
                <label class="mb-3 block text-base text center font-medium text-[#07074D]">
                  Fecha
                </label>
                  <template>
                    <div class="flex items-center">
                      <button
                        class="p-2 bg-green-100 border border-green-200 hover:bg-green-200 text-green-600 rounded-l focus:bg-green-500 focus:text-white focus:border-green-500 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          class="w-4 h-4 fill-current"
                        >
                          <path
                            d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                          ></path>
                        </svg>
                      </button>
                      <input
                        :value="taskData.due_date"
                        class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                        readonly
                      />
                    </div>
                  </template>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getErrorDetails } from '@/assets/utils/index.js'
import GridPlusIcon from '~/components/icons/GridPlus.vue'

export default {
  components: {
    GridPlusIcon
  },
  data() {
    return {
      taskId:'',
      showModules: false,
      dataReturned:'',
      taskData: {
        id:'',
        title: '',
        description:'',
        is_completed:false,
        tags:'',
        due_date: new Date(),
        comments:'',
      },
    }
  },
  mounted() {
    this.getTaskData()
  },
  methods: {
    async getTaskData() {
      try {
        this.$vs.loading({ scale: 0.65, type: 'radius' })
        this.dataReturned = await this.$store.dispatch('tasks/getTask', this.$route.params.idTarea)
        this.taskData = this.dataReturned[0]
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
  }
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
