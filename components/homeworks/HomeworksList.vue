<template>
  <div class='py-8 max-w-full bg-white text-gray-700 shadow'>
    <div
      class='
        container
      '
    >
      <div class='w-full md:w-12/12'>
        <div class='flex container md:px-8'>
          <span class='text-green-500 flex-none'>
            <grid-plus-icon></grid-plus-icon>
          </span>
          <h2 class='md:px-5 flex items-center text-3xl flex-auto'>
            <b>Categorías</b>
          </h2>
          <div class='flex flex-initial w-48 justify-end'>
            <NuxtLink
              to='/administracion/catalogos/categorias/nuevo'
              class='text-green-600 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4
              focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
               mb-2 dark:border-green-400 dark:text-green-400 dark:hover:text-white dark:hover:bg-green-600
                dark:focus:ring-green-700'
            >
              Crear categoría
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
        <div class='w-1/2'></div>
      </div>
    </div>
    <div class='max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
      <div class='overflow-hidden sm:rounded-md mt-5'>
        <template v-if='categoriesList.length === 0'>
          <p>
            Cargando...
          </p>
        </template>
        <ul v-else>
          <li
            v-for='(category, index) in categoriesList'
            :key='index'
          >
            <div
              class='
                  block
                  hover:bg-gray-50
                  focus:outline-none focus:bg-gray-50
                  transition
                  duration-150
                  ease-in-out
                '
            >
              <div class='px-4 py-4 sm:px-6'>
                <div class='flex items-center justify-between'>
                  <div
                    class='text-sm leading-5 font-medium text-blue-600 truncate'
                  >
                    {{ category.name }}
                  </div>
                  <NuxtLink
                    class='ml-2 flex-shrink-0 flex'
                    :to='`/administracion/catalogos/categorias/${category.id}/editar`'>
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
                        '
                      >
                        Editar categoría
                      </span>
                  </NuxtLink>
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
import GridPlusIcon from '~/components/icons/GridPlus.vue'

export default {
  name: 'CategoriesList',
  components: {
    GridPlusIcon
  },
  data() {
    return {
      categoriesList: [],
      dataReturned: {}
    }
  },
  mounted() {
    this.getCategoriesData()
  },
  methods: {
    //async getCategoriesData() {
    //  this.$vs.loading({ scale: 0.65, type: 'radius' })
    //  try {
    //    this.dataReturned = await this.$store.dispatch('categories/getCategories')
    //    this.categoriesList = this.dataReturned
    //    this.$vs.loading.close()
    //  } catch (err) {
    //    this.$vs.loading.close()
    //  }
   // }
   getCategoriesData(){
     this.categoriesList = [{id:1, name:"categoria1"},{id:2, name:"categoria2"}]
   },
  }
}
</script>

<style scoped>

</style>