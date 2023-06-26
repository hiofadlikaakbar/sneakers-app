<template>
  <div class="max-w-md mx-auto">
    <div class="bg-[#111827] min-h-screen pb-4">
      <div class="bg-[#FF9374] rounded-b-[3rem]">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-easing="ease-in"
          class="flex justify-between relative z-50 items-center px-6 pt-8"
        >
          <router-link
            to="/"
            class="active:scale-[.80] duration-200 ease-in-out"
          >
            <i class="fa-solid fa-chevron-left text-2xl text-white"></i>
          </router-link>
          <span @click="toggleHeart">
            <i :class="heartClass"></i>
          </span>
        </div>
        <img
          :src="nike"
          alt="nike"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-easing="ease-in"
          class="mx-auto -mt-16"
        />
      </div>
      <div
        class="pt-14 px-6 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in"
      >
        <div class="flex justify-between">
          <div>
            <h1 class="font-mont mb-2 text-3xl font-semibold text-white">
              Sports Shoes
            </h1>
            <p class="text-lg font-mont mb-6 text-slate-500">200 Items</p>
          </div>
          <div class="flex gap-2 items-center">
            <p class="text-xl text-[#FF9374] font-mont">$</p>
            <p class="text-2xl font-mont text-slate-500">300.00</p>
          </div>
        </div>
        <p
          class="leading-loose text-base md:text-xl font-mont text-slate-500 mb-6"
        >
          Comfortable shoes with affordable prices and high quality recognized
          worldwide.....
        </p>
        <h4
          class="text-white text-lg md:text-xl font-semibold font-mont tracking-wide mb-6"
        >
          Size
        </h4>
        <div class="flex gap-4 mb-20 md:mb-24 items-center">
          <span
            v-for="(size, index) in sizes"
            :key="size"
            :class="[
              'text-base md:text-xl',
              size.includes('.5') ? 'px-[0.65rem]' : 'px-4',
              'text-center rounded-lg py-2',
              { 'text-white bg-[#FF9374]': activeIndex === index },
              { 'border-slate-700 border-[1px]': activeIndex !== index },
              { 'text-slate-500': activeIndex !== index },
            ]"
            @click="toggleActive(index)"
            >{{ size }}</span
          >
        </div>
        <button
          type="button"
          class="bg-[#FF9374] active:scale-[.9] duration-200 ease-in-out hover:opacity-80 w-full rounded-md py-3 text-center text-lg text-white font-mont font-semibold"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import nike from "../assets/nike.png";

import { ref, computed } from "vue";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  window.AOS.init();
});

onUnmounted(() => {
  window.AOS.refreshHard();
});
const sizes = ["6", "6.5", "7", "7.5", "8"];
const activeIndex = ref(1);

const toggleActive = (index) => {
  activeIndex.value = index === activeIndex.value ? -1 : index;
};
const isHeartSolid = ref(false);

const toggleHeart = () => {
  isHeartSolid.value = !isHeartSolid.value;
};

const heartClass = computed(() => {
  return isHeartSolid.value
    ? "fa-solid fa-heart text-2xl text-white"
    : "fa-regular fa-heart text-2xl text-white";
});
</script>
