<script setup>
import UserLayout from "./../../Layouts/UserLayout.vue";
import { SortSearch, Pagination, Project, Sidebar } from "@/Components";
import { Head } from "@inertiajs/inertia-vue3";
</script>

<template>
    <Head>
        <title>Dashboard</title>
    </Head>
    <UserLayout>
        <div className="grid grid-cols-12 space-x-4 ">
            <div className="col-span-3">
                <Sidebar />
            </div>
            <div className="col-span-9 space-y-2">
                <SortSearch />
                <Pagination />
                <div class="space-y-2">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
                <Pagination />
            </div>
        </div>
    </UserLayout>
</template>
