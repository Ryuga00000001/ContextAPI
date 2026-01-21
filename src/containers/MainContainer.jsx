import React, { useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import Navbar from '../components/Navbar';

const MainContainer = () => {
    // --- PHẦN LOGIC (STATEFUL) ---
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({ name: 'Khách', role: 'Viewer' });

    // Hàm xử lý logic 1
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Hàm xử lý logic 2
    const toggleUser = () => {
        setUser(prev =>
            prev.name === 'Khách'
                ? { name: 'Admin VIP', role: 'SuperUser' }
                : { name: 'Khách', role: 'Viewer' }
        );
    };

    // --- PHẦN GIAO DIỆN (CONTAINER UI) ---
    return (
        // PROVIDER: Cung cấp dữ liệu xuống dưới
        <AppContext.Provider value={{ user, theme, toggleTheme }}>

            <div style={{
                border: '4px solid #ff4d4d', // Viền ĐỎ (Container)
                padding: '20px',
                borderRadius: '10px',
                maxWidth: '800px',
                margin: '20px auto',
                fontFamily: 'sans-serif'
            }}>
                <h2 style={{ color: '#ff4d4d', marginTop: 0 }}>1. Main Container (Stateful)</h2>
                <p>Đây là cấp cao nhất. Tôi giữ State và Logic.</p>

                {/* Bảng điều khiển */}
                <div style={{ background: '#ffe6e6', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                    <strong>🔧 Bảng điều khiển (Thay đổi State tại đây):</strong><br /><br />
                    <button onClick={toggleUser} style={{ padding: '8px 15px', marginRight: '10px', cursor: 'pointer' }}>
                        🔄 Đổi User (Login/Logout)
                    </button>
                    <button onClick={toggleTheme} style={{ padding: '8px 15px', cursor: 'pointer' }}>
                        🎨 Đổi Theme (Sáng/Tối)
                    </button>
                </div>

                {/* Gọi component con */}
                <Navbar />
            </div>

        </AppContext.Provider>
    );
};

export default MainContainer;