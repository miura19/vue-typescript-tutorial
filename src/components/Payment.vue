<script setup lang="ts">
import { ref, computed, watch } from "vue";

const name1: string = "guitar!!"
const name2: string = "base!!"

const price1 = ref<number>(2000)
const price2 = ref<number>(5000)

const url1: string = "https://google.com"
const url2: string = "https://zozo.jp/"

const buy = (name: string): void => {
    alert("BUY NOW!" + " " + name)
}

const clear1 = () => {
    price1.value = 0
}

const clear2 = () => {
    price2.value = 0
}

const badget: number = 50000

const priceLabel1 = computed(() => {
    if (price1.value > badget){
        return "高くて買えないよ・・"
    } else {
        return price1.value + " " + "yen"
    }
})

const priceLabel2 = computed(() => {
    if (price2.value > badget){
        return "高くて買えないよ・・"
    } else {
        return price2.value + " " + "yen"
    }
})

</script>

<template>
    <div class="container">
        <h1>Payment</h1>
        <input type="text" class="payment-input" v-model="price1">
        <div class="payment">
            <label><a :href="url1">{{ name1 }}</a></label>
            <label>{{ priceLabel1 }}</label>
            <button @click="buy(name1)">BUY!</button>
            <button @click="clear1">CLEAR!</button>
        </div>
        <input type="text" class="payment-input" v-model="price2">
        <div class="payment">
            <label><a :href="url2">{{ name2 }}</a></label>
            <label>{{ priceLabel2 }}</label>
            <button @click="buy(name2)">BUY!</button>
            <button @click="clear2">CLEAR!</button>
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

.payment-input {
    margin-bottom: 1rem;
}
</style>