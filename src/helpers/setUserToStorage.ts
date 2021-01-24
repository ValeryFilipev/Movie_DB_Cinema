export const setUserToStorage = (user: object) => {
  const tokenExpirationTime = new Date(new Date().getTime() + 1000 * 60 * 60);

  localStorage.setItem(
    'userData',
    JSON.stringify({
      ...user,
      expiration: tokenExpirationTime.toISOString()
    })
  );
};
