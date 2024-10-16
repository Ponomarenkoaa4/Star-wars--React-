/* 
Формат СSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя # для "light"
--theme-dark-УникальноеИмя # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/

export const changeCssWariable = (theme) => {
  const root = document.querySelector(":root");

  const cssVariable = ["header", "bgimage"];

  cssVariable.forEach((elem) => {
    root.style.setProperty(
      `--theme-default-${elem}`,
      `var(--theme-${theme}-${elem})`
    );
  });
};

/*     root.style.setProperty(
      "--theme-default-header",
      `var(--theme-${theme}-header)`
    );
    root.style.setProperty(
      "--theme-default-bgimage",
      `var(--theme-${theme}-bgimage)`
    ); */
