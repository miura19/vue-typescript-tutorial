<script setup lang="ts">
import {  } from "vue";
import type { Person } from './Persons.vue'

type Props = {
    persons: Person[]
}

defineProps<Props>()

const emit = defineEmits(['delete'])
const deletePerson = (id: number , name: string):void => {
    console.log(id);
    if (confirm(name + ' ' + 'を削除しますか？？')){
        emit('delete' , id)
    } else {
        return
    }
}

</script>

<template>
    <li v-for="person in persons" :key="person.id" class=" bg-indigo-200 py-2 px-4 mb-4 rounded-md flex items-center justify-between md:w-128 w-96">
        <span>{{ person.name }} : </span>
        <span>age: {{ person.age }}</span>
        <button @click="deletePerson(person.id , person.name)" class="bg-red-300 py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-100">delete</button>
    </li>
</template>