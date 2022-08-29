<template>
  <section class="wrapper" :class="{'width-100': allProducts.length < 4}">
    <div class="position-abs">
      <div class="sort" @click="sort">
        <span>
          {{ $store.state.sort }}
        </span>
        <img src="@/static/sort.svg" width="8" height="8">
        <ul class="sort-by" :class="{ 'sort-by-active': isSortActive}">
          <li
            v-if="$store.state.sort !== 'По умолчанию'"
            @click="sortByDefault"
          >
            По умолчанию
          </li>
          <li
            v-if="$store.state.sort !== 'По возрастанию'"
            @click="sortAscending"
          >
            По возрастанию
          </li>
          <li
            v-if="$store.state.sort !== 'По убыванию'"
            @click="sortDescending"
          >
            По убыванию
          </li>
          <li
            v-if="$store.state.sort !== 'По наименованию'"
            @click="sortOnTitle"
          >
            По наименованию
          </li>
        </ul>
      </div>
    </div>
    <CardProduct
      v-for="(product, index) of allProducts"
      :key="index"
      :product="product"
      :index="index"
    />
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CardProduct from './CardProduct'

export default {
  name: 'CardContainer',

  components: { CardProduct },

  data: () => ({
    isSortActive: false
  }),

  computed: mapGetters(['allProducts']),

  methods: {
    ...mapMutations(['defaultSort']),
    ...mapMutations(['sortMin']),
    ...mapMutations(['sortMax']),
    ...mapMutations(['sortTitle']),

    sortByDefault () {
      this.defaultSort()
    },

    sortAscending  () {
      this.sortMin()
    },

    sortDescending () {
      this.sortMax()
    },

    sortOnTitle () {
      this.sortTitle()
    },

    sort () {
      this.isSortActive = !this.isSortActive
    }
  }
}
</script>

<style lang="scss">

.wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.width-100 {
  width: 100%;
}

.position-abs {
  position: absolute;
  top: -52px;
  right: 16px;
}

.sort {
  display: flex;
  position: relative;
  width: 121px;
  height: 36px;
  font-size: 12px;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #B4B4B4;
    padding: 10px 4px 10px 16px;
  }

  img {
    margin-top: 4px;
    margin-right: 15px;
  }

  &-by {
    position: absolute;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    list-style: none;
    top: 40px;
    width: 121px;
    z-index: 1;

    &-active {
      opacity: 1;
      visibility: visible;
    }

    > li {
      color: #B4B4B4;
      padding: 10px 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        color: #3F3F3F;
        background: #B4B4B4;
        border-radius: 4px;
      }
    }
  }
}

@media (min-width: 1092px) {
  .wrapper {
    justify-content: space-between;
  }
}

@media (max-width: 1092px) {
  .wrapper {
    justify-content: end;
  }
}

@media (max-width: 740px) {
  .wrapper {
    justify-content: left;
  }

  .position-abs {
    left: 211px
  }
}
</style>
