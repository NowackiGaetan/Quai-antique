<script setup>
import { RouterLink, RouterView } from 'vue-router'
  
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="nav-container container-fluid">
        <router-link to="/">
          <span class="link navbar-brand">Le Quai Antique</span>
        </router-link>
        <div class="burger-toggle">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="link nav-item">
                  <router-link to="/">
                    Accueil
                  </router-link>
                </li>
                <li class="link nav-item">
                  <router-link to="/contact">
                    Contact
                  </router-link>
                </li>
                <li class="link nav-item">
                  <router-link to="/reserver">
                  Réserver
                </router-link>
                </li>
                <li class="link nav-item">
                  <router-link to="/horaires">
                  Horaire
                </router-link>
                </li>
                <li class="link nav-item ">
                <router-link to="/carte">
                  La carte
                </router-link>                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view v-slot="slot">
      <transition name="slide">
        <component :is="slot.Component"></component>
      </transition>
    </router-view>
</template>

<style scoped>
.slide-enter-from, .slide-leave-to{
        transform: translateX(-100vw)
    }
    .slide-enter-active, .slide-leave-active{
        transition: all 1s ease-in;
    }
</style>
