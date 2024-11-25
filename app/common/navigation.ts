 export const handleLanguageChange = (lang: string, router: any) => {
    localStorage.setItem('lang', lang.toLowerCase());

    switch (lang) {
        case "deutsch":
            localStorage.setItem("lang","de");
            router.push("/de/");
            break;
        case "english":
            localStorage.setItem("lang","en");
            router.push("/en/");
            break;
        default:
            localStorage.setItem("lang","de");
            router.push("/de/");
            break;
    }
};




// Toggle theme
export const toggleTheme = (isDarkMode: boolean) => {
    
    if (!isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};
