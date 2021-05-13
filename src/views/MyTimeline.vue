<template>
  <div class="container mx-auto p-4">
    <h1 class="sm:text-5xl md:text-6xl mb-4">My Timeline</h1>
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
          <div class="timeline-item__dot rounded-full shadow-md p-2">
            <i class="fab fa-github-alt text-xl sm:text-5xl"></i>
          </div>
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
        max-width: calc(50% - 46.5px);
        min-height: 100px;

        &-title {
        }

        &-text {
        }
      }

      &__divider {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: calc(50% - 1px);
          right: auto;
          bottom: 0;
          background: rgba(0, 0, 0, 0.12);
          height: 100%;
          width: 2px;
        }
      }

      &__dot {
        z-index: 1;
        background: burlywood;
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
