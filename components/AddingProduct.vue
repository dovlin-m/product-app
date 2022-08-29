<template>
  <form class="add-product" @submit.prevent="onSubmit">
    <div class="name-product mb-4">
      <p>
        Наименование товара
      </p>
      <div class="ball" />
      <textarea
        :class="{ 'textarea-invalid': ($v.name.$dirty && !$v.name.required) }"
        v-model="name"
        type="text"
        size="40"
        placeholder="Введите наименование товара"
      />
      <small
        v-if="$v.name.$dirty && !$v.name.required"
        class="invalid">Поле является обязательным</small>
    </div>

    <div class="product-description mb-4">
      <p>
        Описание товара
      </p>
      <div class="ball" />
      <textarea
        v-model="description"
        type="text"
        size="40"
        placeholder="Введите описание товара"
      />
    </div>

    <div class="link-image mb-4" @submit.prevent="onSubmit">
      <p>
        Ссылка на изображение товара
      </p>
      <div class="ball" />
      <textarea
        :class="{ 'textarea-invalid': ($v.image.$dirty && !$v.image.required) }"
        v-model="image"
        type="text"
        placeholder="Введите ссылку"
      />
      <small
        v-if="$v.image.$dirty && !$v.image.required"
        class="invalid">Поле является обязательным</small>
    </div>

    <div class="price">
      <p>
        Цена товара
      </p>
      <div class="ball" />
      <textarea
        :class="{ 'textarea-invalid': ($v.price.$dirty && !$v.price.required) }"
        v-model="price"
        placeholder="Введите цену"
        @input="thousandthSeparationMask"
      />
      <small
        v-if="$v.price.$dirty && !$v.price.required"
        class="invalid">Поле является обязательным</small>
      <button
        v-bind:class="{ active: !$v.$invalid }"
        type="submit"
        class="btn"
      >
        Добавить товар
      </button>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {

  name: 'AddingProduct',

  validations: {
    name: { required },
    image: { required },
    price: { required }
  },

  data: () => ({
    name: '',
    image: '',
    price: '',
    description: ''
  }),

  methods: {
    ...mapMutations(['addProduct']),

    onSubmit () {
      const index = localStorage.length
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.addProduct({
          id: index,
          name: this.name,
          image: this.image,
          price: this.price,
          description: this.description
        }, this.index)
        this.$v.$reset()
      }
      this.name = this.image = this.price = this.description = ''
    },

    thousandthSeparationMask () {
      const numericFormat = new Intl.NumberFormat('ru-RU')
      this.price = numericFormat.format(Number(this.price.replace(/\s/g, '')))
      if (!/^[\d\s]+$/.test(this.price)) {
        this.price = null
      }
    }
  }
}
</script>

<style lang="scss">
.add-product {
  margin-right: 16px;
  margin-bottom: 68px;
  padding: 24px;
  width: 284px;
  height: 392px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.name-product {
  position: relative;

  .ball {
    top: 1px;
    left: 95px;
  }
}

.product-description {
  .ball {
    display: none;
  }

  textarea {
    height: 98px;
  }
}

.link-image {
  position: relative;

  .ball {
    top: 1px;
    left: 134px;
  }
}

.price {
  position: relative;

  .ball {
    top: 1px;
    left: 53px;
  }
}

.invalid {
  position: absolute;
  left: 0;
  top: 58px;

  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
}

.mb-0 {
  margin-bottom: 0;
}

.btn {
  margin-top: 24px;
  background: #EEEEEE;
  border-radius: 10px;
  width: 100%;
  height: 36px;
  border: none;
  color: #B4B4B4;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.02em;
  cursor: no-drop;
}

.textarea-invalid {
  height: 24px;
  width: 266px;
  border: 1px solid #FF8484;
}

.active {
  color: #FFFFFF;
  background: #7BAE73;
  cursor: pointer;
}

form {
  position: relative;

  p {
    margin-bottom: 4px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
  }

  .ball {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #FF8484;
    border-radius: 4px;
  }

  textarea {
    padding-left: 16px;
    padding-top: 10px;
    height: 26px;
    width: 268px;
    resize: none;
    border: none;
    font-size: 12px;
    line-height: 15px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #B4B4B4;
  }
}
</style>
