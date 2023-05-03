import { For, Index, Show, createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import { Button, IconButton } from '@suid/material'
import PhotoFilterIcon from '@suid/icons-material/PhoneTwoTone'
// import type { Accessor, Setter } from 'solid-js'

// interface Props {
//   backgroundColor: Accessor<boolean>
//   setBackgroundColor: Setter<boolean>
// }

const backgroundColors = [
  {
    Color:
    'linear-gradient(0deg, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)',
  },
  {
    Color: 'linear-gradient(90deg,#ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
  },
  {
    Color: 'linear-gradient(0deg,#b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
  },
  {
    Color: 'linear-gradient(0deg,#eea2a2 0%, #bbc1bf 19%, #57c6e1 42%)',
  },
  {
    Color:
    'linear-gradient(0deg,#fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
  },
  {
    Color:
      'linear-gradient(0deg,#4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 80%, #432c39 100%)',
  },
  {
    Color: 'linear-gradient(0deg,#f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
  },
]

function setTheme(color: String) {
  const themeDOM = document.querySelector('.themeBackground')
}

export default () => {
  const [show, setShow] = createSignal(false)
  const openSetTheme = () => {
    setShow(!show())
  }

  const setThemeColor = (color: String) => () => {
    setTheme(color)
  }

  return (
    <div class="container">
      <IconButton onClick={openSetTheme} color="secondary" aria-label="add an alarm">
        <PhotoFilterIcon sx={{ fontSize: 50 }} />
      </IconButton>
      <Show when={show()}>
        <div class="setThemeColor">
          <For each={backgroundColors}>
            {item => (
              <IconButton
                style={{ 'width': '25px', 'height': '25px', 'background-image': item.Color }}
                onClick={setThemeColor(item.Color)}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
