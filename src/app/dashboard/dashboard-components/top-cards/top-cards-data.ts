export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        title: '$2100,230',
        subtitle: 'Total ventas'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: '$1k',
        subtitle: 'Devoluciones'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '730',
        subtitle: 'Weekly Sales'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag-check',
        title: '210',
        subtitle: 'Ventas  diarias'
    }

] 