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
            {{ componentInfo.title }}
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
        <ValidationObserver
          v-slot='{ invalid }'
        >
          <div class='mb-5'>
            <label
              for='name'
              class='mb-3 block text-base font-medium text-[#07074D]'
            >
              Titulo
            </label>
            <ValidationProvider
              v-slot='{ errors }'
              name='titulo'
              rules='required|max:120|min:3'
            >
              <input
                v-model='taskData.title'
                name='name'
                class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                @keyup.enter='submitTask'
              >
              <span class='block text-red-700 text-xs mt-1 ml-1 h-5'>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <label
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Descripción
            </label>

            <ValidationProvider
              v-slot='{ errors }'
              name='Descripción'
              rules='min:4|max:100'
            >
              <textarea
                v-model='taskData.description'
                rows="4"
                placeholder='En este tarea haremos...'
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
              </textarea>
              <span class='block text-red-700 text-xs mt-1 ml-1 h-5'>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <label
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Comentarios
            </label>

            <ValidationProvider
              v-slot='{ errors }'
              name='Comentarios'
              rules='min:4|max:50'
            >
              <textarea
                v-model='taskData.comments'
                rows="4"
                placeholder='Ingresa tus comentarios...'
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
              </textarea>
              <span class='block text-red-700 text-xs mt-1 ml-1 h-5'>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Tags
            </label>
            <ValidationProvider
              v-slot='{ errors }'
              name='Tags'
              rules='min:4|max:50'
            >
              <input
                v-model='taskData.tags'
                name='tags'
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
              <span class='block text-red-700 text-sm mt-1 ml-1 h-5'>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <div class="gap-x-16 mb-4 md:flex justify-between">
              <div class="w-1/2 mb-4 md:mr-2 md:mb-0">
                <label class="mb-3 block text-base font-medium text-[#07074D]">
                  Estatus
                </label>
                <ValidationProvider
                  v-slot='{ errors }'
                  name='Completada'
                  rules='required'
                >
                <div class="flex items-center w-full mb-12">
                  <label
                    for="toogleA"
                    class="flex items-center cursor-pointer"
                  >
                    <div class="relative">
                      <input id="toogleA" type="checkbox" class="sr-only" v-model="taskData.is_completed"/>
                      <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                      <div class="dot absolute w-6 h-6 bg-gray-100 rounded-full shadow -left-1 -top-1 transition"></div>
                    </div>
                    <div class="ml-3 text-gray-700 font-medium">
                    Completada
                    </div>
                  </label>
                </div>
                  <span class='block text-red-700 text-xs mt-1 ml-1'>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="w-1/2 md:ml-2">
                <label class="mb-3 block text-base text center font-medium text-[#07074D]">
                  Fecha
                </label>
                <v-date-picker class="inline-block h-full" v-model="taskData.due_date">
                  <template v-slot="{ inputValue, togglePopover }">
                    <div class="flex items-center">
                      <button
                        class="p-2 bg-green-100 border border-green-200 hover:bg-green-200 text-green-600 rounded-l focus:bg-green-500 focus:text-white focus:border-green-500 focus:outline-none"
                        @click="togglePopover()"
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
                        :value="inputValue"
                        class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                        readonly
                      />
                    </div>
                  </template>
                </v-date-picker>
              </div>
            </div>
          </div>
          <div>
            <div class='flex items-center mb-5'>
              <button
                type='button'
                :disabled='invalid'
                class='text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500
                 dark:hover:bg-green-600 dark:focus:ring-green-600'
                :class="{ 'opacity-25 cursor-not-allowed': invalid }"
                @click='submitTask'
              >
                {{ componentInfo.title }}
              </button>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { getErrorDetails } from '@/assets/utils/index.js'
import GridPlusIcon from '~/components/icons/GridPlus.vue'

const TYPE_VIEW = {
  'EDIT': 'edit',
  'CREATE': 'create'
}
export default {
  components: {
    GridPlusIcon
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
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
      componentInfo: {
        title: ''
      },
    }
  },
  created() {
    this.setComponentInfo()
  },
  mounted() {
    if (this.type === TYPE_VIEW.EDIT) {
      this.getTaskData()
    }
  },
  methods: {
    setComponentInfo() {
      if (this.type === TYPE_VIEW.EDIT) {
        this.componentInfo.title = 'Editar tarea'
      } else {
        this.componentInfo.title = 'Crear tarea'
      }

    },
    async getTaskData() {
      try {
        this.$vs.loading({ scale: 0.65, type: 'radius' })
        this.dataReturned = await this.$store.dispatch('tasks/getTask', this.$route.params.idTarea)
        this.taskData = this.dataReturned[0]
        // if(){} fecha or input chewck box
        console.log(this.taskData)
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
    /**
     * Create or edit an existen category
     * @returns {Promise<void>}
     */
    async submitTask() {
      console.log(this.taskData)
      try {
        this.$vs.loading({ scale: 0.65, type: 'radius' })
        const payload = {
          data: this.taskData,
        }
        let resultMsg = ""

        if (this.type === TYPE_VIEW.EDIT) {
          payload.id = this.$route.params.idTask
          resultMsg = "Tarea actualizada"
          await this.$store.dispatch('tasks/updateTask', payload)
        } else {
          resultMsg = "Tarea creada"
          await this.$store.dispatch('tasks/createTask', payload)
        }
        this.$router.push({ path: `/` })
        this.$vs.notify({
          color: 'success',
          title: 'Éxito',
          text: resultMsg,
          position: 'top-right'
        })
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
    }
  }
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
