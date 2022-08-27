<template>
    <div class="pt-3">
        <h3 class="font-semibold">Price Filters</h3>
        <div className="flex space-x-3 mt-3">
            <div>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Min Price : <span>100</span>
                </label>
                <input
                    type="number"
                    id="company"
                    className="form-input"
                    placeholder="Flowbite"
                    required
                />
            </div>
            <div>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Max Price : <span>200</span>
                </label>
                <input
                    type="number"
                    id="company"
                    className="form-input"
                    placeholder="Flowbite"
                    required
                />
            </div>
        </div>
    </div>
</template>
