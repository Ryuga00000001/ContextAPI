import React from 'react';
import UserProfile from './UserProfile';

const Navbar = () => {
    return (
        <div style={{
            border: '4px dashed #999', // Viền XÁM Nét đứt (Trung gian)
            padding: '20px',
            backgroundColor: '#f4f4f4'
        }}>
            <h3 style={{ color: '#666', marginTop: 0 }}>2. Navbar (Trung gian)</h3>
            <p>
                ✋ <strong>Tôi chặn Prop Drilling!</strong><br />
                Tôi chứa UserProfile nhưng tôi không cần cầm hộ dữ liệu cho nó.
                Code của tôi sạch trơn, không có `props.user`.
            </p>

            {/* Gọi UserProfile mà không cần truyền props */}
            <UserProfile />
        </div>
    );
};

export default Navbar;