import { sunO, moonO } from 'svelte-awesome/icons';

export const presets = [
    {
      name: "light",
      symbol: sunO,
      colors: {
        text: "#676778",
        background: "#f1f1f1",
        primary: "#ff3e00"
      }
    },
    {
      name: "dark",
      symbol: moonO,
      colors: {
        text: "#f1f1f1",
        background: "#1f2430",
        primary: "#1abc9c"
      }
    }
  ];