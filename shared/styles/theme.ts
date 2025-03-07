import { darken, lighten, transparentize } from "polished";
import { DefaultTheme, Colors } from "styled-components";
import breakpoints from "./breakpoints";

const defaultColors: Colors = {
  transparent: "transparent",
  almostBlack: "#111319",
  lightBlack: "#2F3336",
  almostWhite: "#E6E6E6",
  veryDarkBlue: "#0A1608", // Adaptado para verde escuro
  slate: "#667F66", // Ajustado para tom de verde cinza
  slateLight: "#DAE9DA", // Ajustado para verde claro
  slateDark: "#394E39", // Ajustado para verde escuro
  smoke: "#F4FAF4", // Leve tom verde no smoke
  smokeLight: "#F9FCF9", // Leve tom verde no smoke claro
  smokeDark: "#E8EDE8", // Leve tom verde no smoke escuro
  white: "#FFFFFF",
  white05: "rgba(255, 255, 255, 0.05)",
  white10: "rgba(255, 255, 255, 0.1)",
  white50: "rgba(255, 255, 255, 0.5)",
  white75: "rgba(255, 255, 255, 0.75)",
  black: "#000",
  black05: "rgba(0, 0, 0, 0.05)",
  black10: "rgba(0, 0, 0, 0.1)",
  black50: "rgba(0, 0, 0, 0.50)",
  black75: "rgba(0, 0, 0, 0.75)",
  accent: "#b1fc59", // Cor principal verde
  yellow: "#EDBA07",
  warmGrey: "#EDF7ED", // Ajustado para um tom levemente verde
  danger: "#ed2651",
  warning: "#f08a24",
  success: "#2f3336",
  info: "#a0e8a8", // Alterado para verde claro
  brand: {
    red: "#FF5C80",
    pink: "#FF4DFA",
    purple: "#9E5CF7",
    blue: "#59fc8b", // Verde médio brilhante
    marine: "#2BFF8B", // Verde água
    dusk: "#29FF64", // Verde forte
    green: "#3ad984",
    yellow: "#F5BE31",
  },
};

const spacing = {
  sidebarWidth: 260,
  sidebarRightWidth: 300,
  sidebarCollapsedWidth: 16,
  sidebarMinWidth: 200,
  sidebarMaxWidth: 600,
};

const buildBaseTheme = (input: Partial<Colors>) => {
  const colors = {
    ...defaultColors,
    ...input,
  };

  return {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Inter, 'Segoe UI', Roboto, Oxygen, sans-serif",
    fontFamilyMono:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontFamilyEmoji:
      "Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Segoe UI, Twemoji Mozilla, Noto Color Emoji, Android Emoji",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    accentText: colors.white,
    selected: colors.accent,
    textHighlight: "#F9FFDA", // Ajustado para tom amarelo-verde
    textHighlightForeground: colors.almostBlack,
    commentMarkBackground: transparentize(0.5, "#2BFF8B"), // Verde água transparente
    code: colors.lightBlack,
    codeComment: "#6a737d",
    codePunctuation: "#5e6687",
    codeNumber: "#d73a49",
    codeProperty: "#c08b30",
    codeTag: "#3d8f42", // Ajustado para verde
    codeClassName: "#3d8f42", // Ajustado para verde
    codeString: "#036222", // Verde escuro
    codeSelector: "#66cc76", // Ajustado para verde
    codeAttr: "#c76b29",
    codeEntity: "#22c975", // Verde água
    codeKeyword: "#d73a49",
    codeFunction: "#6fc142", // Ajustado para verde
    codeStatement: "#22c975", // Verde água
    codePlaceholder: "#3d8f42", // Ajustado para verde
    codeInserted: "#202746",
    codeImportant: "#c94922",
    noticeInfoBackground: colors.brand.blue, // Já ajustado para verde
    noticeInfoText: colors.almostBlack,
    noticeTipBackground: "#F5BE31",
    noticeTipText: colors.almostBlack,
    noticeWarningBackground: "#d73a49",
    noticeWarningText: colors.almostBlack,
    noticeSuccessBackground: colors.brand.green,
    noticeSuccessText: colors.almostBlack,
    tableSelectedBackground: transparentize(0.9, colors.accent),
    breakpoints,
    ...colors,
    ...spacing,
  };
};

