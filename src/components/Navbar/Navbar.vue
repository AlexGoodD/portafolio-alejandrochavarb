<template>
  <div
      class="tw:fixed tw:top-0 tw:left-0 tw:right-0 tw:w-screen tw:bg-[var(--navbar-background-color)] tw:text-white tw:border-b tw:border-[#5a5a5a] tw:z-[1000] tw:py-4 tw:px-6 sm:tw:px-3">
    <nav class="tw:flex tw:items-start tw:w-full">
      <img src="../../assets/logo.svg" width="90px" height="10px" alt="logo"/>

      <div class="tw:flex tw:flex-col">
        <div class="tw:w-full tw:flex tw:items-center tw:gap-4 tw:mb-4">
          <div class="tw:flex-grow">
            <Searchbar/>
          </div>
          <div class="tw:flex tw:ml-auto tw:mr-8 tw:gap-4 tw:z-[1000]">
            <!-- Botón cambio de tema TODO: Funcionalidad -->
            <button
                class="tw:bg-none tw:border-none tw:text-[var(--navbar-text-color)] tw:cursor-pointer tw:text-[17px]">
              <h1>Icono</h1>
            </button>
            <!-- Botón cambio de idioma TODO: Funcionalidad -->
            <button
                class="tw:bg-none tw:border-none tw:text-[var(--navbar-text-color)] tw:cursor-pointer tw:text-[17px]">
              <h1>EN</h1>
            </button>
          </div>
        </div>
        <!-- Botones de secciones página TODO: Funcionalidad -->
        <ul class="tw:flex tw:list-none tw:transition-all sm:tw:pl-[75px] xs:tw:pl-0 xs:tw:w-[75%] xs:tw:overflow-x-auto xs:tw:whitespace-nowrap xs:tw:scrollbar-none">
          <div class="tw:flex tw:items-center tw:gap-8 tw:pr-12">
            <li>
              <router-link to="/"
                           class="tw:text-[var(--navbar-text-color)] tw:hover:text-[var(--navbar-text-color-hover)] tw:transition-colors tw:duration-200 tw:ease-in-out tw:text-[15px] tw:no-underline"
                           active-class="tw:text-[var(--navbar-text-color-active)] tw:border-b-3 tw:border-[var(--navbar-text-color-active)]">
                <i class="fas fa-home"></i>
                Inicio
              </router-link>
            </li>
            <li>
              <router-link to="/projects"
                           class="tw:text-[var(--navbar-text-color)] tw:hover:text-[var(--navbar-text-color-hover)] tw:transition-colors tw:duration-200 tw:ease-in-out tw:text-[15px] tw:no-underline"
                           active-class="tw:text-[var(--navbar-text-color-active)] tw:border-b-3 tw:border-[var(--navbar-text-color-active)]">
                <i class="fa-solid fa-folder"></i>
                Proyectos
              </router-link>
            </li>
            <li>
              <router-link to="/technologies"
                           class="tw:text-[var(--navbar-text-color)] tw:hover:text-[var(--navbar-text-color-hover)] tw:transition-colors tw:duration-200 tw:ease-in-out tw:text-[15px] tw:no-underline"
                           active-class="tw:text-[var(--navbar-text-color-active)] tw:border-b-3 tw:border-[var(--navbar-text-color-active)]">
                <i class="fas fa-gear"></i>
                Tecnologías
              </router-link>
            </li>
            <li>
              <router-link to="/contact"
                           class="tw:text-[var(--navbar-text-color)] tw:hover:text-[var(--navbar-text-color-hover)] tw:transition-colors tw:duration-200 tw:ease-in-out tw:text-[15px] tw:no-underline"
                           active-class="tw:text-[var(--navbar-text-color-active)] tw:border-b-3 tw:border-[var(--navbar-text-color-active)]">
                <i class="fas fa-envelope"></i>
                Contacto
              </router-link>
            </li>
          </div>
          <!-- Menu para CV y Linkedin TODO: Funcionalidad -->
          <MenuNavbar/>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import MenuNavbar from "@/components/Navbar/MenuNavbar.vue";
import Searchbar from "@/components/Navbar/Searchbar.vue";
</script>