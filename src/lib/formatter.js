export const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();

    const isSameDay = (date, now) => {
        const timeDifference = now - date
        const differenceInHours = timeDifference / (1000 * 60 * 60);
        return differenceInHours < 24;
    };
    if (isSameDay(date, now)) {
        return timeAgo(date)
    } else {
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
}

export const timeAgo = (timestamp) => {
    const now = new Date()
    const secondsPast = (now.getTime() - timestamp) / 1000

    if (secondsPast < 60) {
        return `${Math.floor(secondsPast)} giây trước`
    }
    if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)} phút trước`
    }
    if (secondsPast < 86400) {
        return `${Math.floor(secondsPast / 3600)} giờ trước`
    }
    if (secondsPast < 2592000) {
        return `${Math.floor(secondsPast / 86400)} ngày trước`
    }
    if (secondsPast < 31536000) {
        return `${Math.floor(secondsPast / 2592000)} tháng trước`
    }
    return `${Math.floor(secondsPast / 31536000)} năm trước`
}