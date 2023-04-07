import { defineStore } from 'pinia';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
export const useSettingStore = defineStore("setting", {
  state: () => ({
    menu: {
      active: true,
    },
    hash: location.hash.replace("#", ""),
    tab: {
      idx: -1,
    },
    favList: JSON.parse(cookies.get("favList") || "[]"),
  }),
  actions: {
    toggleMenu() {
      this.menu.active = !this.menu.active;
    },
  },
});

