import { mount } from '@vue/test-utils';
import Login from '../pages/Login.vue';

describe('Login.vue', () => {
  it('renders login form', () => {
    const wrapper = mount(Login);
    expect(wrapper.text()).toContain('تسجيل الدخول');
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('accepts email and password input', async () => {
    const wrapper = mount(Login);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');
    expect((emailInput.element as HTMLInputElement).value).toBe(
      'test@example.com'
    );
    expect((passwordInput.element as HTMLInputElement).value).toBe(
      'password123'
    );
  });

  it('shows error if password is less than 8 chars', async () => {
    const wrapper = mount(Login);
    const passwordInput = wrapper.find('input[type="password"]');
    await passwordInput.setValue('short');
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.text()).toContain(
      'كلمة المرور يجب أن تكون 8 أحرف على الأقل'
    );
  });
});
