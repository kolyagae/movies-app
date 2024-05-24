"use client";

import {
  Button,
  Loader,
  MultiSelect,
  NumberInput,
  Pagination,
  Paper,
  Select,
  createTheme,
} from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "#9854F6",
        variant: "filled",
        radius: "md",
      },
      styles: {
        root: {
          "--button-hover": "#BD93F7",
        },
      },
    }),
    Select: Select.extend({
      defaultProps: {
        rightSectionWidth: 46,
        labelProps: { pb: 8, fw: 700 },
        size: "md",
        radius: "md",
        withCheckIcon: false,
      },
      styles: {
        input: {
          "--input-bd-focus": "#9854F6",
        },
        option: {
          borderRadius: 8,
          padding: 8,
        },
      },
    }),
    MultiSelect: MultiSelect.extend({
      defaultProps: {
        rightSectionWidth: 46,
        labelProps: { pb: 8, fw: 700 },
        size: "md",
        radius: "md",
        withCheckIcon: false,
      },
      styles: {
        input: {
          "--input-bd-focus": "#9854F6",
        },
        pill: {
          backgroundColor: "transparent",
          padding: 0,
        },
        pillsList: {
          gap: 2,
          flexWrap: "nowrap",
          overflow: "hidden",
        },
        option: {
          borderRadius: 8,
          padding: 8,
        },
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        size: "md",
        radius: "md",
        labelProps: { pb: 8, fw: 700 },
        w: 137.8,
        min: 0,
        max: 10,
      },
      styles: {
        control: {
          height: 32,
          border: 0,
          "--ni-chevron-size": 12,
          color: "#ACADB9",
        },
        input: {
          "--input-bd-focus": "#9854F6",
        },
      },
    }),
    Paper: Paper.extend({
      styles: {
        root: {
          "--paper-radius": "12px",
        },
      },
    }),
    Pagination: Pagination.extend({
      defaultProps: {
        radius: "sm",
        boundaries: -1,
        siblings: 1,
      },
      styles: {
        root: {
          "--pagination-active-bg": "#9854F6",
        },
        dots: {
          display: "none",
        },
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        size: "lg",
        type: "dots",
        color: "#9854F6",
      },
    }),
  },
  breakpoints: {
    xs: "320px",
    sm: "400px",
    md: "840px",
    lg: "1140px",
    xl: "1440px",
  },
  colors: {
    purple: [
      "#F2EBF9",
      "#E5D5FA",
      "#D1B4F8",
      "#BD93F7",
      "#9854F6",
      "#541F9D",
      "",
      "",
      "",
      "",
      "",
    ],
    grey: [
      "#FFFFFF",
      "#F5F5F6",
      "#EAEBED",
      "#D5D6DC",
      "#ACADB9",
      "#7B7C88",
      "#000000",
      "",
      "",
      "",
      "",
    ],
    yellow: ["#FAB005", "", "", "", "", "", "", "", "", "", ""],
  },
});
