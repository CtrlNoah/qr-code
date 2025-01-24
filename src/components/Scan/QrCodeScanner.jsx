import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import scanStyle from './QrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [qrValue, setQrValue] = useState(null);

    const handleScanner = (result) => {
        setQrValue(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
    };

    const settings = {
        audio: false,
        finder: true,
    };

    return (
        <div className={scanStyle.container}>
            <h2 className={scanStyle.title}>Сканировать QR код</h2>
            <div className={scanStyle.scanner}>
                <Scanner
                    onScan={handleScanner}
                    components={settings}
                    styles={{
                        container: { width: '100%', maxWidth: '400px' },
                    }}
                />
            </div>
            {qrValue && (
                <div className={scanStyle.result}>
                    <h3>Результат сканирования:</h3>
                    <p>{qrValue}</p>
                </div>
            )}
        </div>
    );
};
