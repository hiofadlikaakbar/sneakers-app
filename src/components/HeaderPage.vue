<template>
  <header class="pt-10">
    <nav>
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-easing="ease-in"
        class="flex justify-between items-center px-6"
      >
        <div class="flex gap-3 items-center">
          <img
            :src="profile"
            alt="profile"
            class="rounded-full active:scale-[.80] duration-200 ease-in-out"
          />
          <div>
            <h1
              class="text-gray-500 font-semibold font-mont text-base xs:text-base"
            >
              {{ welcome }}
            </h1>
            <h1
              class="text-[#111827] font-semibold font-mont text-lg xs:text-xl"
            >
              {{ name }}
            </h1>
          </div>
        </div>

        <img
          :src="search"
          alt="search"
          class="scale-95 active:scale-[.80] duration-200 ease-in-out"
        />
      </div>
    </nav>
  </header>
</template>

<script setup>
import search from "../assets/search-magnifying-glass-svgrepo-com.svg";
import profile from "../assets/profile.jpg";
defineProps({
  welcome: String,
  name: String,
});
</script>
