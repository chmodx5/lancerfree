<script setup>
import UserLayout from "./../../Layouts/UserLayout.vue";
import { AppTabs, ProjectDetails, PlaceBid, BidsOnProject } from "@/Components";
import { TabPanel } from "@headlessui/vue";
</script>
<template>
    <UserLayout>
        <div>single project</div>
        <AppTabs :tabHeaders="['project', 'bids ']">
            <TabPanel>
                <div className="space-y-4">
                    <div>
                        <ProjectDetails />
                    </div>
                    <div>
                        <PlaceBid />
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <BidsOnProject />
                </div>
            </TabPanel>
        </AppTabs>
    </UserLayout>
</template>
