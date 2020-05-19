export interface WeatherData {
    cod: number,    // always present

    base?: string,  // SUCCESS-type object gathered form API
    clouds?: {
        all: number
    },
    coord?: {
        lon: number,
        lat: number
    },
    lat?: number,
    lon?: number,
    dt?: number,
    id?: number,
    main?: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    name?: string,
    sys?: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone?: number,
    visibility?: number,
    weather?: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    wind?: {
        speed: number,
        deg: number
    },   // SUCCESS-type-END

    message?: string;   // for any type of ERROR notification from API
}

