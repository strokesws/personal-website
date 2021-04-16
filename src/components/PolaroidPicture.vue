<template>
  <div class="polaroid">
    <div class="polaroid__picture" :style="style"></div>
    <div
      class="polaroid__caption font-gochi text-6xl text-gray-800 text-center"
    >
      {{ caption }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      picture: {
        type: String,
        required: true,
      },
      caption: String,
    },

    setup(props) {
      const style = { backgroundImage: `url(${props.picture})` };

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
      aspect-ratio: 1 / 1;
      background-size: cover;
      background-position: center;
      box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.24) inset;
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
      margin-top: -128%;
    }

    .polaroid__caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
