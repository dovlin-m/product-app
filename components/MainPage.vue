<template>
  <main class="main">
    <div class="d-flex jc-sb flex-wrap mb-4">
      <h1 class="h1">
        Добавление товара
      </h1>
    </div>
    <div class="d-flex flex-wrap-xs">
      <AddingProduct />
      <CardContainer />
    </div>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import AddingProduct from './AddingProduct'
import CardContainer from './CardContainer'

export default {
  name: 'MainPage',
  components: { AddingProduct, CardContainer },

  computed: mapMutations(['createProducts']),

  created () {
    // eslint-disable-next-line no-unused-expressions
    this.createProducts
  }
}
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  color: #3F3F3F;
  font-family: 'Source Sans Pro', sans-serif;
}

.h1 {
  margin: 0;
  font-size: 28px;
  line-height: 35px;
}

.selected {
  top: 31px;
  right: 31px;
  height: 36px;
  position: absolute;
  border: none;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  color: #B4B4B4;

  option {
    color: #B4B4B4;
  }
}

.flex-wrap {
  flex-wrap: wrap;
}

.d-flex {
  display: flex;
}

.jc-sb {
  justify-content: space-between;
}

.main {
  background: rgba(255, 254, 251, 0.8);
  padding: 32px 16px 32px 32px;

  .mb-4 {
    margin-bottom: 16px;
  }
}

@media (max-width: 740px) {
  .flex-wrap-xs {
    flex-wrap: wrap;
  }

  .selected {
    top: 539px;
    left: 243px;
  }
}
</style>
