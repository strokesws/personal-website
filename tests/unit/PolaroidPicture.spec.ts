import { mount } from '@vue/test-utils';

import PolaroidPicture from '@/components/PolaroidPicture.vue';

describe('PolaroidPicture.vue', () => {
  it('renders the img with pictureUrl prop value', async () => {
    const pictureUrl = 'a';
    const wrapper = mount(PolaroidPicture, { props: { pictureUrl } });

    const imgSrc = wrapper.find('img').attributes().src;
    expect(imgSrc).toBe(pictureUrl);
  });
});
