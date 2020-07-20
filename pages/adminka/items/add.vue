<template>
  <div class="add-item-a">
    <div class="add-item-a__top">
      <section-title>
        Добавить товар
      </section-title>

      <div class="add-item-a__btns">
        <v-btn
          class="btn-add"
          :loading="formLoad"
          @click="submit()">
          Сохранить
        </v-btn>
        <span
          v-if="answer.status !== null"
          class="add-item-a__status"
          :class="[{ 'add-item-a__status--error' : answer.status === 'error' }, { 'add-item-a__status--success' : answer.status === 'success' }]"
        >
          {{ answer.text }}
        </span>
      </div>
    </div>

    <div class="add-item-a__wrap">

      <div class="add-item-a__line">
        <label
          for="name"
          class="add-item-a__label"
        >
          Название
        </label>
        <v-input
          id="name"
          :value="name"
          :error="errors.name"
          holder="Введите название товара"
          @changeInput="name = $event, clearError('name')"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="link"
          class="add-item-a__label"
        >
          Ссылка
        </label>
        <v-input
          id="link"
          :value="link"
          :error="errors.link"
          holder="Укажите ссылку на товар"
          @changeInput="link = $event, clearError('link')"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="price"
          class="add-item-a__label"
        >
          Цена ( price * 2 + delivery * $ )
        </label>
        <v-input
          id="price"
          :value="price"
          :error="errors.price"
          holder="Укажите цену товара"
          @changeInput="price = $event, clearError('price')"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="category"
          class="add-item-a__label"
        >
          Категория
        </label>
        <v-select
          id="category"
          class="slct--primary"
          :value="category && category.name ? category.name : category"
          :error="errors.category"
          :array="categories"
          holder="Укажите категорию товара"
          @changeSelect="category = $event, clearError('category')"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="material"
          class="add-item-a__label"
        >
          Материал
        </label>
        <v-input
          id="material"
          :value="material"
          :error="errors.material"
          holder="Укажите материал товара"
          @changeInput="material = $event, clearError('material')"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="popular"
          class="add-item-a__label"
        >
          На главной (популярное)
        </label>
        <v-check
          id="popular"
          :value="popular"
          @changeCheck="popular = $event"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="publiced"
          class="add-item-a__label"
        >
          Опубликовано
        </label>
        <v-check
          id="publiced"
          :value="publiced"
          @changeCheck="publiced = $event"
        />
      </div>

      <div class="add-item-a__line">
        <label
          class="add-item-a__label"
        >
          Изображения
        </label>
        <label
          for="upload"
          class="upload-image">
          <input
            id="upload"
            type="file"
            @change="uploadFile"
            accept=".jpg,.jpeg,.png"
          />
          Добавить
        </label>
        <div class="add-item-a__imgs">
          <div
            class="add-item-a__img"
            v-for="(item, i) in previews"
            :key="i"
          >
            <div
              class="add-item-a__img-delete"
              @click="deleteFile(i)"
              title="Удалить">
              x
            </div>
            <img
              :src="item.image">
            <div class="add-item-a__cover">
              <v-check
                :id="`cover_${i}`"
                :value="previews[i].cover"
                @changeCheck="changeCover(i)"
              >
                Cover
              </v-check>
            </div>
          </div>
        </div>
      </div>

      <section-title
        :tag="2"
        class="add-item-a__block">
        SEO
      </section-title>

      <div class="add-item-a__line">
        <label
          for="title"
          class="add-item-a__label"
        >
          Title
        </label>
        <v-txt
          id="title"
          :value="title"
          holder="Введите title товара"
          @changeInput="title = $event"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="description"
          class="add-item-a__label"
        >
          Description
        </label>
        <v-txt
          id="description"
          :value="description"
          holder="Введите description товара"
          @changeInput="description = $event"
        />
      </div>

      <div class="add-item-a__line">
        <label
          for="keywords"
          class="add-item-a__label"
        >
          Keywords
        </label>
        <v-txt
          id="keywords"
          :value="keywords"
          holder="Введите keywords товара"
          @changeInput="keywords = $event"
        />
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SectionTitle from '~/components/admin/shared/section-title'

