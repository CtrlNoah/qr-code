import { SCAN_DATA } from "../../constants";
import { useEffect, useState } from "react";
import { QRCodeSVG } from 'qrcode.react';
import styles from "./HistoryScan.module.css";

export const HistoryScan = () => {
    const [scanHistory, setScanHistory] = useState([]);

    useEffect(() => {
        const localScanData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        setScanHistory(localScanData);
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>История сканирований</h2>

            {scanHistory.length > 0 ? (
                <div className={styles.historyList}>
                    <ul className={styles.ulScan}>
                        {scanHistory.map((scanData, index) => (
                            <li key={index} className={styles.historyItem}>
                                {scanData}
                                <QRCodeSVG value={scanData} size={200} />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className={styles.noData}>Нет данных о сканированиях.</p>
            )}
        </div>
    );
};
