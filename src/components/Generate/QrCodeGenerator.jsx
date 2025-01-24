import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import generatestyle from './QrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constants';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [showQR, setShowQR] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            setShowQR(value);
            setValue('');
            const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
            localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value.trim()]));
        }
    };

    const handleClick = () => {
        if (value.trim() !== '') {
            setShowQR(value);
            setValue('');
            const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
            localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value.trim()]));
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        setShowQR('');
    };

    return (
        <div className={generatestyle.container}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Введите текст"
                className={generatestyle.input}
            />
            <button
                type="button"
                className={generatestyle.button}
                onClick={handleClick}
                hidden={value === ''}
            >
                Сгенерировать QR
            </button>
            {showQR !== '' && (
                <div className={generatestyle.qrWrapper}>
                    <QRCodeSVG value={showQR} size={200} />
                </div>
            )}
        </div>
    );
};
