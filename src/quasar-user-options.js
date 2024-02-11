import "quasar/dist/quasar.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import { Notify } from "quasar";
// To be used on app.use(Quasar, { ... })
export default {
  config: {
    brand: {
      "app-bg": "#F9F9FC",
      "app-logo-text": "#323346",
      "text-heading": "#484964",
      "text-color": "#40415A",
      "app-secondary": "#F2F2F7",
      "text-active": "#A8D7C6",
      hover: "#EBEBF6",
      "btn-bg": "#F1F1F6",
      "btn-text": "#000",
      "btn-modal": "#A8D7C6",
      "btn-modal-text": "#fff",
      "text-disable": "#9C9DAF",
      "icon-color": "#A8D7C6",
      "faded-text": " #ABACBE",
      "table-border": "#e8ebf4",
      "white": "#FFF",
      "header-background":"#A8D7C6",
      "selected-tab":"#292A2D",
      "new-button-text":"#A8D7C6",
      "new-icons-color":"#A8D7C6",
      "black":"#484964",
      "black-dark":"#000",
      "table-numbers":"#5B666F",
      "table-subtitles":"#5B666F",
      "heading-card":"#292A2D",
      "dashboard-card-border":"#EFEFEF",
      "gray":"#5B666F",
      "chart-heading":"#292A2D",

      
      
    },
  },
  plugins: { Notify },
};
