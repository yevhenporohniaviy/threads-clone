
<template>
  <MainLayout>
    <div id="IndexPage" class="w-full overflow-auto">
      <div class="mx-auto max-w-[500px] overflow-hidden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto" v-if="isPosts">
          <div v-for="post in posts" :key="post">
            <Posts :post="post" @isDeleted="post = []"/>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import Posts from '~/components/Posts.vue';
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
const user = useSupabaseUser()

let posts = ref([]);
let isPosts = ref(true);
let isLoading = ref(false);

watchEffect(() => {
  if (!user.value) {
    return navigateTo('/auth')
  }
})

onBeforeMount(() => {
  posts.value = [
    {
      name: 'asd',
      image: 'https://placehold.co/100',
      text: 'test',
      picture: 'https://placehold.co/400'
    }
  ]
})

</script>