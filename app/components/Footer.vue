<template>
  <footer class="bg-amber-100 border-t mt-20">
    <div class="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

      <!-- Thương hiệu -->
      <div>
        <h3 class="font-bold text-lg mb-2">
          🍯 Mật ong Tây Nguyên
        </h3>
        <p class="text-gray-600">
          Mật ong nguyên chất từ thiên nhiên.
          <br /> Không pha tạp – Không chất bảo quản
        </p>
      </div>

      <!-- Menu -->
      <div>
        <h4 class="font-semibold mb-3">Liên kết</h4>
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="hover:text-amber-500">Trang chủ</NuxtLink></li>
          <li><NuxtLink to="/products" class="hover:text-amber-500">Sản phẩm</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-amber-500">Liên hệ</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-amber-500">Giới thiệu</NuxtLink></li>
        </ul>
      </div>

      <!-- Liên hệ nhanh -->
      <div>
        <h4 class="font-semibold mb-3">Liên hệ</h4>
        <p>📞 0962 122 004</p>
        <p>✉️ hoangaphu69@gmail.com</p>
      </div>

    </div>

    <div class="text-center text-sm text-gray-500 pb-4">
      © 2026 Mật ong Tây Nguyên
    </div>
  </footer>
</template>
