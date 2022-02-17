export const preventBodyScroll = (value: boolean) => {
  const bodyClasses = document.getElementsByTagName('html')[0].classList
  if (value) {
    bodyClasses.add('prevent-body-scroll')
  } else {
    bodyClasses.remove('prevent-body-scroll')
  }
}
