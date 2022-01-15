<template>
  <div id="reviews-list">
    <section>
      <div class="listReviews" v-for="(review, index) in reviews" :key="index">
        <p>
          <strong>User {{ index + 1 }}:</strong> {{ reviews[index].inputName }}
        </p>
        <p><strong>Review:</strong> {{ reviews[index].inputReview }}</p>
        <p v-if="reviews[index].inputStars == 1">
          <strong>Stars:</strong> &#11088;
        </p>
        <p v-if="reviews[index].inputStars == 2">
          <strong>Stars:</strong> &#11088; &#11088;
        </p>
        <p v-if="reviews[index].inputStars == 3">
          <strong>Stars:</strong> &#11088; &#11088; &#11088;
        </p>
        <p v-if="reviews[index].inputStars == 4">
          <strong>Stars:</strong>
          &#11088; &#11088; &#11088; &#11088;
        </p>
        <p v-if="reviews[index].inputStars == 5">
          <strong>Stars:</strong>
          &#11088; &#11088; &#11088; &#11088; &#11088;
        </p>
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
hr {
  margin: 1% 0;
}
</style>