import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppButton from '../../utility/BaseButton.vue';

describe('AppButton', () => {
  it('renders primary button properly', () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'Click me',
        variant: 'primary',
        disabled: false,
      },
    });

    // Check if the button has the correct label
    expect(wrapper.text()).toContain('Click me');
    // Check if the button has the correct classes for primary variant
    expect(wrapper.classes()).toContain('variant-primary');
    expect(wrapper.classes()).not.toContain('variant-primary-disabled');
  });

  it('renders disabled primary button properly', () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'Click me',
        variant: 'primary',
        disabled: true,
      },
    });

    // Check if the button has the correct classes for disabled primary variant
    expect(wrapper.classes()).toContain('variant-primary-disabled');
    expect(wrapper.classes()).not.toContain('variant-primary');    
    // Check if the 'disabled' attribute is set correctly
    expect(wrapper.attributes('aria-disabled')).toBe('true');
  });
});
