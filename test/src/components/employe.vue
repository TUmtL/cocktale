<template>
  <div>
    {{ data.name }} , {{ data.lastName }} , {{ data.experience }} , {{ data.age }} , {{ data.addres }}
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ]
}
</script>

<style></style>