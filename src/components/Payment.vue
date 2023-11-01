<script setup lang="ts">

const name1: string = "guitar!!"
const name2: string = "base"

const price1: number = 20000
const price2: number = 50000

const url1: string = "https://google.com"
const url2: string = "https://zozo.jp/"

const buy = (name :string): void => {
    alert("BUY NOW!" + " " + name)
}
</script>

<template>
    <div class="container">
        <h1>Payment</h1>
        <div class="payment">
            <label><a :href="url1">{{ name1 }}</a></label>
            <label>{{ price1 }}yen</label>
            <button @click="buy(name1)">BUY!</button>
        </div>
        <div class="payment">
            <label><a :href="url2">{{ name2 }}</a></label>
            <label>{{ price2 }}yen</label>
            <button @click="buy(name2)">BUY!</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.payment {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    width: 50%;
    background-color: aliceblue;
    margin-bottom: 2rem;
}

h1 {
    margin-bottom: 2rem;
}

label {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>