export const state = () => ({
  products: [],
  product: {
    id: null,
    name: 'Наименование товара',
    description: 'Довольно-таки интересное описание товара в несколько строк. ' +
      'Довольно-таки интересное описание товара в несколько строк',
    image: '/_nuxt/static/product.svg',
    price: 10000
  },
  sort: 'По умолчанию'
})

export const mutations = {
  createProducts (state) {
    if (localStorage.length) {
      for (let index = 0; index < localStorage.length; index += 1) {
        const data = JSON.parse(localStorage.getItem(index))
        state.products.push(data)
      }
    } else {
      let indexProduct = 0
      for (let index = 0; index < 6; index += 1) {
        state.product.id = indexProduct
        state.products.push(state.product)
        localStorage.setItem(indexProduct, JSON.stringify(state.product))
        indexProduct += 1
      }
    }
  },

  addProduct (state, product) {
    const index = localStorage.length
    state.products.unshift(product)
    localStorage.setItem(index, JSON.stringify(product))
  },

  removeProduct (state, productIndex) {
    let index = 0
    // eslint-disable-next-line vue/no-mutating-props
    state.products.splice(productIndex, 1)
    localStorage.clear()
    for (const product of state.products) {
      localStorage.setItem(index, JSON.stringify(product))
      index += 1
    }
  },

  defaultSort (state) {
    state.sort = 'По умолчанию'
    state.products.sort((a, b) => {
      return a.id < b.id ? -1 : 1
    })
  },

  sortMin (state) {
    state.sort = 'По возрастанию'
    state.products.sort((a, b) => {
      return a.price < b.price ? -1 : 1
    })
  },

  sortMax (state) {
    state.sort = 'По убыванию'
    state.products.sort((a, b) => {
      return a.price > b.price ? -1 : 1
    })
  },

  sortTitle (state) {
    state.sort = 'По наименованию'
    state.products.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  }
}

export const getters = {
  allProducts (state) {
    return state.products
  }
}
