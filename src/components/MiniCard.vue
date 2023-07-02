<template>
  <div class="px-6 pb-10">
    <h1
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-easing="ease-in"
      class="font-mont text-2xl xs:text-3xl mb-6 text-[#111827] font-bold"
    >
      Latest Shoes
    </h1>
    <div class="overflow-hidden rounded-lg">
      <div
        ref="swiperContainer"
        class="swiper-container"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="bg-[#303033] p-5 rounded-lg">
              <img :src="blacknike" alt="nike black" class="scale-110 -mt-4" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bg-pink-300 p-5 rounded-lg">
              <img :src="pinknike" alt="nike black" class="scale-110 -mt-4" />
            </div>
          </div>

          <div class="swiper-slide">
            <div class="bg-green-300 p-5 rounded-lg">
              <img :src="greennike" alt="nike black" class="scale-110 -mt-4" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bg-[#303033] p-5 rounded-lg">
              <img :src="blacknike" alt="nike black" class="scale-110 -mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import blacknike from "../assets/blacknike.png";
import greennike from "../assets/greennike.png";
import pinknike from "../assets/pinknike.png";

const swiperContainer = ref(null);
let swiperInstance = null;

onMounted(() => {
  swiperInstance = new Swiper(swiperContainer.value, {
    slidesPerView: 2.5,
    loop: false,
    spaceBetween: 20,
  });
});
</script>
