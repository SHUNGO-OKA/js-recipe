Vue.createApp({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
  },
}).mount("#app")

Vue.createApp({
  data() {
    return {
      seen: false,
    }
  },
  methods: {
    hyouji: function() {
      this.seen = true
    },
  },
}).mount("#v-if")

Vue.createApp({
  data() {
    return {
      user: null,
    }
  },
  methods: {
    signIn() {
      this.user = {
        name: "ギーク太郎",
      }
    },
    signOut() {
      this.user = null
    },
  },
}).mount("#v-if-sign-in")

Vue.createApp({
  data() {
    return {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    }
  },
}).mount("#v-for")

Vue.createApp({
  data() {
    return {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    }
  },
  methods: {
    addAnimal: function() {
      this.animals.push("んらいおん")
    },
  },
}).mount("#v-for-push")
