// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import pkg from "@vuepress/plugin-register-components";
var config_default = defineUserConfig({
  lang: "en-US",
  title: "RISC Lab",
  description: "RISC Lab - Dartmouth College",
  theme: defaultTheme({
    logo: "/images/logo.gif",
    navbar: [
      { text: "Home", link: "/" },
      { text: "People", link: "/people" },
      { text: "Publications", link: "/publication" },
      { text: "Awards", link: "/award" }
    ],
    sidebar: false,
    // disable sidebar
    contributors: false
    // disable contributors
  }),
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3F1aW50b24vRG9jdW1lbnRzL0dpdEh1Yi9yaXNjLWxhYi13ZWJzaXRlL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcXVpbnRvbi9Eb2N1bWVudHMvR2l0SHViL3Jpc2MtbGFiLXdlYnNpdGUvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9xdWludG9uL0RvY3VtZW50cy9HaXRIdWIvcmlzYy1sYWItd2Vic2l0ZS9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcy9jbGknXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXG5cbmltcG9ydCBwa2cgZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1yZWdpc3Rlci1jb21wb25lbnRzJztcbi8vIGNvbnN0IHsgcmVnaXN0ZXJDb21wb25lbnRzUGx1Z2luIH0gPSBwa2c7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBsYW5nOiAnZW4tVVMnLFxuXG4gIHRpdGxlOiAnUklTQyBMYWInLFxuICBcbiAgZGVzY3JpcHRpb246ICdSSVNDIExhYiAtIERhcnRtb3V0aCBDb2xsZWdlJyxcblxuICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcbiAgICBsb2dvOiAnL2ltYWdlcy9sb2dvLmdpZicsXG4gICAgbmF2YmFyOltcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ1Blb3BsZScsIGxpbms6ICcvcGVvcGxlJyB9LFxuICAgICAgeyB0ZXh0OiAnUHVibGljYXRpb25zJywgbGluazogJy9wdWJsaWNhdGlvbicgfSxcbiAgICAgIHsgdGV4dDogJ0F3YXJkcycsIGxpbms6ICcvYXdhcmQnIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiBmYWxzZSwgLy8gZGlzYWJsZSBzaWRlYmFyXG4gICAgY29udHJpYnV0b3JzOiBmYWxzZSwgLy8gZGlzYWJsZSBjb250cmlidXRvcnNcbiAgfSksXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcblxufSlcblxuLy8gZXhwb3J0IGNvbnN0IHBsdWdpbnMgPSBbXG4vLyAgIHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbih7XG4vLyAgICAgICBjb21wb25lbnRzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vJywgJ2NvbXBvbmVudHMnKSwgLy8gXHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDXHU1MTY4XHU1QzQwXHU3RUM0XHU0RUY2LFxuLy8gICB9KSxcbi8vIF07XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVcsU0FBUyxvQkFBb0I7QUFDbFksU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxtQkFBbUI7QUFFNUIsT0FBTyxTQUFTO0FBR2hCLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLEVBRVAsYUFBYTtBQUFBLEVBRWIsT0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sUUFBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLFVBQVUsTUFBTSxVQUFVO0FBQUEsTUFDbEMsRUFBRSxNQUFNLGdCQUFnQixNQUFNLGVBQWU7QUFBQSxNQUM3QyxFQUFFLE1BQU0sVUFBVSxNQUFNLFNBQVM7QUFBQSxJQUNuQztBQUFBLElBQ0EsU0FBUztBQUFBO0FBQUEsSUFDVCxjQUFjO0FBQUE7QUFBQSxFQUNoQixDQUFDO0FBQUEsRUFFRCxTQUFTLFlBQVk7QUFFdkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
