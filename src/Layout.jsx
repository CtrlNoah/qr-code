import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { Routes, Route } from "react-router-dom";
import { HistoryGenerate } from "./components/historyGenerate/HistoryGenerate";
import { HistoryScan } from "./components/historyScan/HistoryScan";
import { Home } from "./components/home/Home";
export const Layout = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/historygenerate" element={<HistoryGenerate />} />
                <Route path="/historyscan" element={<HistoryScan />} />
            </Routes>
        </>
    );
};