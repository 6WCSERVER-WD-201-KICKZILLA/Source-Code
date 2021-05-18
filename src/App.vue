<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light" >
      <ul class="navbar-nav" >
        <li class="nav-item" >
          <router-link :to="{ name: 'Home' }" class="nav-link" style="font-size:25px; color:white; top:45%; left:80%; position:absolute;"><p class="nav">Home</p></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Cart' }" class="nav-link" style="font-size:25px; color:white; top:45%; left:87%; position:absolute;"><p class="nav">Cart</p></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Contact' }" class="nav-link" style="font-size:25px; color:white; top:45%; left:72%; position:absolute;"><p class="nav">Contact</p></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link" style="font-size:25px; color:white; top:45%; left:65%; position:absolute;"><p class="nav">About</p></router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
  <img class="logo" src="logo.png">
  </div>
</template>

<script>

export default {
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
    .navbar-nav{
      background-color: crimson;
      width: 120.7%;
      margin-left: -10.5%;
      position: absolute;
      height: 100px;
    }
    .logo{
      position: absolute;
      height: 50px;
      width: 5%;
      top: .5%;
    }
    .nav:hover{
      background-color: rgb(156, 33, 57);
      transition: 0.5s;
      border-radius: 5px;
    }
</style>