import { createStore } from 'solid-js/store'

// theme backgroundColor
const [bgColor, setBgColor] = createStore({ backgroundColor: '' })

export { bgColor, setBgColor }
