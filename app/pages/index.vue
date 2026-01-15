<template>
  <section class="bg-amber-50 py-16 text-center">
    <h1 class="text-4xl font-bold mb-4">
      🍯 Mật ong Tây Nguyên nguyên chất
    </h1>
    <NuxtLink
      to="/products"
      class="inline-block bg-amber-400 text-white px-6 py-3 rounded-lg"
    >
      Xem sản phẩm
    </NuxtLink>
  </section>

  <section class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-2xl font-bold mb-6">Sản phẩm nổi bật</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <ProductCard name="Mật ong hoa rừng" :price="250000" image="https://nonglamfood.com/uploads/images/mat-ong-binh-thuong-co-mau-vang-tuoi.png" />
    </div>
  </section>
</template>
