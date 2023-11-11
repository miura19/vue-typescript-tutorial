<script setup lang="ts">
import { ref, computed } from "vue";

const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)

const emit = defineEmits(['register'])
const register = () => {
    const person = {
        id: Math.random(),
        name: inputtingName.value,
        age: inputtingAge.value
    }
    console.log(person);
    emit('register', person)
    inputtingName.value = ''
    inputtingAge.value = 0
}

const isInputting = computed(() => {
    if (inputtingName.value === '' || isValidName.value === true) {
        return true
    } else {
        return false
    }
})

const nameLengthLimit = 15
const isValidName = computed(() => {
    if (inputtingName.value.length > nameLengthLimit) {
        return true
    } else {
        false
    }
})

const btnClass = computed(() => {
    if (isInputting.value === true) {
        return "bg-fuchsia-300 py-2 px-4 rounded-md font-bold opacity-50"
    } else {
        return "bg-fuchsia-300 py-2 px-4 rounded-md font-bold transition-all duration-300 hover:bg-fuchsia-200"
    }
})

</script>

<template>
    <div class=" bg-pink-100 w-full flex flex-col items-center p-8 rounded-md space-x-4 mb-12">
        <div class="mb-4">
            <span class="text-xl font-bold">name: </span>
            <span>
                <input type="text" v-model="inputtingName" class="border border-black" :class="{ 'bg-red-300': isValidName }">
            </span>
            <p v-if="isValidName" class="text-red-400 font-bold mt-2">{{ nameLengthLimit }}文字以内で入力してください！！</p>
        </div>
        <div class="mb-8">
            <span class="text-xl font-bold">age: </span>
            <span>
                <input type="number" v-model="inputtingAge" class="border border-black">
            </span>
        </div>
        <div class="text-center">
            <button @click="register" :class="btnClass" :disabled="isInputting">register</button>
        </div>
    </div>
</template>