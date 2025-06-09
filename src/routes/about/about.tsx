import packageInfo from '../../../package.json'
import './about.css'

const { name, version } = packageInfo

export const AboutPage = () => {
    return (
        <div>
            <div className="app-title">
                About Page
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