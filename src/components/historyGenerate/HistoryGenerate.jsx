import { useState } from "react";
import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from 'qrcode.react';
import styles from './HistoryGenerate.module.css';

export const HistoryGenerate = () => {
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'));
    const [isClearing, setIsClearing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClickClearLocal = () => {
        setIsClearing(true);
        setIsLoading(true);

        setTimeout(() => {
            setLocalData([]);
            localStorage.removeItem(GENERATE_DATA);
            setIsClearing(false);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>История генерирования</h2>
            {localData.length > 0 ? (
                <>
                    <ul className={styles.historyList}>
                        {localData.map((data, index) => (
                            <li
                                key={index}
                                className={`${styles.historyItem} ${isClearing ? styles.fadeOut : ''}`}
                            >
                                {data}
                                <QRCodeSVG value={data} size={200} />
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
                </>
            ) : (
                <p className={styles.noData}>Вы ничего не генерировали</p>
            )}
        </div>
    );
};
