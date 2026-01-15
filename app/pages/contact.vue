<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-6">
      📞 Liên hệ
    </h1>

    <p class="text-gray-600 mb-8">
      Nếu anh/chị có thắc mắc về sản phẩm hoặc cần tư vấn,
      vui lòng liên hệ theo thông tin bên dưới.
    </p>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Thông tin liên hệ -->
      <div>
        <h2 class="font-semibold text-lg mb-4">
          Thông tin
        </h2>

        <ul class="space-y-3 text-gray-700">
          <li>📍 Tây Nguyên, Việt Nam</li>
          <li>📞 0909 123 456</li>
          <li>✉️ lienhe@matongtaynguyen.vn</li>
        </ul>
      </div>

      <!-- Form liên hệ -->
      <form class="space-y-4">
        <input
          type="text"
          placeholder="Họ tên"
          class="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          class="w-full border rounded-lg px-4 py-2"
        />
        <textarea
          placeholder="Nội dung"
          rows="4"
          class="w-full border rounded-lg px-4 py-2"
        ></textarea>

        <button
          type="submit"
          class="bg-amber-400 text-white px-6 py-2 rounded-lg hover:bg-amber-500"
        >
          Gửi liên hệ
        </button>
      </form>
    </div>
  </div>
</template>
