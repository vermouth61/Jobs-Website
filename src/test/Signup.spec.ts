import { mount } from '@vue/test-utils';
import Signup from '../pages/Signup.vue';

describe('Signup.vue', () => {
  it('renders signup form', () => {
    const wrapper = mount(Signup);
    expect(wrapper.text()).toContain('سجل معانا دلوقتي!');
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('accepts all input fields', async () => {
    const wrapper = mount(Signup);
    const inputs = wrapper.findAll('input');
    expect(inputs.length).toBeGreaterThanOrEqual(4);
    await inputs[0].setValue('أحمد');
    await inputs[1].setValue('محمد');
    await inputs[2].setValue('test@example.com');
    await inputs[3].setValue('password123');
    await inputs[4].setValue('01000000000');
    expect((inputs[0].element as HTMLInputElement).value).toBe('أحمد');
    expect((inputs[1].element as HTMLInputElement).value).toBe('محمد');
    expect((inputs[2].element as HTMLInputElement).value).toBe(
      'test@example.com'
    );
    expect((inputs[3].element as HTMLInputElement).value).toBe('password123');
    expect((inputs[4].element as HTMLInputElement).value).toBe('01000000000');
  });

  it('requires all fields', async () => {
    const wrapper = mount(Signup);
    await wrapper.find('form').trigger('submit.prevent');
    // Should not submit if required fields are empty
    // You can check for validation messages if implemented
    expect(wrapper.findAll('input:invalid').length).toBeGreaterThan(0);
  });
});
