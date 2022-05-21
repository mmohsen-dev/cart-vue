<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header></Header>

  <div class="main-container container">
    <RouterView />
  </div>
  <Footer></Footer>
</template>

<style>
@import "@/assets/css/bootstrap/css/bootstrap.min.css";
@import "@/assets/css/font-awesome/css/font-awesome.min.css";
@import "@/assets/js/datetimepicker/bootstrap-datetimepicker.min.css";
@import "@/assets/js/owl-carousel/owl.carousel.css";
@import "@/assets/css/themecss/lib.css";
@import "@/assets/js/jquery-ui/jquery-ui.min.css";
@import "@/assets/css/themecss/so-categories.css";
@import "@/assets/css/themecss/so-listing-tabs.css";
@import "@/assets/css/footer1.css";
@import "@/assets/css/header1.css";
@import "@/assets/css/theme.css";
@import "@/assets/css/responsive.css";
@import "@/assets/css/themecss/so-megamenu.css";
</style>
