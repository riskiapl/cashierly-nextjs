import Swal from "sweetalert2";

// Success Toast
export const success = (message: string) => {
  return Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      const progressBar = toast.querySelector(
        ".swal2-timer-progress-bar"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.backgroundColor = "#a5dc86"; // success green color
      }
    },
  });
};

// Error Toast
export const error = (message: string) => {
  return Swal.fire({
    toast: true,
    position: "top-end",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      const progressBar = toast.querySelector(
        ".swal2-timer-progress-bar"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.backgroundColor = "#f27474"; // error red color
      }
    },
  });
};

// Info Toast
export const info = (message: string) => {
  return Swal.fire({
    toast: true,
    position: "top-end",
    icon: "info",
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      const progressBar = toast.querySelector(
        ".swal2-timer-progress-bar"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.backgroundColor = "#3fc3ee"; // info blue color
      }
    },
  });
};

// Warning Toast
export const warning = (message: string) => {
  return Swal.fire({
    toast: true,
    position: "top-end",
    icon: "warning",
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      const progressBar = toast.querySelector(
        ".swal2-timer-progress-bar"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.backgroundColor = "#f8bb86"; // warning orange color
      }
    },
  });
};

// Confirmation Dialog
export const confirmAlert = (
  title: string,
  text: string,
  confirmButtonText = "Yes"
) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
  });
};

// Success Alert
export const successAlert = (title: string, message?: string) => {
  return Swal.fire({
    icon: "success",
    title,
    text: message,
  });
};

// Error Alert
export const errorAlert = (title: string, message?: string) => {
  return Swal.fire({
    icon: "error",
    title,
    text: message,
  });
};

export const toast = {
  success,
  error,
  info,
  warning,
};

export const alert = {
  confirm: confirmAlert,
  success: successAlert,
  error: errorAlert,
};
