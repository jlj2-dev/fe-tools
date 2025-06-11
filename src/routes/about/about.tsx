import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useAtom } from 'jotai'
import { Popover } from 'radix-ui'

import { Jlj2DevTheme } from '../../constants/enums/jlj2-dev-theme.ts'
import packageInfo from '../../../package.json'
import { themeState } from '../../state/theme.ts'

import './about.css'

const { name, version } = packageInfo

export const AboutPage = () => {
    const [theme, setTheme] = useAtom(themeState)
    return (
        <div>
            <div className="app-title-bar">
            <div className="app-title">
                About Page
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
            <div className="app-body">
                <div className="input-row">
                    <label htmlFor="app-name">App Name:</label>
                    <input id="app-name" readOnly value={name} />
                </div>
                <div className="input-row">
                    <label htmlFor="app-version">App Version:</label>
                    <input id="app-version" readOnly value={version} />
                </div>
            </div>
        </div>
    )
}