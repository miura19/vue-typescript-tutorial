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

const postTweet = (description: string): void => {
	const tweet = {
		id: Math.random(),
		description: description
	}
	tweets.value.push(tweet)
}

const deleteTweet = (id: number): void => {
	console.log('call delete' + ' ' + id);
	tweets.value = tweets.value.filter((t) => {
		return t.id !== id
	})
}

</script>

<template>
	<div class="container flex flex-col items-center mx-auto">
		<h1 class="text-3xl mb-8">Tweeter</h1>
		<TweetPostForm @post-tweet="postTweet" />
		<div class="mt-8">
			<p v-if="tweets.length <= 0" class="text-center text-lg font-bold">Tweetが投稿されていません。</p>
			<ul class=" px-0 p-2 w-96">
				<TweetList :tweets="tweets" @delete-tweet="deleteTweet" />
			</ul>
		</div>
	</div>
</template>

<style scoped></style>