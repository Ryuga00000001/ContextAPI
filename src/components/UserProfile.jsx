import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const UserProfile = () => {
    // CONSUMER: Hút dữ liệu từ Context
    const { user, theme } = useContext(AppContext);

    // Style động (thay đổi theo dữ liệu nhận được)
    const dynamicStyle = {
        border: '4px solid #28a745', // Viền XANH (Component đích)
        padding: '20px',
        marginTop: '15px',
        borderRadius: '8px',
        transition: '0.3s',
        backgroundColor: theme === 'dark' ? '#333' : '#e6fffa',
        color: theme === 'dark' ? '#fff' : '#000',
    };

    return (
        <div style={dynamicStyle}>
            <h3 style={{ marginTop: 0, color: theme === 'dark' ? '#4db8ff' : '#007bff' }}>
                3. User Profile (Stateless)
            </h3>
            <p>Tôi nằm sâu bên trong nhưng nhận được dữ liệu trực tiếp.</p>
            <hr style={{ opacity: 0.5 }} />

            <h4>Dữ liệu từ Context:</h4>
            <ul>
                <li>Tên: <strong>{user.name}</strong></li>
                <li>Quyền: <strong>{user.role}</strong></li>
                <li>Giao diện: <strong>{theme.toUpperCase()}</strong></li>
            </ul>

            {user.role === 'SuperUser' && (
                <div style={{ background: 'gold', color: 'black', padding: '5px', fontWeight: 'bold', textAlign: 'center' }}>
                    🌟 VIP ACCESS GRANTED
                </div>
            )}
        </div>
    );
};

export default UserProfile;