export default {
  name: 'AdminkaAddItem',
  layout: 'admin',
  components: {
    SectionTitle
  },
  data () {
    return {
      name: '',
      link: '',
      price: '',
      category: '',
      material: '',
      popular: false,
      publiced: false,
      title: '', // SEO
      description: '', // SEO
      keywords: '', // SEO
      previews: [],
      formLoad: false,
      answer: {
        status: null,
        text: ''
      },
      errors: {
        name: {
          status: false,
          text: ''
        },
        link: {
          status: false,
          text: ''
        },
        price: {
          status: false,
          text: ''
        },
        category: {
          status: false,
          text: ''
        },
        material: {
          status: false,
          text: ''
        }
      }
    }
  },
  computed: {
    ...mapState('categories', ['categories'])
  },
  methods: {
    ...mapActions('items', ['addItem', 'addItemImage']),

    clearError (type) {
      this.errors[type].status = false
      this.errors[type].text = ''
    },

    // Сохранить
    async submit () {
      if (!this.name) {
        this.errors.name.status = true
        this.errors.name.text = 'Введите название'
        return false
      }
      if (!this.link) {
        this.errors.link.status = true
        this.errors.link.text = 'Введите ссылку'
        return false
      }
      if (!this.category) {
        this.errors.category.status = true
        this.errors.category.text = 'Выберите категорию'
        return false
      }
      if (!this.price) {
        this.errors.price.status = true
        this.errors.price.text = 'Укажите цену'
        return false
      }
      if (!this.material) {
        this.errors.material.status = true
        this.errors.material.text = 'Укажите материал'
        return false
      }

      this.formLoad = true
      const response = await this.addItem({
        name: this.name,
        link: this.link,
        category_id: this.category.id,
        price: this.price,
        about: '',
        material: this.material,
        on_main: this.popular,
        public: this.publiced,
        title: this.title,
        description: this.description,
        keywords: this.keywords
      })
      this.formLoad = false

      if (response && response.type === 'error') {
        alert(response.message)
        return false
      }

      let cover = null
      const form = new FormData()
      this.previews.forEach((item, i) => {
        form.append(`file_${i}`, item.file)
        if (item.cover)
          cover = i
      })

      this.formLoad = true
      const response2 = await this.addItemImage({
        id: response.id,
        cover,
        form
      })
      this.formLoad = false

      if (response2 && response2.type === 'error') {
        this.answer.status = 'error'
        this.answer.text = response2 && response2.message
        return false
      }
      this.answer.status = 'success'
      this.answer.text = response2 && response2.message
      setTimeout(() => {
        this.answer.status = null
        this.answer.text = ''
      }, 5000)

      this.clearForm()
      // this.$router.push('/adminka/items')
    },

    clearForm () {
      this.name = ''
      this.link = ''
      this.price = ''
      this.category = ''
      this.material = ''
      this.popular = false
      this.publiced = false
      this.title = ''
      this.description = ''
      this.keywords = ''
      this.previews = []
      this.formLoad = false
      // this.answer = {
      //   status: null,
      //   text: ''
      // }
      this.errors = {
        name: {
          status: false,
          text: ''
        },
        link: {
          status: false,
          text: ''
        },
        price: {
          status: false,
          text: ''
        },
        category: {
          status: false,
          text: ''
        },
        material: {
          status: false,
          text: ''
        }
      }
    },

    changeCover (i) {
      this.previews.forEach(item => {
        item.cover = false
      })
      this.previews[i].cover = true
    },

    // Загрузка изображений
    uploadFile (e) {
      const file = e.target.files[0]
      const img = new Image()
      img.onload = (image) => {
        this.previews.push({ file, image: img.src, cover: false })
      }

      img.src = URL.createObjectURL(file)
      URL.revokeObjectURL(file)
    },

    // Удалить изображение
    deleteFile (i) {
      this.previews.splice(i, 1)
    }
  }
}
</script>
