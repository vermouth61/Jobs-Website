// Authentication service for managing user sessions without backend
class AuthService {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  }

  // Register a new user
  register(userData) {
    // Check if user already exists
    const existingUser = this.users.find(
      (user) => user.email === userData.email
    );
    if (existingUser) {
      throw new Error('البريد الإلكتروني مستخدم بالفعل');
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password, // In real app, this should be hashed
      mobile: userData.mobile,
      createdAt: new Date().toISOString(),
      isActive: true,
    };

    // Add to users array
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));

    return { success: true, message: 'تم إنشاء الحساب بنجاح' };
  }

  // Login user
  login(email, password) {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }

    if (!user.isActive) {
      throw new Error('الحساب غير مفعل');
    }

    // Set current user
    this.currentUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
    };

    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

    return {
      success: true,
      message: 'تم تسجيل الدخول بنجاح',
      user: this.currentUser,
    };
  }

  // Logout user
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    return { success: true, message: 'تم تسجيل الخروج بنجاح' };
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Check if user is logged in
  isLoggedIn() {
    return this.currentUser !== null;
  }

  // Update user profile
  updateProfile(userData) {
    const userIndex = this.users.findIndex((u) => u.id === this.currentUser.id);
    if (userIndex === -1) {
      throw new Error('المستخدم غير موجود');
    }

    // Update user data
    this.users[userIndex] = { ...this.users[userIndex], ...userData };
    localStorage.setItem('users', JSON.stringify(this.users));

    // Update current user
    this.currentUser = { ...this.currentUser, ...userData };
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

    return { success: true, message: 'تم تحديث البيانات بنجاح' };
  }

  // Change password
  changePassword(currentPassword, newPassword) {
    const user = this.users.find((u) => u.id === this.currentUser.id);

    if (!user || user.password !== currentPassword) {
      throw new Error('كلمة المرور الحالية غير صحيحة');
    }

    // Update password
    user.password = newPassword;
    localStorage.setItem('users', JSON.stringify(this.users));

    return { success: true, message: 'تم تغيير كلمة المرور بنجاح' };
  }
}

export default new AuthService();
