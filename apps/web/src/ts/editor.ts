import * as monaco from 'monaco-editor'
import { DEFAULT_THEME, THEME_NAME } from './theme'

monaco.editor.defineTheme(THEME_NAME, DEFAULT_THEME as any)
monaco.editor.setTheme(THEME_NAME)

document.querySelectorAll('.editor').forEach(element =>
  monaco.editor.create(element as HTMLElement, {
    language: 'javascript',
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  })
)
