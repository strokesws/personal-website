<template>
  <div class="container mx-auto p-4">
    <h1 class="text-yellow-500 sm:text-5xl md:text-6xl mb-4">My Timeline</h1>
    <div class="timeline p-4">
      <div
        class="timeline-item flex flex-row-reverse"
        v-for="(item, index) in items"
        :key="index"
      >
        <div
          class="timeline-item__info flex-grow bg-gray-50 rounded shadow-xl my-4"
        >
          <h2 class="timeline-item__info-title p-4 text-2xl">My title</h2>
          <p class="timeline-item__info-text p-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            volutpat enim ut tempor sodales. Donec turpis nisl, sollicitudin
            iaculis volutpat nec, venenatis a dolor. Mauris porttitor posuere
            consequat. Morbi venenatis tortor nec molestie tincidunt.
            Suspendisse fringilla nisi ac sapien bibendum laoreet. Curabitur a
            semper est, eget ullamcorper diam. Proin vel orci eget magna congue
            ullamcorper sit amet vitae felis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ligula orci, molestie interdum
            mollis et, consectetur sit amet ligula. Cras sed nunc orci. Cras
            nisi dui, mollis in tincidunt a, blandit sed velit. Morbi est risus,
            lacinia eu pharetra ut, scelerisque ac nulla. Integer mi diam,
            facilisis et urna nec, pretium finibus quam.
          </p>
        </div>

        <div class="timeline-item__divider flex flex-col justify-center p-4">
          <span class="timeline-item__dot fa-stack fa-2x">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-github-alt fa-stack-1x"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const items = [{}, {}, {}, {}];

      return { items };
    },
  });
</script>

<style lang="scss">
  .timeline {
    &-item {
      &__info {
        max-width: calc(50% - 56px);
        min-height: 100px;
      }

      &__divider {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: 1px;
          left: calc(50% - 1px);
          right: auto;
          bottom: 1px;
          background: rgba(0, 0, 0, 0.12);
          height: 100%;
          width: 2px;
        }
      }

      &__dot > .fa-circle {
        @apply text-green-300;
        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.22);
      }

      &:first-child {
        .timeline-item__info {
          margin-top: 0;
        }

        .timeline-item__divider {
          justify-content: flex-start;
          padding-top: 0;
        }
      }

      &:last-child {
        .timeline-item__info {
          margin-bottom: 0;
        }

        .timeline-item__divider {
          justify-content: flex-end;
          padding-bottom: 0;
        }
      }

      &:nth-child(2n) {
        flex-direction: row;
      }
    }
  }
</style>
