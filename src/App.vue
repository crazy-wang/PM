<template>
<div id="app">
  <nav-header></nav-header>
  <div id="container">
    <div id="sidebar">
      <left-menu></left-menu>
    </div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import navHeader from './view/module/header';
import leftMenu from './view/module/leftmenu';
export default {
  name: 'app',
  components: {
    navHeader,
    leftMenu
  }
};
</script>

<style lang="scss">
body,
html {
    height: 100%;
}
#app {
    min-width: 1024px;
    height: 100%;
    #container {
        width: 100%;
        box-sizing: border-box;
        padding-left: 230px;
        position: relative;
        height: 100%;
        #sidebar {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 230px;
            background: #272930;
        }
    }
}
</style>
