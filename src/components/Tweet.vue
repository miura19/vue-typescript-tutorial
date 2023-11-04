<script setup lang="ts">

const tweets = [
	{ id: "0", description: "Hello!" },
	{ id: "1", description: "Good Afternoon!" },
]
</script>

<template>
	<div class="container flex flex-col items-center mx-auto">
		<h1 class="text-3xl mb-8">Tweeter</h1>
		<div class="flex flex-col items-center bg-gray-100 p-8 w-1/2 rounded-md">
			<input type="text" class="p-2 border-2 border-black">
			<button class="px-6 py-2 bg-teal-400 text-white mt-4 rounded-md cursor-pointer hover:bg-teal-300 transition-all duration-300">post</button>
		</div>
		<div class="mt-8">
			<ul v-for="tweet in tweets" class=" px-0">
				<li class="list-none text-xl">
					<span>{{ tweet.id }} : </span>
					<span>{{ tweet.description }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>

</style>