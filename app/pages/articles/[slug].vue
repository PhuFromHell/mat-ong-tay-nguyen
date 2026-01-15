<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const articles = {
  'phan-biet-mat-ong-that-gia': {
    title: 'Cách phân biệt mật ong thật và giả',
    content: `
      <p>Mật ong thật có mùi thơm tự nhiên...</p>
      <p>Khi nhỏ vào nước sẽ không tan nhanh...</p>
    `,
  },
  'uong-mat-ong-moi-ngay': {
    title: 'Uống mật ong mỗi ngày có tốt không?',
    content: `
      <p>Uống mật ong đúng cách mang lại nhiều lợi ích...</p>
    `,
  },
  'uong-mat-ong-moi-ngay1': {
    title: 'Uống mật ong mỗi ngày có tốt không?',
    content: `
      <p>Uống mật ong đúng cách mang lại nhiều lợi ích...</p>
    `,
  },
  'uong-mat-ong-moi-ngay2': {
    title: 'Uống mật ong mỗi ngày có tốt không?',
    content: `
      <p>Uống mật ong đúng cách mang lại nhiều lợi ích...</p>
    `,
  },
  'uong-mat-ong-moi-ngay3': {
    title: 'Uống mật ong mỗi ngày có tốt không?',
    content: `
      <p>Uống mật ong đúng cách mang lại nhiều lợi ích...</p>
    `,
  },
}

const article = articles[route.params.slug]
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-6">
      {{ article?.title }}
    </h1>

    <div
      v-if="article"
      class="prose prose-amber max-w-none"
      v-html="article.content"
    />

    <p v-else class="text-gray-500">
      Bài viết không tồn tại.
    </p>
  </div>
</template>
