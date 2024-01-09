export const themeSettings = () => {
  return {
    typography: {
      fontFamily: ["DM Sans", "sans-serif"].join(","),
      h1: {
        fontSize: "2.225rem",
        lineHeight: "1",
        letterSpacing: "-0.0625rem",
      },
      h2: {
        fontSize: "1.875rem",
        lineHeight: "1.067",
        letterSpacing: "-0.05rem",
      },
      h3: {
        fontSize: "1.5rem",
        lineHeight: "1.083",
        letterSpacing: "-0.0375rem",
      },
      h4: {
        fontSize: "1.25rem",
        lineHeight: "1.1",
        letterSpacing: "-0.025rem",
      },
      h5: {
        fontSize: "1.125rem",
        lineHeight: "1.111",
        letterSpacing: "-0.0125rem",
      },
      h6: {
        fontSize: "1rem",
        letterSpacing: "-0.00625rem",
      },
      h7: {
        fontSize: "0.8rem",
        letterSpacing: "-0.00525rem",
      },
      "@media (max-width:600px)": {
        h1: {
          fontSize: "1.5rem",
          fontWeight: "2.125rem",
        },
        h2: {
          fontSize: "1rem",
          fontWeight: "1.875rem  ",
        },
        h3: {
          fontSize: ".8rem",
          fontWeight: "1.5rem  ",
        },
        h4: {
          fontSize: ".8rem",
          fontWeight: "1.25rem  ",
        },
        h5: {
          fontSize: "1rem",
          fontWeight: "1.125rem  ",
        },
        h6: {
          fontSize: "1.125rem",
          fontWeight: "1rem",
        },
        h7: {
          fontSize: "1.025rem",
          fontWeight: "0.8rem",
        },
      },
      "@media (max-width:400px)": {
        h1: {
          fontSize: "1rem",
        },
        h2: {
          fontSize: ".8rem",
        },
        h3: {
          fontSize: ".6rem",
        },
        h4: {
          fontSize: ".8rem",
        },
        h5: {
          fontSize: ".8rem",
        },
        h6: {
          fontSize: ".6rem",
        },
        h7: {
          fontSize: ".5rem",
        },
      },
    },
  };
};
