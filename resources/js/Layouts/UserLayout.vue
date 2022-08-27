<script setup>
import UserNavbar from "../Components/blocks/UserNavbar.vue";
</script>

<template>
    <div class="bg-gray-100 min-h-screen">
        <UserNavbar />
        <div class="container mx-auto pt-20">
            <slot />
        </div>
    </div>
</template>
