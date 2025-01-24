import { useState } from "react";
import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from 'qrcode.react';
import styles from './HistoryGenerate.module.css';

export const HistoryGenerate = () => {
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'));
    // const generateLocalData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    const handleClickClearLocal = () => {
        setLocalData('');
        localStorage.clear();
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>История генерирования</h2>
            {localData.length > 0 ? (
                <>
                    <ul className={styles.historyList}>
                        {localData.map((data, index) => (
                            <li key={index} className={styles.historyItem}>
                                {data}
                                <QRCodeSVG value={data} size={200} />
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={handleClickClearLocal}
                        className={styles.button}
                    >
                        Очистить историю
                    </button>
                </>
            ) : (
                <p className={styles.noData}>Вы ничего не генерировали</p>
            )}
        </div>
    );
};
