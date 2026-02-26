<script setup>

</script>

<template>
  <h1>Product and Order Manage</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <ul class="nav">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Products List</RouterLink>
      </li>
      <li>
        <RouterLink to="/order">Order List</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.nav li{
  padding: 4px;
}
</style>
