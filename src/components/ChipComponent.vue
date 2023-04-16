<script lang="ts" setup>
defineProps<{
    text:string
}>()
 
</script>
<template>
   <button type="button" class="px-8 py-1 bg-warning rounded-full flex items-center  gap-2 text-warning-content font-semibold mt-4" >
     <p class="text-base">{{ text }}</p>
     <i class="fa-solid fa-circle-xmark cursor-pointer"></i>
   </button> 
</template>