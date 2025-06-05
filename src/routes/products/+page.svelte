<script lang="ts">
  const products = [
    {
      id: 1,
      name: "Minimalist Chair",
      description: "A beautifully crafted chair that combines comfort with minimalist design principles.",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1",
      category: "Furniture",
      year: "2024"
    },
    {
      id: 2,
      name: "Ceramic Vase",
      description: "Handcrafted ceramic vase with a unique texture and organic form.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      category: "Ceramics",
      year: "2023"
    },
    {
      id: 3,
      name: "Wooden Shelf",
      description: "Sustainable wooden shelf system that adapts to your space.",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
      category: "Furniture",
      year: "2024"
    },
    {
      id: 1,
      name: "Minimalist Chair",
      description: "A beautifully crafted chair that combines comfort with minimalist design principles.",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1",
      category: "Furniture",
      year: "2024"
    },
    {
      id: 2,
      name: "Ceramic Vase",
      description: "Handcrafted ceramic vase with a unique texture and organic form.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      category: "Ceramics",
      year: "2023"
    },
    {
      id: 3,
      name: "Wooden Shelf",
      description: "Sustainable wooden shelf system that adapts to your space.",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
      category: "Furniture",
      year: "2024"
    }
  ];

  let selectedCategory = 'all';
  let searchQuery = '';

  $: filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div class="text-center mb-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Collection</h1>
    <p class="text-xl text-gray-600">Discover our curated selection of innovative designs</p>
  </div>

  <div class="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
    <div class="w-full sm:w-96">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search designs..."
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
    <div class="flex gap-4">
      <select
        bind:value={selectedCategory}
        class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {#each categories as category}
          <option value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
        {/each}
      </select>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredProducts as product}
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="aspect-w-16 aspect-h-9">
          <img
            src={product.image}
            alt={product.name}
            class="w-full h-64 object-cover"
          />
        </div>
        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-semibold text-gray-900">{product.name}</h3>
            <span class="text-sm text-gray-500">{product.year}</span>
          </div>
          <p class="text-gray-600 mb-4">{product.description}</p>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <span>{product.category}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div> 