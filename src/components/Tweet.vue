<script setup lang="ts">
import { ref, computed } from "vue";
import TweetPostForm from "./TweetPostForm.vue";
import TweetList from "./Tweetist.vue";

const tweets = ref([
	{ id: 0, description: "Hello!" },
	{ id: 1, description: "Good Afternoon!" },
	{ id: 2, description: "See You!" },
	{ id: 3, description: "EMI!" },
])

const inputtingDescription = ref<string>('')

const postTweet = (): void => {
	const tweet = {
		id: Math.random(),
		description: inputtingDescription.value
	}
	tweets.value.push(tweet)
	inputtingDescription.value = ''
}

const deleteTweet = (id: number): void => {
	console.log('call delete' + ' ' + id);
	tweets.value = tweets.value.filter((t) => {
		return t.id !== id
	})
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
	<div class="container flex flex-col items-center mx-auto">
		<h1 class="text-3xl mb-8">Tweeter</h1>
		<TweetPostForm />
		<div class="mt-8">
			<p v-if="tweets.length <= 0" class="text-center text-lg font-bold">Tweetが投稿されていません。</p>
			<ul class=" px-0 p-2 w-96">
				<TweetList :tweets="tweets" />
				<!-- <li v-for="tweet in tweets" :key="tweet.id"
					class="list-none text-xl bg-slate-200 p-2 rounded-md flex justify-between items-center mb-4">
					<span class="p-2">{{ tweet.description }}</span>
					<button @click="deleteTweet(tweet.id)" class="bg-red-300 py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-200 mt-2">削除</button>
				</li> -->
			</ul>
		</div>
	</div>
</template>

<style scoped></style>