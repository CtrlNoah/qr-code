import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className={style.container}>
            <Link to='/qr-code' className={style.link}>Главная</Link>
            <Link to='/generate' className={style.link}>Генерировать QR код</Link>
            <Link to='/scan' className={style.link}>Сканировать QR код</Link>
            <Link to='/historyscan' className={style.link}>История сканирования</Link>
            <Link to='/historygenerate' className={style.link}>История генерирования</Link>
        </nav>
    );
};
