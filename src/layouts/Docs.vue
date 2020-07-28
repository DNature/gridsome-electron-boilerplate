<template>
  <div>
    <h1>This is the markdown page</h1>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
