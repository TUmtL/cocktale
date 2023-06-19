import { defineStore } from "pinia";
export default defineStore('inventoryStore', {
  state() {
    return {
      inventoryCells: [
        { name: "emerald", count: 4 },
        { name: "tapaz", count: 2 },
        { name: "amethist", count: 5 },
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
      ],
      curentItem:'',
      modalOpen:0
    }
  }
})