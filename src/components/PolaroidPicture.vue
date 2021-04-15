<template>
  <div class="polaroid">
    <div class="polaroid__picture"></div>
    <div class="polaroid__caption">Hello!</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({});
</script>

<style lang="scss">
  .polaroid {
    padding: 5%;
    aspect-ratio: 3.5 / 4.2;
    background: #fff;
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);

    &__picture {
      aspect-ratio: 1 / 1;
      background-image: url('https://i.pinimg.com/originals/0f/84/d4/0f84d48b10a9d8867b287086cd62bf00.jpg');
      background-size: cover;
      background-position: center;
    }

    &__caption {
      padding: 1rem;
    }
  }

  @supports not (aspect-ratio: 3.5 / 4.2) {
    .polaroid {
      position: relative;
      width: 100%;
      padding-top: 120%;
    }
  }

  @supports not (aspect-ratio: 1 / 1) {
    .polaroid__picture {
      position: relative;
      width: 100%;
      padding-top: 100%;
      margin-top: -125%;
    }

    .polaroid__caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
