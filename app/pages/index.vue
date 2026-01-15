<template>
  <section class="bg-amber-50 py-16 text-center">
    <h1 class="text-4xl font-bold mb-4 text-amber-500">
      🍯 Mật ong cà phê Tây Nguyên <br>– Mật ong nguyên chất
    </h1>
    <NuxtLink to="/products" class="inline-block bg-amber-400 text-white px-6 py-3 rounded-lg">
      Xem sản phẩm
    </NuxtLink>
  </section>

  <section class="max-w-7xl mx-auto px-4 py-12 title-color">
    <div class="grid md:grid-cols-3 gap-8 items-start">

      <!-- Right: Sản phẩm bán chạy -->
      <aside class="space-y-4 md:col-span-1">
        <h2 class="text-2xl font-bold mb-2">Sản phẩm bán chạy</h2>
        <div class="grid gap-6">
          <ProductCard name="Mật ong hoa rừng" :price="250000" image="https://nonglamfood.com/uploads/images/mat-ong-binh-thuong-co-mau-vang-tuoi.png" />
        </div>
      </aside>

      <!-- Left: Tác dụng của mật ong -->
      <div class="md:col-span-2">
        <h2 class="text-2xl font-bold mb-6">Tác dụng tuyệt vời của mật ong</h2>
        <h3 class="text-lg mb-6">Nói về mật ong thì có vô vàn hiệu quả thần kỳ từ dược liệu, thực phẩm, mỹ phẩm...</h3>
        <h3 class="text-lg mb-6">Mật ong là sản phẩm tự nhiên quý giá, được sử dụng rộng rãi trong y học cổ truyền, ẩm thực và thẩm mỹ từ xa xưa. Với thành phần giàu enzyme, vitamin, khoáng chất và chất chống oxy hóa, mật ong mang lại nhiều lợi ích toàn diện cho con người.</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-amber-50 p-4 rounded-lg shadow hover:shadow-none">
            <h3 class="font-semibold mb-2">Tăng cường sức đề kháng</h3>
            <p class="text-gray-600">Mật ong chứa các chất chống oxy hóa giúp tăng cường hệ miễn dịch.</p>
          </div>
          <div class="bg-amber-50 p-4 rounded-lg shadow hover:shadow-none">
            <h3 class="font-semibold mb-2">Làm dịu cổ họng</h3>
            <p class="text-gray-600">Giúp giảm ho và đau họng hiệu quả.</p>
          </div>
          <div class="bg-amber-50 p-4 rounded-lg shadow hover:shadow-none">
            <h3 class="font-semibold mb-2">Cải thiện giấc ngủ</h3>
            <p class="text-gray-600">Mật ong giúp thư giãn và cải thiện chất lượng giấc ngủ.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>