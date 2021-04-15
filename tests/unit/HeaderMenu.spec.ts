import { mount } from '@vue/test-utils';
import router from '@/router/index';
import HeaderMenu from '@/components/HeaderMenu.vue';

describe('HeaderMenu.vue', () => {
  it('renders the same amount of routes as in router index', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(HeaderMenu, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findAll('a')).toHaveLength(router.getRoutes().length);
  });
});
