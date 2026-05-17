import { getPriorityColor } from "../utils/formatText";

function PrioritySelector({ value, onChange, name = "priority", idPrefix = "priority" }) {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2">
      <div className="d-flex flex-grow-1 gap-2">
        {["high", "medium", "low"].map((p) => (
          <label
            key={p}
            htmlFor={`${idPrefix}-${p}`}
            className={`priority-pill flex-fill text-center ${
              value === p ? `active bg-${getPriorityColor(p)}` : ""
            }`}
          >
            <input
              type="radio"
              id={`${idPrefix}-${p}`}
              name={name}
              value={p}
              checked={value === p}
              onChange={(e) => onChange(e.target.value)}
            />
            {p === "high" ? "Alta" : p === "medium" ? "Media" : "Baja"}
          </label>
        ))}
      </div>
    </div>
  );
}

export default PrioritySelector;