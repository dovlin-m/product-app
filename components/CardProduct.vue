<template>
  <div :id="index" class="product-card col-lg-3">
    <button class="remove" @click="deleteProduct">
      <img src="@/static/basket.svg" height="16" width="16">
    </button>
    <img :src="product.image" width="332" height="200">
    <div class="pa-4">
      <h3 class="fs-20 mb-4">
        {{ product.name }}
      </h3>
      <p class="lh-20 mb-8">
        {{ product.description }}
      </p>
      <h2>{{ product.price }} руб.</h2>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CardProduct',

  props: {
    product: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  methods: {
    ...mapMutations(['removeProduct']),

    deleteProduct () {
      this.removeProduct(this.index)
    }
  }
}
</script>

<style lang="scss">
.product-card {
  position: relative;
  margin-right: 16px;
  margin-bottom: 16px;
  width: 332px;
  height: 423px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  p {
    height: 80px;
  }

  .remove {
    display: none;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);

    .remove {
      cursor: pointer;
      position: absolute;
      width: 32px;
      height: 32px;
      left: 308px;
      top: -8px;

      border: none;
      background: #FF8484;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: block;

      &:hover {
        background: #f76d6d;
        transform: scale(1.1378);
      }
      &:active {
        background: #FF8484;
        transform: scale(1.1378);
        border: 2px solid #f76d6d;
      }
    }
  }
}

img {
  background: repeat;
}

.fs-20 {
  font-size: 20px;
}

.lh-20 {
  line-height: 20px;
}

.mb-8 {
  margin-bottom: 32px;
}

.pa-4 {
  padding: 16px;
}
</style>
