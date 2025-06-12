import { Jlj2DevTheme } from '../constants/enums/jlj2-dev-theme.ts'

export const adjustTheme = (theme: Jlj2DevTheme) => {
  if (theme === Jlj2DevTheme.LIGHT) {
    console.log('switching to light theme')
    /* 
            --primary-color: #2f4f2f;
            --title-text: #f5f6f0;
            --primary-hover: #4a7043;
            --link-text: #6b7280;
            --link-hover-text: #8b95a5;
            --background: #f5f6f0;
            --border: #a8a8a8;
            --hilights: #d4a017;
            --primary-text: #333333;
            --input-background: #ecece8;
            --input-box-shadow: #a8a8a833;
        */
    const documentStyleNode = document.documentElement.style
    documentStyleNode.setProperty('--background-color', '#f5f6f0')
    documentStyleNode.setProperty('--border-color', '#a8a8a8')
    documentStyleNode.setProperty('--highlights', '#d4a017')
    documentStyleNode.setProperty('--primary-text', '#333333')
    documentStyleNode.setProperty('--input-background', '#ecece8')
    documentStyleNode.setProperty('--input-box-shadow', '#a8a8a833')
  } else if (theme === Jlj2DevTheme.DARK) {
    console.log('switching to dark theme')
    /*
            --primary-color: #2f4f2f;
            --title-text: #f5f6f0;
            --primary-hover: #4a7043;
            --link-text: #6b7280;
            --link-hover-text: #8b95a5;
            --background: #1a1a1a;
            --border: #5a5a5a;
            --hilights: #b89714;
            --primary-text: #d9d9d9;
            --input-background: #2d2d2d;
            --input-box-shadow: #5a5a5a33;
        */
    const documentStyleNode = document.documentElement.style
    documentStyleNode.setProperty('--primary-color', '#2f4f2f')
    documentStyleNode.setProperty('--background-color', '#1a1a1a')
    documentStyleNode.setProperty('--border-color', '#5a5a5a')
    documentStyleNode.setProperty('--highlights', '#b89714')
    documentStyleNode.setProperty('--primary-text', '#d9d9d9')
    documentStyleNode.setProperty('--input-background', '#2d2d2d')
    documentStyleNode.setProperty('--input-box-shadow', '#5a5a5a33')
  }
}
