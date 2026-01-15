<template>
  <header class="bg-amber-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold title-color">
        🍯 Mật Ong Tây Nguyên
      </NuxtLink>

      <!-- Menu -->
      <nav class="space-x-6 hidden md:block">
        <NuxtLink to="/" class="text-gray-700 hover:text-amber-500">
          Trang chủ
        </NuxtLink>
        <NuxtLink to="/articles" class="hover:text-amber-500">
          Bài viết
        </NuxtLink>
        <NuxtLink to="/products" class="text-gray-700 hover:text-amber-500">
          Sản phẩm
        </NuxtLink>
        <NuxtLink to="/about" class="hover:text-amber-500">
          Giới thiệu
        </NuxtLink>
        <NuxtLink to="/contact" class="text-gray-700 hover:text-amber-500">
          Liên hệ
        </NuxtLink>
      </nav>

      <!-- Cart -->
      <NuxtLink
        to="/cart"
        class="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500"
      >
        Giỏ hàng
      </NuxtLink>
    </div>
  </header>
</template>