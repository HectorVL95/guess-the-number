const RandomnNumber = (min: number, max:number) => {
  return Math.floor(Math.random() * (max + min)) + min
}

export default RandomnNumber;