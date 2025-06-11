import { Label } from 'radix-ui'

import packageInfo from '../../../package.json'

import './about.css'
import { TitleBar } from '../../components/title-bar/title-bar.tsx'

const { name, version } = packageInfo

export const AboutPage = () => {
    return (
        <div>
            <TitleBar title="About Page" />
            <div className="app-body">
                <div className="input-row">
                    <Label.Root className="label-root" htmlFor="app-name">
                        App Name:
                    </Label.Root>
                    <input id="app-name" readOnly value={name} />
                </div>
                <div className="input-row">
                    <Label.Root className="label-root" htmlFor="app-version">
                        App Version:
                    </Label.Root>
                    <input id="app-version" readOnly value={version} />
                </div>
            </div>
        </div>
    )
}