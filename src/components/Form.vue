<template>
  <div id="form" @submit.prevent="addReview">
    <h2>Please give us a review &#128522;</h2>
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
      <label style="text-align: left" for="">Stars:</label>
      <select name="stars" id="stars" v-model="inputStars">
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option></select
      ><br />

      <input id="submit" type="submit" value="Send Review" />
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
      inputStars: null,
    };
  },
  methods: {
    addReview() {
      if (
        this.inputName === "" ||
        this.inputReview === "" ||
        this.inputStars === null
      ) {
        alert("Please fill out every field.");
        return;
      }
      let reviewObj = {
        inputName: this.inputName,
        inputReview: this.inputReview,
        inputStars: this.inputStars,
      };
      console.log(reviewObj);
      this.$emit("add-review", reviewObj);
      this.inputName = "";
      this.inputReview = "";
      this.inputStars = null;
    },
  },
};
</script>

<style lang="scss">
form {
  max-width: 600px;
  padding: 20px 40px;
  margin: 0 auto;
  input,
  select,
  textarea {
    width: 100%;
    padding: 6px 2px;
    margin: 2% 0;
  }
  #submit {
    background: #66003f;
    font-weight: 700;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}
</style>