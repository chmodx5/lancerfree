<script setup>
import Card from "./../elements/Card.vue";
import Chip from "./../elements/Chip.vue";
</script>

<template>
    <Card>
        <div className="grid grid-cols-12 space-x-4">
            <div className="col-span-2">
                <img
                    src="https://source.unsplash.com/random"
                    className=" aspect-square w-full"
                    alt=""
                />
            </div>
            <div className="space-y-3 col-span-10">
                <div className="flex justify-between">
                    <h3 className="font-bold text-xl">@someonelse</h3>
                    <h3 className="font-semibold text-l">Bid - Kes100</h3>
                </div>

                <div className="flex space-x-3">
                    <div>
                        <Rating rating="{3}" />
                    </div>
                    <p>12 Reviews</p>
                    <div>96% completion rate</div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia quasi ratione nobis accusamus. Laudantium neque,
                    totam repellendus esse, nihil fugiat rerum cumque eius
                    numquam provident unde sapiente expedita, eum harum.
                </p>
                <h4 className="font-semibold">Skills</h4>
                <div className="space-x-3">
                    <Chip>something</Chip>
                    <Chip>something</Chip>
                    <Chip>something</Chip>
                    <Chip>something</Chip>
                    <Chip>something</Chip>
                    <Chip>something</Chip>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        Jobs completed :<span className="font-semibold"
                            >76</span
                        >
                    </div>
                    <div>
                        On Budget : <span className="font-semibold">76</span>
                    </div>
                    <div>
                        On time : <span className="font-semibold">76</span>
                    </div>
                    <div>
                        Incomplete : <span className="font-semibold">76</span>
                    </div>
                </div>
                <div>
                    <p>
                        Location :
                        <span className="font-semibold">Nairobi</span>
                    </p>
                </div>
                <div>
                    <p>
                        Date joined :
                        <span className="font-semibold">1st March 2022</span>
                    </p>
                </div>
            </div>
        </div>
    </Card>
</template>
