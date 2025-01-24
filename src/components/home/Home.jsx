import { useEffect } from 'react';
import style from './Home.module.css';

export const Home = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Добро пожаловать в приложение для генерации и сканирования QR-кодов😊</h1>
            <p className={style.description}>
                Это мини-приложение для генерации, сканирования QR-кодов и просмотра истории ваших действий.
                Наслаждайтесь простотой и удобством работы с QR-кодами.

                P.S. Проект еще не закончен и разработчик по мере возможности постарается довести почти что до совершенства,
                благодарю за понимание😁
            </p>
        </div>
    );
};
