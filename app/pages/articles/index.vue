<script setup>
const articles = [
  {
    title: 'Cách phân biệt mật ong thật và giả',
    slug: 'phan-biet-mat-ong-that-gia',
    excerpt: 'Những mẹo đơn giản giúp bạn nhận biết mật ong nguyên chất.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Uống mật ong mỗi ngày có tốt không?',
    slug: 'uong-mat-ong-moi-ngay',
    excerpt: 'Lợi ích và lưu ý khi sử dụng mật ong hàng ngày.',
    image: 'https://via.placeholder.com/600x400',
  },
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-8">
      📝 Kiến thức về mật ong
    </h1>

    <div class="grid md:grid-cols-2 gap-8">
      <NuxtLink
        v-for="item in articles"
        :key="item.slug"
        :to="`/articles/${item.slug}`"
        class="border rounded-xl overflow-hidden hover:shadow-lg transition"
      >
        <img :src="item.image" class="h-56 w-full object-cover" />
        <div class="p-5">
          <h2 class="font-semibold text-xl mb-2">
            {{ item.title }}
          </h2>
          <p class="text-gray-600">
            {{ item.excerpt }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
