import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useAtom } from "jotai"
import { Popover } from 'radix-ui'
import { useLocation } from "wouter"
import { Jlj2DevTheme } from '../../constants/enums/jlj2-dev-theme.ts'
import { themeState } from "../../state/theme.ts"

import logo from '/logo-no-text.png'
import './title-bar.css'

export const TitleBar = ({title}: {title: string}) => {
    const setLocation = useLocation()[1]
    const [theme, setTheme] = useAtom(themeState)
    
    return (
        <div className="app-title-bar">
            <img 
                src={logo} 
                className="logo" 
                alt="JLJ Squared Development logo"
                onClick={() => {
                    setLocation('/')
                }}
            />
            <div className="app-title">
                {title}
            </div>
            <Popover.Root>
                <Popover.Trigger asChild aria-label="Open menu">
                    <HamburgerMenuIcon className="menu-icon"/>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className="popover-content-panel">
                        <button
                            onClick={() => {
                                if (theme === Jlj2DevTheme.LIGHT) {
                                    setTheme(Jlj2DevTheme.DARK)
                                } else {
                                    setTheme(Jlj2DevTheme.LIGHT)
                                }
                            }}
                        > Toggle Theme </button>
                        <Popover.Close className="popover-close" aria-label="Close">
                            <Cross2Icon />
                        </Popover.Close>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    )
}