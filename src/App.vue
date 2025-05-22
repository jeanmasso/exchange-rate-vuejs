<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/exchange-rate-options">Exchante Rate (API Options)</RouterLink> |
    <RouterLink to="/exchange-rate-composition">Exchante Rate (API Composition)</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
