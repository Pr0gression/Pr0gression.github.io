<template>
   <div class="flex justify-center">
      <q-btn type="button" ripple square @click="count++">count is {{ count }}</q-btn>
   </div>
</template>

<script>
import { ref } from 'vue'

export default {
   name: 'home-page',

   setup() {
      const count = ref(0);

      return {
         count
      }
   }
}
</script>


<style scoped></style>
