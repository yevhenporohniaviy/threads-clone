import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => (
    {
    posts: [],
    isMenuIverlay: false,
    isLogoutOverlay: false
  })
})