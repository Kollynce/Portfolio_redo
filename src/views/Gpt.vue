<script setup>
import { ref } from 'vue';
import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.openai.com/v1/chat',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
    'OpenAI-Organization': import.meta.env.VITE_ORG_ID,
  }
});
const content = ref('');
const BTN_TEXT = 'Submit 🚀'
const res = ref('✅ The answer will be displayed here.')
const btnText = ref(BTN_TEXT)
const askAi = () => {
  btnText.value = 'Thinking...🤔'
  http.post('/completions', {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": content.value}],
    "temperature": 0.7
  }).then(function (response) {
    console.log(response);
    res.value =  response.data.choices[0].message.content
  }).catch(function (error) {
    console.log(error);
  }).finally(() => {
    btnText.value = BTN_TEXT
  })
}
</script>

<template>
  <div class="min-h-screen mt-20 py-8 bg-gradient-to-br from-purple-300 via-pink-300 to-red-200 flex flex-col items-center justify-center">
    <h2 class="text-4xl font-bold text-purple-800 mb-8">🤖️ My ChatGPT</h2>
    <div class="bg-white p-6 rounded-lg w-full max-w-xl mx-auto shadow-xl">
      <input class="w-full border border-gray-300 p-2 rounded-lg mb-4" placeholder="Ask me about...🌽" v-model="content" clear>
      <button type="button" @click="askAi" class="w-full bg-purple-800 text-white font-semibold p-3 rounded-lg mb-4 transform hover:rotate-12 transition-all duration-200 ease-in-out">
        {{ btnText }}
      </button>
      <div v-if="btnText.value === 'Thinking...🤔'" class="flex items-center space-x-2 mb-4">
        <div class="animate-bounce h-3 w-3 bg-purple-800 rounded-full"></div>
        <div class="animate-bounce200 h-3 w-3 bg-purple-800 rounded-full"></div>
        <div class="animate-bounce400 h-3 w-3 bg-purple-800 rounded-full"></div>
      </div>
      <div class="bg-gray-100 p-6 rounded-lg w-full transition-all duration-300 ease-in-out">
        <pre class="text-gray-800 break-words whitespace-normal">{{ res }}</pre>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    -webkit-transform: translateY(-25%);
  }
  50% {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-bounce200 {
  animation: bounce 1s infinite;
  animation-delay: 200ms;
}

.animate-bounce400 {
  animation: bounce 1s infinite;
  animation-delay: 400ms;
}
</style>