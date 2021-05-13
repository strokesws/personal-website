<template>
  <div class="timeline-item flex flex-row-reverse">
    <div
      class="timeline-item__info flex-grow bg-gray-50 rounded shadow-xl my-4"
    >
      <h2 class="timeline-item__info-title p-4 text-2xl">{{ title }}</h2>
      <p class="timeline-item__info-text p-4 text-justify">
        {{ description }}
      </p>
    </div>

    <div class="timeline-item__divider flex flex-col justify-center p-4">
      <span class="timeline-item__dot fa-stack fa-2x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-stack-1x" :class="icon"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  });
</script>

<style lang="scss">
  .timeline-item {
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
</style>
