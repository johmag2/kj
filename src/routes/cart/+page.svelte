<script lang="ts">
  let cartItems = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      price: 29.99,
      image: 'https://via.placeholder.com/100x100',
      quantity: 2
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 89.99,
      image: 'https://via.placeholder.com/100x100',
      quantity: 1
    }
  ];

  $: subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  $: shipping = subtotal > 50 ? 0 : 10;
  $: total = subtotal + shipping;

  function updateQuantity(id: number, newQuantity: number) {
    if (newQuantity < 1) return;
    cartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
  }

  function removeItem(id: number) {
    cartItems = cartItems.filter(item => item.id !== id);
  }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

  {#if cartItems.length === 0}
    <div class="text-center py-12">
      <p class="text-gray-600 text-lg mb-4">Your cart is empty</p>
      <a href="/products" class="text-red-500 hover:text-red-600">Continue Shopping</a>
    </div>
  {:else}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow-md divide-y">
          {#each cartItems as item}
            <div class="p-6 relative">
              <div class="flex gap-4">
                <img src={item.image} alt={item.name} class="w-20 h-20 object-cover rounded" />
                <div class="flex-1">
                  <h3 class="text-lg font-semibold">{item.name}</h3>
                  <p class="text-gray-600">${item.price}</p>
                </div>
                <div class="flex items-center gap-2">
                  <button
                    on:click={() => updateQuantity(item.id, item.quantity - 1)}
                    class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span class="w-8 text-center">{item.quantity}</span>
                  <button
                    on:click={() => updateQuantity(item.id, item.quantity + 1)}
                    class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
                <p class="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  on:click={() => removeItem(item.id)}
                  class="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-6">Order Summary</h2>
          <div class="space-y-4">
            <div class="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div class="border-t pt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button class="w-full mt-6 py-3 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition-colors">
            Proceed to Checkout
          </button>
          <a href="/products" class="block text-center mt-4 text-gray-600 hover:text-gray-900">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  {/if}
</div> 