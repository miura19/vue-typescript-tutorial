<script setup lang="ts">
import { ref, computed } from "vue";

const inputtingDescription = ref<string>('')

const emit = defineEmits(['post-tweet'])
const postTweet = (): void => {
    emit('post-tweet' , inputtingDescription.value)
    inputtingDescription.value = ''
}


const isInputting = computed(() => {
	if (inputtingDescription.value === '') {
		return true
	} else {
		false
	}
})

</script>

<template>
    <div class="flex flex-col items-center bg-gray-100 p-8 w-1/2 rounded-md">
        <p v-if="inputtingDescription === ''" class="mb-2 text-lg font-bold">Tweetを入力してください。</p>
        <input type="text" class="p-2 border border-black" v-model="inputtingDescription">
        <button @click="postTweet" :disabled="isInputting" class="px-6 py-2 bg-teal-400 text-white mt-4 rounded-md cursor-pointer hover:bg-teal-300 transition-all duration-300">post</button>
    </div>
</template>