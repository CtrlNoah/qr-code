import { useEffect } from 'react';
import style from './Home.module.css';

export const Home = () => {
    useEffect(() => {
        let timeID = setTimeout(() => {
            alert('В других страницах Вы можете пользоваться кнопкой Enter');
        }, 5000);

        return () => {
            clearTimeout(timeID);
        }
    }, [])
    return (
        <div className={style.container}>
            <h1 className={style.title}>Добро пожаловать в приложение для генерации и сканирования QR-кодов😊</h1>
            <p className={style.description}>
                Это мини-приложение для генерации, сканирования QR-кодов и просмотра истории ваших действий.
                Наслаждайтесь простотой и удобством работы с QR-кодами.
            </p>
        </div>
    );
};
