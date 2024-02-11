import { Notify } from "quasar";

export const showSnackBar = (status, message) => {
  Notify.create({
    message: `<span style="color: ${
      status === true ? "green; " : "red; "
    }font-weight: 500">${message}</span>`,
    color: "white",
    textColor: "white",
    icon: status === true ? "done" : "error",
    iconColor: status === true ? "green" : "red",
    type: status === true ? "positive" : "negative",
    html: true,
    position: "bottom",
  });
};

export const formatDate = (dateString) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  let formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  formattedDate = formattedDate.replace(/,/g, "");
  const [month, day, year] = formattedDate.split(" ");
  return `${day} ${month} ${year}`;
};
