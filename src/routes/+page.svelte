<script lang="ts">
  const featuredProducts = [
    {
      id: 1,
      name: "Minimalist Chair",
      description: "A beautifully crafted chair that combines comfort with minimalist design principles.",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1",
      designer: "Jane Smith"
    },
    {
      id: 2,
      name: "Ceramic Vase",
      description: "Handcrafted ceramic vase with a unique texture and organic form.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      designer: "John Doe"
    },
    {
      id: 3,
      name: "Wooden Shelf",
      description: "Sustainable wooden shelf system that adapts to your space.",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
      designer: "Emma Wilson"
    }
  ];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Hero Section -->
  <div class="py-20 text-center">
    <h1 class="text-5xl font-bold text-gray-900 mb-6">Studio KJ</h1>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      A curated space where design meets innovation. Discover our collection of thoughtfully crafted pieces that tell stories through their form and function.
    </p>
  </div>

  <!-- Featured Designs -->
  <div class="py-16">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Designs</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each featuredProducts as product}
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p class="text-gray-600 mb-4">{product.description}</p>
            <p class="text-sm text-gray-500">Designer: {product.designer}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Concept Features -->
  <div class="py-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">The Concept</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Innovative Design</h3>
          <p class="text-gray-600">Pushing boundaries with forward-thinking design solutions</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Sustainable Practice</h3>
          <p class="text-gray-600">Committed to environmentally conscious design and production</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Artistic Expression</h3>
          <p class="text-gray-600">Celebrating the intersection of art and functional design</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="py-16 text-center">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Experience The Collection</h2>
    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Visit the studio to experience the curated collection of innovative designs.
    </p>
    <a
      href="/products"
      class="inline-block px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
    >
      View Collection
    </a>
  </div>
</div>
