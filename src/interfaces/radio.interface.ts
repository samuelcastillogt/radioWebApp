export interface IradioData{
    id: number
    data: Iradio
}

export interface Iradio{
    nombre: string
    url: string
    imagen: string
    categoria: string
    rastrador: string
}

export interface IradioResponse{
    radios: IradioData[]
}