<script setup lang="ts">

const tweets = [
	{ id: "0", description: "Hello!" },
	{ id: "1", description: "Good Afternoon!" },
]
</script>

<template>
	<div class="container">
		<h1>Tweeter</h1>
		<div class="form-container">
			<input type="text">
			<button class="tweet-btn">post</button>
		</div>
		<div class="tweet-container">
			<ul v-for="tweet in tweets">
				<li class="tweet-list">
					<span>{{ tweet.id }} : </span>
					<span>{{ tweet.description }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: aliceblue;
	padding: 24px 0;
	width: 70%;
	margin-bottom: 12px;
	border-radius: 4px;
}

h1 {
	font-weight: bold;
	margin-bottom: 2rem;
}

input {
	width: 12rem;
	height: 2rem;
}

.tweet-btn {
	background-color: cyan;
	color: white;
	border-radius: 4px;
	height: 2rem;
	width: 4rem;
	font-weight: bolder;
	cursor: pointer;
	margin-top: 1.5rem;
}

.tweet-btn:hover {
	opacity: 0.7;
	transition: all 0.5s ease-out;
}

.tweet-list {
	list-style: none;
}

ul {
	padding-left: 0;
}</style>