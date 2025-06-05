<script>
  const concept = {
    name: "Studio KJ",
    vision: "A curated space where design meets innovation",
    description: "This collection preview is more than just a product space - it's a celebration of thoughtful design and innovative products. Each item is carefully selected to tell a story, create an experience, and inspire visitors.",
    
    values: [
      {
        title: "Design Excellence",
        description: "Every product in the collection is design for exceptional quality, attention to detail, and aesthetic appeal."
      },
      {
        title: "Sustainability",
        description: "Products are prioritized that are made with sustainable materials and ethical manufacturing processes."
      },
      {
        title: "Innovation",
        description: "Products showcase that boundaries are pushed and introduce new ways of thinking about everyday objects."
      }
    ]
  };

</script>

<div class="max-w-4xl mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold mb-8">About {concept.name}</h1>
  
  <div class="prose prose-lg max-w-none">
    <p class="text-xl text-gray-600 mb-8">
      {concept.description}
    </p>

    <h2 class="text-2xl font-bold mt-12 mb-6">The Vision</h2>
    <p class="text-xl text-gray-600 mb-12">
      {concept.vision}
    </p>

    <div class="grid md:grid-cols-3 gap-8 mt-12">
      {#each concept.values as value}
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-bold mb-4">{value.title}</h3>
          <p class="text-gray-600">{value.description}</p>
        </div>
      {/each}
    </div>

    <div class="mt-16 text-center">
      <p class="text-gray-600 italic">
        Visit the studio to experience the curated collection of innovative designs.
      </p>
    </div>
  </div>
</div> 