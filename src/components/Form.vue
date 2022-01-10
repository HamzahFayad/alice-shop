<template>
  <div id="form" @submit.prevent="addReview">
    <form>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="Name"
        v-model="inputName"
      /><br /><br />
      <textarea
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder="Your Review"
        v-model="inputReview"
      ></textarea>
      <br />
      <select name="stars" id="stars" v-model="inputStars">
        <option value="">stars</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option></select
      ><br />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      inputName: "",
      inputReview: "",
      inputStars: "",
    };
  },
  methods: {
    addReview() {
      let reviewObj = {
        inputName: this.inputName,
        inputReview: this.inputReview,
        inputStars: this.inputStars,
      };
      console.log(reviewObj);
      this.$emit("add-review", reviewObj);
      this.inputName = "";
      this.inputReview = "";
      this.inputStars = "";
    },
  },
};
</script>

<style lang="scss">
</style>