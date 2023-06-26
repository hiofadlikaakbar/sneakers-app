<template>
  <div class="px-6 mb-10 pt-12 overflow-hidden">
    <div
      ref="aosContainer"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-easing="ease-in"
    >
      <div ref="swiperContainer" class="swiper-container rounded-lg">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="swiper-slide bg-white relative shadow-xl p-6 rounded-lg"
          >
            <h1 class="font-mont text-3xl font-semibold mb-1 text-[#111827]">
              {{ item.title }}
            </h1>
            <p class="text-lg text-gray-400 font-mont">
              {{ item.quantity }} Items
            </p>

            <img
              :src="item.image"
              :alt="item.title"
              class="block -mt-16 scale-110"
            />

            <div class="flex justify-between">
              <div class="flex gap-2 font-bold font-mont">
                <span class="text-[#FF9374] text-xl">$</span>
                <h1 class="text-3xl text-[#111827] mt-2">
                  {{ item.price }}
                </h1>
              </div>
              <button
                class="px-3 py-2 bg-[#FF9374] rounded-full"
                @click="toggleFavorite(index)"
              >
                <i :class="favoriteIcon(index)"></i>
              </button>
            </div>

            <router-link
              to="/detail"
              class="bg-[#FF9374] hover:bg-[#111827] active:scale-[.80] duration-200 ease-in-out max-w-[5rem] font-semibold top-5 text-base ml-auto absolute right-0 -mt-5 rounded-bl-2xl font-mont text-white p-4"
            >
              + Add
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import nike from "../assets/nike.png";

const items = ref([
  {
    title: "Sports",
    quantity: 200,
    image: nike,
    price: "300.00",
    favorite: false,
  },
  {
    title: "Sports",
    quantity: 200,
    image: nike,
    price: "300.00",
    favorite: false,
  },
]);

const aosContainer = ref(null);
const swiperContainer = ref(null);
let swiperInstance = null;

const toggleFavorite = (index) => {
  items.value[index].favorite = !items.value[index].favorite;
};

const favoriteIcon = (index) => {
  return items.value[index].favorite
    ? "fa-solid fa-heart text-white text-2xl"
    : "fa-regular fa-heart text-white text-2xl";
};

onMounted(() => {
  const options = {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 40,
  };

  window.AOS.init();
  swiperInstance = new Swiper(swiperContainer.value, options);
});

onUnmounted(() => {
  swiperInstance.destroy();
  window.AOS.refreshHard();
});
</script>
