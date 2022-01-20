<template>
  <div class="polaroid flex flex-col justify-between">
    <div class="polaroid__picture" :style="style">
      <img :src="pictureUrl" :alt="altText" class="polaroid__picture" />
    </div>
    <div class="polaroid__caption flex justify-center items-center">
      <p
        class="font-gochi text-gray-800 text-center text-4xl sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl"
      >
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      pictureUrl: {
        type: String,
        required: true,
      },
      caption: String,
      altText: String,
    },

    setup(props) {
      const style = { backgroundImage: `url(${props.pictureUrl})` };

      return { style };
    },
  });
</script>

<style lang="scss">
  .polaroid {
    padding: 5%;
    aspect-ratio: 3.5 / 4.2;
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);

    background: radial-gradient(#f5f5f5 15%, transparent 16%) 0 0,
      radial-gradient(#f5f5f5 15%, transparent 16%) 8px 8px,
      radial-gradient(rgba(236, 236, 236, 0.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(236, 236, 236, 0.1) 15%, transparent 20%) 8px 9px;
    background-color: #eeeeee;
    background-size: 10px 10px;

    &__picture {
      position: relative;
      aspect-ratio: 1 / 1;

      &::before {
        z-index: 1;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.24) inset;
        background: rgba(253, 230, 138, 0.11);
      }
    }

    &__caption {
      margin-top: 1rem;
    }
  }

  @supports (aspect-ratio: 1 / 1) {
    .polaroid__picture {
      background-image: none !important;

      > img {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @supports not (aspect-ratio: 1 / 1) {
    .polaroid {
      position: relative;
      width: 100%;
      padding-top: 120%;

      &__picture {
        width: 100%;
        padding-top: 100%;
        margin-top: -128%;
        background-size: cover;
        background-position: center;

        > img {
          display: none;
        }
      }

      &__caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 24%;
      }
    }
  }
</style>
