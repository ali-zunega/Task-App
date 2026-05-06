import { useTaskContext } from "../context/useTaskContext";
const TaskControls = () => {
  const { searchTerm, setSearchTerm, filterStatus, setFilterStatus } =
    useTaskContext();
  return (
    <div className="mb-4">
      {/* Buscador */}
      <div className="input-group mb-3 shadow-sm border rounded">
        <span className="input-group-text bg-white border-0">
          <i className="bi bi-search text-muted"></i>
        </span>
        <input
          id="search-task"
          name="search-task"
          type="text"
          className="form-control border-0 ps-0"
          placeholder="Buscar tareas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtros */}
      <div className="d-flex justify-content-md-center justify-content-start flex-wrap gap-1">
        <FilterButton
          active={filterStatus === "all"}
          onClick={() => setFilterStatus("all")}
          icon={<i className="bi bi-card-checklist"></i>}
          label="Todas"
        />
        <FilterButton
          active={filterStatus === "pending"}
          onClick={() => setFilterStatus("pending")}
          icon={<i className="bi bi-clock-history"></i>}
          label="Pendientes"
        />
        <FilterButton
          active={filterStatus === "completed"}
          onClick={() => setFilterStatus("completed")}
          icon={<i className="bi bi-check2-circle"></i>}
          label="Completadas"
        />
      </div>
    </div>
  );
};

const FilterButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`btn btn-sm d-flex align-items-center gap-2 rounded-pill px-3 transition-all ${
      active ? "btn-primary shadow" : "btn-outline-secondary border-0"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default TaskControls;
