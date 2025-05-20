import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('debería bloquear acceso si no hay token', () => {
    localStorage.removeItem('token');
    const mockRoute: any = {};
    const mockState: any = {};
    const result = AuthGuard(mockRoute, mockState);
    expect(result).toBeFalse();
  });
});