export const buildLightTheme = (input: Partial<Colors>): DefaultTheme => {
  const colors = buildBaseTheme(input);

  return {
    ...colors,
    isDark: false,
    background: colors.white,
    backgroundSecondary: colors.warmGrey,
    backgroundTertiary: "#d7eada", // Ajustado para verde claro
    backgroundQuaternary: darken(0.05, "#d7eada"), // Ajustado com base no anterior
    link: colors.accent,
    cursor: colors.almostBlack,
    text: colors.almostBlack,
    textSecondary: colors.slateDark,
    textTertiary: colors.slate,
    textDiffInserted: colors.almostBlack,
    textDiffInsertedBackground: "rgba(18, 138, 41, 0.16)", // Já é um verde
    textDiffDeleted: colors.slateDark,
    textDiffDeletedBackground: "#ffebe9",
    placeholder: "#a2c3a2", // Ajustado para tom verde
    sidebarBackground: colors.warmGrey,
    sidebarActiveBackground: "#d7eada", // Ajustado para verde claro
    sidebarControlHoverBackground: "rgb(138 193 138 / 20%)", // Verde suave
    sidebarDraftBorder: darken("0.25", colors.warmGrey),
    sidebarText: "rgb(78, 110, 78)", // Ajustado para verde
    backdrop: "rgba(0, 0, 0, 0.2)",
    shadow: "rgba(0, 0, 0, 0.2)",

    modalBackdrop: "rgba(0, 0, 0, 0.15)",
    modalBackground: colors.white,
    modalShadow:
      "0 4px 8px rgb(0 0 0 / 8%), 0 2px 4px rgb(0 0 0 / 0%), 0 30px 40px rgb(0 0 0 / 8%)",

    menuItemSelected: colors.warmGrey,
    menuBackground: colors.white,
    menuShadow:
      "0 0 0 1px rgb(0 0 0 / 2%), 0 4px 8px rgb(0 0 0 / 8%), 0 2px 4px rgb(0 0 0 / 0%), 0 30px 40px rgb(0 0 0 / 8%)",
    divider: colors.slateLight,
    titleBarDivider: colors.slateLight,
    inputBorder: colors.slateLight,
    inputBorderFocused: colors.slate,
    listItemHoverBackground: colors.warmGrey,
    mentionBackground: colors.warmGrey,
    mentionHoverBackground: "#d7eada", // Ajustado para verde claro
    tableSelected: colors.accent,
    buttonNeutralBackground: colors.white,
    buttonNeutralText: colors.almostBlack,
    buttonNeutralBorder: darken(0.15, colors.white),
    tooltipBackground: colors.almostBlack,
    tooltipText: colors.white,
    toastBackground: colors.white,
    toastText: colors.almostBlack,
    quote: colors.slateLight,
    codeBackground: colors.smoke,
    codeBorder: colors.smokeDark,
    embedBorder: colors.slateLight,
    horizontalRule: colors.smokeDark,
    progressBarBackground: colors.slateLight,
    scrollbarBackground: colors.smoke,
    scrollbarThumb: darken(0.15, colors.smokeDark),
  };
};

export const buildDarkTheme = (input: Partial<Colors>): DefaultTheme => {
  const colors = buildBaseTheme(input);

  return {
    ...colors,
    isDark: true,
    background: colors.almostBlack,
    backgroundSecondary: "#1f2e1f", // Verde escuro
    backgroundTertiary: "#2a3e2a", // Verde médio escuro
    backgroundQuaternary: lighten(0.1, "#2a3e2a"), // Baseado no anterior
    link: "#13FB7B", // Verde brilhante 
    text: colors.almostWhite,
    cursor: colors.almostWhite,
    textSecondary: lighten(0.1, colors.slate),
    textTertiary: colors.slate,
    textDiffInserted: colors.almostWhite,
    textDiffInsertedBackground: "rgba(63,185,80,0.3)", // Já é um verde
    textDiffDeleted: darken(0.1, colors.almostWhite),
    textDiffDeletedBackground: "rgba(248,81,73,0.15)",
    placeholder: "#596673",
    sidebarBackground: colors.veryDarkBlue, // Já ajustado para verde escuro
    sidebarActiveBackground: lighten(0.09, colors.veryDarkBlue),
    sidebarControlHoverBackground: colors.white10,
    sidebarDraftBorder: darken("0.35", colors.slate),
    sidebarText: colors.slate,
    backdrop: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.6)",

    modalBackdrop: colors.black50,
    modalBackground: "#181c25",
    modalShadow:
      "0 0 0 1px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.08)",

    menuItemSelected: lighten(0.09, "#182518"), // Verde escuro
    menuBackground: "#182518", // Verde escuro
    menuShadow:
      "0 0 0 1px rgb(34 52 34), 0 8px 16px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.08)",
    divider: lighten(0.1, colors.almostBlack),
    titleBarDivider: darken(0.4, colors.slate),
    inputBorder: colors.slateDark,
    inputBorderFocused: colors.slate,
    listItemHoverBackground: colors.white10,
    mentionBackground: lighten(0.09, colors.veryDarkBlue),
    mentionHoverBackground: lighten(0.15, colors.veryDarkBlue),
    tableSelected: colors.accent,
    buttonNeutralBackground: colors.almostBlack,
    buttonNeutralText: colors.white,
    buttonNeutralBorder: colors.slateDark,
    tooltipBackground: colors.white,
    tooltipText: colors.lightBlack,
    toastBackground: colors.veryDarkBlue, // Já ajustado para verde escuro
    toastText: colors.almostWhite,
    quote: colors.almostWhite,
    code: colors.almostWhite,
    codeBackground: "#1d2a1d", // Verde escuro
    codeBorder: colors.white10,
    codeTag: "#b5cea8",
    codeString: "#ce9178",
    codeKeyword: "#56D659", // Verde claro
    codeFunction: "#dcdcaa",
    codeClassName: "#4ec98b", // Verde água
    codeImportant: "#56D659", // Verde claro
    codeAttr: "#9cfe9c", // Verde claro
    embedBorder: colors.black50,
    horizontalRule: lighten(0.1, colors.almostBlack),
    noticeInfoText: colors.white,
    noticeTipText: colors.white,
    noticeWarningText: colors.white,
    noticeSuccessText: colors.white,
    progressBarBackground: colors.slate,
    scrollbarBackground: colors.black,
    scrollbarThumb: colors.lightBlack,
  };
};

export const buildPitchBlackTheme = (input: Partial<Colors>) => {
  const colors = buildDarkTheme(input);

  return {
    ...colors,
    background: colors.black,
    codeBackground: colors.almostBlack,
  };
};

export const light = buildLightTheme(defaultColors);

export default light as DefaultTheme;