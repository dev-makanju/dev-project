import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseModal from '../../utility/BaseModal.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes, faCircleCheck);


describe('BaseModal' , () => {
   it('emits close event when close button is clicked', async() => {
      const wrapper = mount(BaseModal , {
         global: {
            components: {
               FontAwesomeIcon,
            }
         }
      })
      
      // Lets assume this selector is correct
      const closeButton = wrapper.find('.c-tst'); 
      // Simulate clicking the close button
      await closeButton.trigger('click');
      // Check if the close event is emitted
      expect(wrapper.emitted('close')).toBeTruthy();
   })
})