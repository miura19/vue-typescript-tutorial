<script setup lang="ts">
import { ref , onMounted } from "vue"
import type { Ref } from 'vue'
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://tpdjllyeeukwsybtvwxn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZGpsbHllZXVrd3N5YnR2d3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4NjQwMTMsImV4cCI6MjAxNTQ0MDAxM30.wDyPFcw0pyPin_H4tE2c4NcUj-EPvN3R58MjyicE7Hg"
  );


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

const registerPerson = (person :Person):void => {
    persons.value.push(person)
}

const deletePerson = (id: number):void => {
    persons.value = persons.value.filter((p) => {
		return p.id !== id
	})
}

const getPersons = async (): Promise<void> => {
    const { data, error } = await supabase
        .from("persons")
        .select("*");

    if (error) {
        console.error("Supabase error:", error);
    } else {        
        console.log(data);
        
        persons.value = data;
        // console.log(persons.value);
    }
}

onMounted(() => {
    getPersons();
});

</script>

<template>
    <div class="container mx-auto w-full flex flex-col items-center">
        <h1 class="text-2xl font-bold mb-4">Title</h1>
        <PersonPostForm @register="registerPerson" />
        <div>
            <ul>
                <PersonList :persons="persons" @delete="deletePerson" />
            </ul>
        </div>
    </div>
</template>