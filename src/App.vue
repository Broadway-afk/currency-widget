<template>
  <div id="app">
    <widget/>
  </div>
</template>

<script>
import Widget from './components/Widget.vue'

export default {
  name: 'App',
  components: {
    Widget
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

#app {
  --main-color: #FFE782;
  --main-back-color: #FFFFFF;
  --main-text-color: #2B2D33;
  --alt-text-color: #B9B9B9;
  --header-text-color: #CCAE68;
  --shade-color: #EFEFEF;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-text-color);
}
.container {
  margin: auto;
  max-width: 720px;
  padding: 0 20px;
}
body {
  margin: 0;
}
</style>
