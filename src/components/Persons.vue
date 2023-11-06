<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from 'vue'
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';


export type Person = {
    id: number,
    name: string,
    age: number,
}

const persons: Ref<Person[]> = ref([
    {id: 0 , name:'emi' , age: 35},
    {id: 1 , name:'kana' , age: 40},
    {id: 2 , name:'soichiro' , age: 45},
    {id: 3 , name:'tomoko' , age: 50},
])

</script>

<template>
    <div class="container mx-auto w-full flex flex-col items-center">
        <h1 class="text-2xl font-bold mb-4">Title</h1>
        <PersonPostForm />
        <div>
            <ul>
                <PersonList :persons="persons" />
            </ul>
        </div>
    </div>
</template>