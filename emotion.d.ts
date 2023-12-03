import "@emotion/react";
import { light } from "@/app/styles/theme";

declare module "@emotion/react" {
  type CustomTheme = typeof light;
  export interface Theme extends CustomTheme {}
}
