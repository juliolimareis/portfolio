interface UseTheme {
  switchTheme: () => ThemeType
}

export type ThemeType = "dark" | "light"

export default function useTheme(): UseTheme {
  function switchTheme(){
    if(localStorage.theme === "dark"){
      localStorage.theme = "light";
    }else{
      localStorage.theme = "dark";
    }

    if (localStorage?.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return localStorage?.theme ?? "light";
  }

  return { switchTheme };
}