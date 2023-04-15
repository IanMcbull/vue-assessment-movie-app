<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
 <Suspense>
    <div class="container mx-auto h-screen flex flex-col">
 <HeaderComponent/>
 <RouterView/>
 </div>
 </Suspense>
</template>

