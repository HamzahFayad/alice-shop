<template>
  <div id="reviews-list">
    <section>
      <div class="listReviews" v-for="(review, index) in reviews" :key="index">
        <p>
          <strong>User {{ index + 1 }}:</strong> {{ reviews[index].inputName }}
        </p>
        <p><strong>Review:</strong> {{ reviews[index].inputReview }}</p>
        <p><strong>Stars:</strong> {{ reviews[index].inputStars }} stars</p>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ReviewsList",
  props: ["reviews"],
};
</script>

<style lang="scss">
.listReviews {
  margin: 20px 0;
}
p {
  text-align: left;
}
</style>