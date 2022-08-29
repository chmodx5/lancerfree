<script setup>
import Card from "./Card.vue";

defineProps({
    tableHeaders: Array,
    tableData: Array,
});
</script>
c

<template>
    <Card>
        <table
            className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
            <thead
                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th
                        v-for="tableHeader in tableHeaders"
                        :key="tableHeader"
                        scope="col"
                        className="py-3 px-6"
                    >
                        {{ tableHeader }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="tableData in tableData"
                    :key="tableData"
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <td
                        v-for="tableData in Object.values(tableData)"
                        :key="tableData"
                        className="py-4 px-6"
                    >
                        {{ tableData }}
                    </td>
                </tr>
            </tbody>
        </table>
    </Card>
</template>
