import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import authService from '../services/authService.js';

export function useAuth() {
  const router = useRouter();
  const loading = ref(false);
  const error = ref('');
  const success = ref('');

  // Reactive user state
  const currentUser = ref(authService.getCurrentUser());
  const isLoggedIn = computed(() => authService.isLoggedIn());

  // Register function
  const register = async (userData) => {
    loading.value = true;
    error.value = '';
    success.value = '';

    try {
      const result = authService.register(userData);
      success.value = result.message;

      // Auto login after successful registration
      await login(userData.email, userData.password);

      return result;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Login function
  const login = async (email, password) => {
    loading.value = true;
    error.value = '';
    success.value = '';

    try {
      const result = authService.login(email, password);
      currentUser.value = result.user;
      success.value = result.message;

      // Redirect to home page after login
      router.push('/');

      return result;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Logout function
  const logout = () => {
    try {
      const result = authService.logout();
      currentUser.value = null;
      success.value = result.message;

      // Redirect to login page
      router.push('/login');

      return result;
    } catch (err) {
      error.value = err.message;
      throw err;
    }
  };

  // Update profile
  const updateProfile = async (userData) => {
    loading.value = true;
    error.value = '';
    success.value = '';

    try {
      const result = authService.updateProfile(userData);
      currentUser.value = { ...currentUser.value, ...userData };
      success.value = result.message;

      return result;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    loading.value = true;
    error.value = '';
    success.value = '';

    try {
      const result = authService.changePassword(currentPassword, newPassword);
      success.value = result.message;

      return result;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Clear messages
  const clearMessages = () => {
    error.value = '';
    success.value = '';
  };

  return {
    // State
    currentUser,
    isLoggedIn,
    loading,
    error,
    success,

    // Methods
    register,
    login,
    logout,
    updateProfile,
    changePassword,
    clearMessages,
  };
}
