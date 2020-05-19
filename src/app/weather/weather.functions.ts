const convertKelvinsToCelsius = ( tempKelvins: number ): number => Math.ceil( tempKelvins - 273.15 );   // zaokrąglenie w górę do pełnych "Celsjuszy" 

export { convertKelvinsToCelsius };