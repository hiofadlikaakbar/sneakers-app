<template>
  <div class="max-w-md mx-auto">
    <HeaderPage welcome="Welcome" name="Alex Bhizer" />
    <BigCard />
    <MiniCard />
  </div>
  <BottomNav home="Home" notice="Notice" cart="Cart" user="User" />
</template>

<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import BigCard from "../components/BigCard.vue";
import MiniCard from "../components/MiniCard.vue";
import BottomNav from "../components/BottomNav.vue";
</script>
