export function getProductStatusColor(statusName: string) {
    const statusColors: { [key: string]: string } = {
        "Planned": 'bg-primary-4',
        "In-Progress": 'bg-primary-1',
        "Live": 'bg-primary-3',
    }

    return statusColors[statusName] || "";
}