<script setup>
import UserLayout from "./../../Layouts/UserLayout.vue";
import {
    AppTabs,
    Profile,
    Reviews,
    PostedProjects,
    PostProject,
} from "@/Components";
import { TabPanel } from "@headlessui/vue";
</script>
<template>
    <UserLayout>
        <AppTabs
            :tabHeaders="[
                'profile',
                'reviews ',
                'posted projects ',
                'post project',
            ]"
        >
            <TabPanel> <Profile /> </TabPanel>
            <TabPanel> <Reviews /> </TabPanel>
            <TabPanel> <PostedProjects /> </TabPanel>
            <TabPanel> <PostProject /> </TabPanel>
        </AppTabs>
    </UserLayout>
</template>
