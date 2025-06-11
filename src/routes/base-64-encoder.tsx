import { Label } from 'radix-ui'
import { useState } from 'react'
import { TitleBar } from "../components/title-bar/title-bar.tsx"

export const Base64EncoderPage = () => {
    const [value, setValue] = useState('')
    const [decodedValue, setDecodedValue] = useState('')
    const [error, setError] = useState('')
    const [decodeError, setDecodeError] = useState('')

    return (
        <div>
            <TitleBar title="Base 64 String Encode/Decode" />
            <div className="page-body">
                <div className="body-section">
                    <Label.Root className="label" htmlFor="encode-input">
                        Value to Encode:
                    </Label.Root>
                    <input id="encode-input" onChange={(event) => {
                        const incomingValue = event.target.value
                        try {
                            const base64EncodedResult = btoa(incomingValue)
                            if (base64EncodedResult) {
                                setValue(base64EncodedResult)
                            }
                            setError('')
                        } catch(e) {
                            setError(`error encoding value: ${e}`)
                        }
                    }}/>
                    <div className="result">
                        <Label.Root className="label" htmlFor="encode-output">
                            Encoded Value:
                        </Label.Root>
                        <input value={value} id="encode-output" readOnly/>
                        {!error ? null : (
                            <div className="error" >{error}</div>
                        )}
                    </div>
                </div>
                <div className="body-section">
                    <Label.Root className="label" htmlFor="decode-input">
                        Value to Decode:
                    </Label.Root>
                    <input id="decode-input" onChange={(event) => {
                        const incomingValue = event.target.value
                        try {
                            const decodeResult = atob(incomingValue)
                            if (decodeResult) {
                                setDecodedValue(decodeResult)
                            }
                            setDecodeError('')
                        } catch(e) {
                            setDecodeError(`error encoding value: ${e}`)
                        }
                    }}/>
                    <div className="result">
                        <Label.Root className="label" htmlFor="decode-output">
                            Decoded Value:
                        </Label.Root>
                        <input value={decodedValue} id="decode-output" readOnly/>
                        {!error ? null : (
                            <div className="error" >{decodeError}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}