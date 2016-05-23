// This is a JavaScript file

if (false == monaca.cloud.User.isAuthenticated()) {
  // Go to login
  app.slidingMenu.setMainPage('login.html', {closeMenu: true})
}