<script setup lang="ts">
import { ref , computed } from "vue";

const tweets = ref([
	{ id: 0, description: "Hello!" },
	{ id: 1, description: "Good Afternoon!" },
	{ id: 2, description: "See You!" },
])

const inputtingDescription = ref<string>('')

const postTweet = () => {
	const tweet = {
		id: Math.random(),
		description: inputtingDescription.value
	}
	tweets.value.push(tweet)
	inputtingDescription.value = ''
}

const deleteTweet = (id: number):void => {
	console.log('call delete' + ' ' + id);
	tweets.value = tweets.value.filter((t) => {		
		return t.id !== id
	})
}

const isInputting = computed(() => {
	if (inputtingDescription.value === ''){
		return true
	} else {
		false
	}
})
</script>

<template>
	<div class="container flex flex-col items-center mx-auto">
		<h1 class="text-3xl mb-8">Tweeter</h1>
		<div class="flex flex-col items-center bg-gray-100 p-8 w-1/2 rounded-md">
			<p v-if="inputtingDescription === ''" class="mb-2 text-lg font-bold">Tweetを入力してください。</p>
			<input type="text" class="p-2 border border-black" v-model="inputtingDescription">
			<button @click="postTweet" :disabled="isInputting" class="px-6 py-2 bg-teal-400 text-white mt-4 rounded-md cursor-pointer hover:bg-teal-300 transition-all duration-300">post</button>
		</div>
		<div class="mt-8">
			<p v-if="tweets.length <= 0" class="text-center text-lg font-bold">Tweetが投稿されていません。</p>
			<ul class=" px-0 p-2 w-96">
				<li v-for="tweet in tweets" :key="tweet.id" class="list-none text-xl bg-slate-200 p-2 rounded-md flex justify-between items-center mb-4">
					<span class="p-2">{{ tweet.description }}</span>
					<button @click="deleteTweet(tweet.id)" class="bg-red-300 py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-200 mt-2">削除</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped></style>