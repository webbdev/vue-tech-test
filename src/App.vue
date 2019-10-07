<template>
  <div id="app">
    <SalesBreakdown v-bind:products="products" class="border" />
    <Section2 class="border" />
  </div>
</template>

<script>
import SalesBreakdown from './components/SalesBreakdown.vue';
import Section2 from './components/Section2.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    SalesBreakdown,
    Section2
  },
  data() {
    return {
      products: [],
      errors: []
    }
  },
  created() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.products = response.data
      })
      .catch(err => {
        this.errors.push(err)
      })
  }  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i&display=swap&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Arimo', Arial, Helvetica, sans-serif;
   /* font-family: 'Open Sans', sans-serif; */
    font-size: 13px;
    line-height: 1.4;
    background-color: #fff;
    color: #244c64;
  }

  #app {
    color: #244c64;
    margin: 0 auto;
    padding: 15px 0;
    max-width: 1200px;
    width: 100%;
  }

  h3 {
    color: #ec4339;
  }

  .border {
    border-bottom: 3px solid #ececec;
    padding: 30px 0;
  }

  .info {
    padding: 15px 0 30px;
  }

  .info p {
    font-size: 30px;
    display: flex;
    align-items: center;
  }

  .info span {
    margin-left: 10px;
    margin-right: 5px;
    font-size: 13px;
    font-weight: bold;
  }
</style>
