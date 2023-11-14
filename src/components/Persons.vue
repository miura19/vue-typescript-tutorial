<script setup lang="ts">
import { ref , onMounted } from "vue"
import type { Ref } from 'vue'
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';
import { supabase } from '../supabase'


export type Person = {
    id: number,
    name: string,
    age: number,
}

const persons: Ref<Person[]> = ref([])

const registerPerson = (person :Person):void => {
    persons.value.push(person)
}

const deletePerson = (id: number):void => {
    persons.value = persons.value.filter((p) => {
		return p.id !== id
	})
}

  onMounted(() => {
    getPersons()
  })

const getPersons = async (): Promise<void> => {
    const { data, error } = await supabase
        .from("persons")
        .select();

    if (error) {
        console.error("Supabase error:", error);
    } else {        
        console.log(data);
        persons.value = data;
    }
}


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