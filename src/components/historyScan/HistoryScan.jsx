import { SCAN_DATA } from "../../constants";
import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react';
import styles from "./HistoryScan.module.css";

export const HistoryScan = () => {
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem(SCAN_DATA) || '[]'));
    const [isClearing, setIsClearing] = useState(false); 
    const [isLoading, setIsLoading] = useState(false); 

    const handleClickClearLocal = () => {
        setIsClearing(true); 
        setIsLoading(true); 

        setTimeout(() => {
            setLocalData([]); 
            localStorage.removeItem(SCAN_DATA); 
            setIsClearing(false); 
            setIsLoading(false); 
        }, 1000); 
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>История сканирований</h2>

            {localData.length > 0 ? (
                <div className={styles.historyList}>
                    <ul className={styles.ulScan}>
                        {localData.map((scanData, index) => (
                            <li
                                key={index}
                                className={`${styles.historyItem} ${isClearing ? styles.fadeOut : ''}`}
                            >
                                {scanData}
                                <QRCodeSVG value={scanData} size={200} />
                            </li>
                        ))}
                    </ul>
                    {isLoading && <div className={styles.loader}></div>} 
                    <button
                        onClick={handleClickClearLocal}
                        className={`${styles.button} ${isClearing ? styles.buttonClearing : ''} ${isLoading ? styles.buttonLoading : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Очищаю...' : 'Очистить историю'}
                    </button>
                </div>
            ) : (
                <p className={styles.noData}>Нет данных о сканированиях.</p>
            )}
        </div>
    );
};
