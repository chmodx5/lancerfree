<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineProps({
    href: String,
});
</script>

<template>
    <Link :href="href" class="font-bold capitalize hover:text-primary">
        <slot />
    </Link>
</template>
