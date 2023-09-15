import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppInput from '../../utility/BaseInput.vue';

describe('AppInput', () => {
  it('renders input and label properly', () => {
    const wrapper = mount(AppInput, {
      props: {
        id: 'input-id',
        label: 'Username',
        placeHolder: 'Enter your username',
        value: '',
      },
    });

    const label = wrapper.find('label');
    const input = wrapper.find('input');

    // Check if the label and input are rendered correctly
    expect(label.exists()).toBe(true);
    expect(input.exists()).toBe(true);

    // Check if the label text and input placeholder are set correctly
    expect(label.text()).toBe('Username');
    expect(input.attributes('placeholder')).toBe('Enter your username');
  });

  it('applies focus styles on input when focused', async () => {
    const wrapper = mount(AppInput, {
      props: {
        id: 'input-id',
        label: 'Username',
        placeHolder: 'Enter your username',
        value: '',
      },
    });

    const input = wrapper.find('input');

    // Check if focus styles are not applied initially
    expect(input.classes()).not.toContain('focused');

    // Simulate focusing on the input
    await input.trigger('focus');

    // Check if focus styles are applied
    expect(input.classes()).toContain('focused');

    // Simulate blurring the input
    await input.trigger('blur');

    // Check if focus styles are removed after blurring
    expect(input.classes()).not.toContain('focused');
  });

  it('emits input event when input value changes', async () => {
   const wrapper = mount(AppInput, {
      props: {
        id: 'input-id',
        label: 'Username',
        placeHolder: 'Enter your username',
        value: '',
      },
   });

   const input = wrapper.find('input');

   // Simulate typing into the input
   await input.setValue('john_doe');

   // Check if the input event is emitted with the new value
   expect(wrapper.emitted('update:modelValue')).toBeTruthy();
   expect(wrapper.emitted('update:modelValue')[0]).toEqual(['john_doe']);
 });


});
