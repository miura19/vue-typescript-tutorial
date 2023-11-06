<script setup lang="ts">
import { defineProps } from 'vue';

type Tweet = {
    id: number,
    description: string
}

type Props = {
    tweets: Tweet[]
}

const deleteTweet = (id: number) => {

}

defineProps<Props>()

</script>

<template>
    <li v-for="tweet in tweets" :key="tweet.id"
        class="list-none text-xl bg-slate-200 p-2 rounded-md flex justify-between items-center mb-4">
        <span class="p-2">{{ tweet.description }}</span>
        <button @click="deleteTweet(tweet.id)" class="bg-red-300 py-2 px-4 rounded-md transition-all duration-300 hover:bg-red-200 mt-2">削除</button>
    </li>
</template>