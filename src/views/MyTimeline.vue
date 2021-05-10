<template>
  <h1>My Timeline</h1>
  <div class="timeline p-4">
    <div class="timeline-item flex flex-row-reverse">
      <div class="timeline-item__info flex-grow">
        <div class="timeline-item__info-title">My title</div>
        <div class="timeline-item__info-text">some text</div>
      </div>
      <div class="timeline-item__divider flex-none p-4">
        <div class="timeline-item__dot">
          <i class="fab fa-github-alt text-xl sm:text-5xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
  .timeline {
    background: chocolate;

    &-item {
      &__divider {
        background: brown;
      }

      &__info {
        max-width: calc(50% - 80px);

        &-title {
          background: cadetblue;
        }

        &-text {
          background: chartreuse;
        }
      }

      &__dot {
        background: burlywood;
      }
    }
  }
</style>
