<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-6">🛒 Giỏ hàng</h1>

    <div v-if="true">
      <!-- list items -->
      <div class="flex justify-between font-bold mt-6">
        <span>Tổng cộng</span>
        <span>470.000 đ</span>
      </div>
    </div>

    <NuxtLink to="/products" class="text-amber-500">
      ← Tiếp tục mua
    </NuxtLink>
  </div>
</template>
