export default ({ store, route, redirect }) => {
  if (!store.state.auth.auth && route.fullPath.indexOf('/lk-carowner') > -1 && route.fullPath !== '/lk-carowner/search') {
    redirect('/sign-in')
  } else if (store.state.auth.auth && (route.fullPath.indexOf('/sign-in') > -1 || route.fullPath.indexOf('/sign-up') > -1)) {
    redirect('/')
  }
}
