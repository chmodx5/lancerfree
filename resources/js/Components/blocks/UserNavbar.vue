<script setup>
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import NavLink from "../elements/NavLink.vue";
</script>

<template>
    <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-1 shadow dark:bg-gray-900 fixed w-full z-20 top-0 left-0"
    >
        <div
            class="container flex flex-wrap justify-between items-center mx-auto"
        >
            <a href="https://flowbite.com/" class="flex items-center">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span
                    class="self-center text-xl font-bold whitespace-nowrap dark:text-white"
                >
                    <span class="text-primary">Lancer</span>
                    <span>Free</span>
                </span>
            </a>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                >
                    <NavLink href="/dashboard"> dashboard </NavLink>
                    <NavLink href="/tasks"> my tasks </NavLink>
                    <NavLink href="/freelancers"> freelancers </NavLink>
                    <NavLink href="/accounts"> account</NavLink>
                </ul>
            </div>
        </div>
    </nav>
</template>
