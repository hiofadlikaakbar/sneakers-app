<template>
  <div>
    <div
      class="bg-white bottom-0 relative w-full border-t-[1px] translate-y-[0.20rem] border-gray-300 py-4"
    >
      <div class="grid grid-cols-4 max-w-lg mx-auto items-center text-center">
        <div
          @click="activeIndex = 0"
          class="active:scale-[.9] ease-in duration-100"
        >
          <i
            class="fa-solid text-lg fa-house"
            :class="{
              'text-[#FF9374]': activeIndex === 0,
              'text-slate-400': activeIndex !== 0,
            }"
          ></i>
          <p
            class="text-base font-mont font-semibold"
            :class="{
              'text-[#FF9374]': activeIndex === 0,
              'text-slate-400': activeIndex !== 0,
            }"
          >
            {{ home }}
          </p>
        </div>

        <div
          @click="activeIndex = 1"
          class="active:scale-[.9] ease-in duration-100"
        >
          <i
            class="fa-solid text-lg fa-bell"
            :class="{
              'text-[#FF9374]': activeIndex === 1,
              'text-slate-400': activeIndex !== 1,
            }"
          ></i>
          <p
            class="text-base font-mont font-semibold"
            :class="{
              'text-[#FF9374]': activeIndex === 1,
              'text-slate-400': activeIndex !== 1,
            }"
          >
            {{ notice }}
          </p>
        </div>

        <div
          @click="activeIndex = 2"
          class="active:scale-[.9] ease-in duration-100"
        >
          <i
            class="fa-solid text-lg fa-bag-shopping"
            :class="{
              'text-[#FF9374]': activeIndex === 2,
              'text-slate-400': activeIndex !== 2,
            }"
          ></i>
          <p
            class="text-base font-mont font-semibold"
            :class="{
              'text-[#FF9374]': activeIndex === 2,
              'text-slate-400': activeIndex !== 2,
            }"
          >
            {{ cart }}
          </p>
        </div>

        <div
          @click="activeIndex = 3"
          class="active:scale-[.9] ease-in duration-100"
        >
          <i
            class="fa-solid text-lg fa-user"
            :class="{
              'text-[#FF9374]': activeIndex === 3,
              'text-slate-400': activeIndex !== 3,
            }"
          ></i>
          <p
            class="text-base font-mont font-semibold"
            :class="{
              'text-[#FF9374]': activeIndex === 3,
              'text-slate-400': activeIndex !== 3,
            }"
          >
            {{ user }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  home: String,
  notice: String,
  cart: String,
  user: String,
});
const activeIndex = ref(0);
</script>
