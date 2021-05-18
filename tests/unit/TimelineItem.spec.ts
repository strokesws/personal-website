import { mount } from '@vue/test-utils';
import TimelineItem from '@/components/Timeline/TimelineItem.vue';

describe('TimelineItem.vue', () => {
  it('should display title as "a"', () => {
    const wrapper = mount(TimelineItem, {
      props: { title: 'a', description: 'b', icon: 'fa-github-alt' },
    });

    const title = wrapper.find('.timeline-item__info-title');

    expect(title.text()).toBe('a');
  });

  it('should display description as "b"', () => {
    const wrapper = mount(TimelineItem, {
      props: { title: 'a', description: 'b', icon: 'fa-github-alt' },
    });

    const description = wrapper.find('.timeline-item__info-text');

    expect(description.text()).toBe('b');
  });

  it('should display icon "fa-github-alt"', () => {
    const wrapper = mount(TimelineItem, {
      props: { title: 'a', description: 'b', icon: 'fa-github-alt' },
    });

    const icon = wrapper.find('.fa-github-alt');

    expect(icon.exists()).toBe(true);
  });
});
