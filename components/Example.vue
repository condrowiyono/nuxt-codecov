<template>
  <div
    class="bg-white shadow-lg rounded"
    :class="{ 'p-4': !noPadding}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Example',

  props: {
    noPadding: {
      type: Boolean,
      default: false
    }
  }
}
</script>
