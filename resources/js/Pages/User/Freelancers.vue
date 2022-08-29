<script setup>
import UserLayout from "./../../Layouts/UserLayout.vue";
import { SortSearch, UserCard, Pagination } from "../../Components";
</script>

<template>
    <UserLayout>
        <div className="space-y-4">
            <SortSearch />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <Pagination />
        </div>
    </UserLayout>
</template>
