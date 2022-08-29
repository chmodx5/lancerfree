<script setup>
import { UserCard } from "..";
</script>

<template>
    <div className="grid grid-cols-12 space-x-4">
        <div className="col-span-9">
            <div className="space-y-3">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </div>
        <div className="col-span-3">
            <Card>
                <div className="flex divide-x">
                    <div className="px-5">
                        <p>Bids</p>
                        <p className="font-semibold text-xl">72</p>
                    </div>
                    <div className="px-5">
                        <p>Average Bid</p>
                        <p className="font-semibold text-xl">kes: 200</p>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>
