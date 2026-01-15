<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border border-amber-200 bg-amber-50 rounded-xl overflow-hidden hover:shadow-lg transition">
    <img
      :src="image"
      :alt="name"
      class="w-full h-48 object-cover"
    />

    <div class="p-4">
      <h3 class="font-semibold text-lg mb-1">
        {{ name }}
      </h3>

      <p class="text-amber-600 font-bold mb-3">
        {{ props.price.toLocaleString() }} đ
      </p>

      <button
        class="w-full bg-amber-400 text-white py-2 rounded-lg hover:bg-amber-500"
      >
        Thêm vào giỏ
      </button>
    </div>
  </div>
</template>
