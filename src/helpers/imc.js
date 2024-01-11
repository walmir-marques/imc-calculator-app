export const levels = [
  { title: "Magreza Grave", color: "#FFD700", icon: "down", imc: [0, 16] },
  { title: "Magreza Moderada", color: "#DFFF00", icon: "down", imc: [16, 17] },
  { title: "Magreza Leve", color: "#BFFF00", icon: "down", imc: [17, 18.5] },
  { title: "Saudável", color: "#8FFF00", icon: "up", imc: [18.5, 25] },
  { title: "Sobrepeso", color: "#FFA500", icon: "down", imc: [25, 30] },
  { title: "Obesidade Grau 1", color: "#FF5733", icon: "down", imc: [30, 35] },
  {
    title: "Obesidade Grau 2",
    color: "#FF3419",
    icon: "down",
    imc: [35, 40],
  },
  {
    title: "Obesidade Grau 3",
    color: "#FF0000",
    icon: "down",
    imc: [40, 100],
  },
];

export const calculateImc = (height, weight) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let newLevelCopy = { ...levels[i] };
      newLevelCopy.yourImc = parseFloat(imc.toFixed(2));
      return newLevelCopy;
    }
  }

  return null;
};
