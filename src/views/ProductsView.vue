<template>
  <div id="products">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="product-item-container"
    >
      <div class="left-block">
        <div class="product-image-container second_img">
          <img
            src="image/demo/shop/resize/B10-270x270.jpg"
            class="img-responsive"
          />
        </div>
        <!--Sale Label-->
        <!--full quick view block-->
        <router-link
          class="quickview iframe-link visible-lg"
          data-fancybox-type="iframe"
          to="/"
        >
          Quickview
        </router-link>
        <!--end full quick view block-->
      </div>
      <div class="right-block">
        <div class="caption">
          <h4><router-link to="/product/">{{ product.name }}</router-link></h4>
          <div class="quantity">
              {{ product.quantity }}
          </div>

          <div class="price">
            <span class="price-new">{{ product.price }}</span>
          </div>
        </div>

        <div class="button-group">
          <button class="addToCart" type="button">
            <i class="fa fa-shopping-cart"></i>
            <span class="">Add to Cart</span>
          </button>
        </div>
      </div>
      <!-- right block -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "product one",
          quantity: 5,
          price: 130,
          description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        },
        {
          name: "product one",
          quantity: 5,
          price: 130,
          description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        },
        {
          name: "product one",
          quantity: 5,
          price: 130,
          description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        },
        {
          name: "product one",
          quantity: 5,
          price: 130,
          description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        },
        {
          name: "product one",
          quantity: 5,
          price: 130,
          description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
</style>