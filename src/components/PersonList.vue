<script setup lang="ts">
import { defineProps } from "vue";
import type { Person } from './Persons.vue'

type Props = {
    persons: Person[]
}

defineProps<Props>()

</script>

<template>
    <li v-for="person in persons" :key="person.id" class=" bg-indigo-200 py-2 px-4 mb-4 rounded-md flex items-center justify-between w-140">
        <span>{{ person.name }} : </span>
        <span>age: {{ person.age }}</span>
        <button class="bg-red-300 py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-100">delete</button>
    </li>
</template>