const cores = [
    "red",
    "black",
    "blue",
    "cyan",
    "green",
    "orange",
    "lime",
    "lightblue",
    "#0fb3d3",
    "#ffbbdd",
];

export const retornaCor = () => cores[Math.floor(Math.random() * (cores.length - 0)) + 0];