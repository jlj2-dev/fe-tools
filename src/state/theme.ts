import { atom } from 'jotai'
import { Jlj2DevTheme } from '../constants/enums/jlj2-dev-theme.ts'

export const themeState = atom(Jlj2DevTheme.LIGHT)
