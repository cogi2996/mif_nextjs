import React from 'react'

export default function BadgeIcon({ icon: Icon, badgeContent, badgeStyle, iconStyle }) {
    return (
        <div style={styles.container}>
            <Icon style={{ ...styles.icon, ...iconStyle }} />
            {badgeContent && (
                <span style={{ ...styles.badge, ...badgeStyle }}>
                    {/* Hiển thị dấu chấm nếu badgeContent không phải là số */}
                    {typeof badgeContent === 'number' && badgeContent > 0
                        ? badgeContent
                        : ''}
                </span>
            )}
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        display: 'inline-block',
    },
    icon: {
        fontSize: '24px',
    },
    badge: {
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        fontSize: '10px',
        fontWeight: 'bold',
        width: '16px',
        height: '16px',
        lineHeight: '16px',
        textAlign: 'center',
    },
};