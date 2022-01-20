<template>
  <div class="container mx-auto p-4">
    <h1 class="text-yellow-500 sm:text-5xl md:text-6xl mb-4">My Timeline</h1>
    <TimelineContainer>
      <TimelineItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
      ></TimelineItem>
    </TimelineContainer>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useStore } from '@/store';

  import TimelineContainer from '@/components/Timeline/TimelineContainer.vue';
  import TimelineItem from '@/components/Timeline/TimelineItem.vue';

  export default defineComponent({
    name: 'MyTimelineView',
    components: { TimelineContainer, TimelineItem },

    setup() {
      const store = useStore();
      store.dispatch('loadExperiences');

      const items = computed(() => store.getters.getExperienceList);

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
