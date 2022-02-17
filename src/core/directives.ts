import { DirectiveBinding } from 'vue'

interface IHTMLElementClicketyClick extends HTMLElement {
  clickOutsideEvent?(event: any): any;
}

export const clickOutside = {
  beforeMount: (el: IHTMLElementClicketyClick, binding: DirectiveBinding) => {
    el.clickOutsideEvent = (event: MouseEvent) => {
      // here I check that click was outside the el and his children
      if (!(el === event.target || el.contains(<Node>event.target))) {
        // and if it did, call method provided in attribute value
        console.log(event.target)
        binding.value(event.target)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: (el: any) => {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
