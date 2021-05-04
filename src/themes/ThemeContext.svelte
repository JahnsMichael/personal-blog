<script>
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { presets } from "./presets.js";

  export let themes = [...presets];

  // Utility
  const setRootColors = (theme) => {
    for (let [prop, val] of Object.entries(theme.vars)) {
      let varString = `--theme-${prop}`;
      document.documentElement.style.setProperty(varString, val);
    }
    document.documentElement.style.setProperty("--theme-name", theme.name);
  };

  const getThemeByName = (name) => themes.find((el) => el.name === name);

  // Main
  let _current = themes[0].name;
  const Theme = writable(getThemeByName(_current));

  const updateTheme = (themeName) => {
    Theme.update((t) => ({ ...t, ...getThemeByName(themeName) }));
    setRootColors(getThemeByName(themeName));
  }

  setContext("theme", {
    theme: Theme,
    toggle: () => {
      let _currentIndex = themes.findIndex((el) => el.name === _current);
      _current =
        themes[_currentIndex === themes.length - 1 ? 0 : (_currentIndex += 1)]
          .name;
      updateTheme(_current);
    },
    setTheme: updateTheme
  });

  onMount(() => {
    if (typeof window.matchMedia === "function") {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
      _current = darkMode.matches ? "dark" : "light";
    }
    updateTheme(_current);
  });
</script>

<slot />
