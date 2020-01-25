import { useState } from 'react'
import dynamic from 'next/dynamic'

import guessList from './guest_list.json'
import { t } from '@src/i18n'

const QrReader = dynamic(import('react-qr-reader'), { ssr: false })

export default () => {
    const scannerZoomScale = 3
    const [qrResult, setQrResult] = useState()
    const handleScan = data => {
        if (data) {
            setQrResult(data)
            // TODO: 
            // - check guessList
            // - if exists mark "çheckin time"
        }
    }
    const handleError = err => {
        console.error("[ERROR] could not scan qr:", err)
    }
    return (
        <div
            style={{
                height: '97vh',
                background: '#a73737',
                background: '-webkit-linear-gradient(to right, #7a2828, #a73737)',
                background: 'linear-gradient(to right, #7a2828, #a73737)',
            }}>
            <style jsx global>
                {`
                video {
                    -moz-transform: scale(${scannerZoomScale});
                    -webkit-transform: scale(${scannerZoomScale});
                    -o-transform: scale(${scannerZoomScale});
                    -ms-transform: scale(${scannerZoomScale});
                    transform: scale(${scannerZoomScale});
                }
            `}
            </style>
            <div style={{
                height: '50%',
            }}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{
                height: '50%',
            }}>
                <div style={{
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}>
                    <h3 style={{
                        textAlign: 'center',
                        color: 'white'
                    }}>{t('guestCheckin.pleaseScanInvitation')}</h3>
                </div>
            </div>
        </div>
    )
}