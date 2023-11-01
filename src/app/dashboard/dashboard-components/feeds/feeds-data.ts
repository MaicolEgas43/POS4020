export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: 'Tu tienes 4 pedidos agregados',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hdd',
        task: 'Entrega confirmada',
        time: '2 minutes ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        task: 'Nuevo domicilio agregado',
        time: '3 minutes ago'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-person',
        task: 'Nuevo cliente registrado',
        time: '2 hours ago'
    },
] 