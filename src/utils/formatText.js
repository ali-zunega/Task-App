export const capitalizeFirstLetter = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const PRIORITY_COLORS = {
  high: "danger",
  medium: "warning",
  low: "success",
};

// asigna color al badge de prioridad
export const getPriorityColor = (priority) =>
  PRIORITY_COLORS[priority] || "secondary";

// traduce prioridad para el badge
export const PRIORITY_LABELS = {
  high: "Alta",
  medium: "Media",
  low: "Baja",
};

export const getPriorityLabel = (priority) =>
  PRIORITY_LABELS[priority] || capitalizeFirstLetter(priority);
