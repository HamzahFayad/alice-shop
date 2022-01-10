<template>
  <div id="form" @submit.prevent="addReview">
    <form>
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" v-model="inputName" /><br />
      <textarea
        name="review"
        id="review"
        cols="30"
        rows="10"
        v-model="inputReview"
      ></textarea>
      <select name="stars" id="stars" v-model="inputStars">
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      inputName: null,
      inputReview: null,
      inputStars: null,
      reviewObj: null,
    };
  },
  methods: {
    addReview() {
      this.reviewObj = {
        inputName: this.inputName,
        inputReview: this.inputReview,
        inputStars: this.inputStars,
      };
      console.log(this.reviewObj);
      this.inputName = null;
      this.inputReview = null;
      this.inputStars = null;
    },
  },
};
</script>

<style lang="scss">
</style>