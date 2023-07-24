
export const formatearCantidad = cantidad => {

    return Number(cantidad).toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
}