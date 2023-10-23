export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    const year = date.getFullYear();
    const hours = date.getHours();
    return `${day} ${month} ${year}, ${hours}:00`;
}

