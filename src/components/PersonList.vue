<script setup lang="ts">
import { defineProps } from "vue";
import type { Person } from './Persons.vue'

type Props = {
    persons: Person[]
}


defineProps<Props>()

</script>

<template>
    <div>
        <li v-for="person in persons" :key="person.id">
            <span>{{ person.name }} : </span>
            <span>age: {{ person.age }}</span>
        </li>
        <button>delete</button>
    </div>
</template>