<script setup>
import { Card, Chip } from "..";
import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
    <Card>
        <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-xl">Project Details</h3>
            <div>
                <div className="font-semibold ">ksh: 100 - 200</div>
                <div className="text-sm">Bidding ends in 3 days</div>
            </div>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati cumque laborum ut aperiam nihil totam amet autem
                laboriosam doloremque ab repellendus temporibus, quibusdam
                animi? Porro laboriosam consequatur reiciendis architecto quod!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quas odit dolorem optio harum dignissimos amet officia? Saepe
                ratione, libero voluptatum beatae voluptas deleniti inventore
                ducimus facere, enim magni eos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod fugit nihil recusandae qui id
                dolorem ipsa, vero est natus optio dicta eaque magni
                necessitatibus atque minus, mollitia vitae quidem expedita?
            </p>
        </div>
        <div className="py-3">
            <h3 className="font-bold capitalize mb-2">skills required</h3>
            <div className="space-x-2">
                <Chip item="one" />
                <Chip item="two" />
                <Chip item="three" />
                <Chip item="four" />
            </div>
        </div>
        <div className="flex justify-between text-sm py-4">
            <p>Project id: 75785854564</p>
            <div>
                <Link href="/"> Report this project</Link>
            </div>
        </div>
    </Card>
</template>
