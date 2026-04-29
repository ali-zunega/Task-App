# 📝 Task App (React + Vite)

Una aplicación de gestión de tareas sencilla pero escalable, desarrollada con React y Vite.
Este proyecto forma parte de un reto práctico centrado en la creación de una lista de tareas clara, funcional y fácil de usar.

---

## 🎯 Objetivo

Construir una aplicación web que permite a los usuarios:

- Agregar nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Diferenciación clara de tareas pendientes y completadas

---

## 🚀 Stack Tecnológico

- ⚛️ React (Componentes funcionales + hooks)
- ⚡ Vite
- 🎨 CSS (estilo personalizado)

---

## 📦 Features

### ✅ Funcionalidades principales

- Agregar tareas dinámicamente
- Cambiar el estado de finalización de las tareas
- Eliminar tareas de la lista
- Indicador visual de tareas completadas y pendientes

### 💡 Consideraciones de UX

- Validación de entrada (evita tareas vacías)
- Actualizaciones inmediatas de la interfaz de usuario (no requiere recarga)
- Jerarquía visual clara y retroalimentación

### 🧠 Estructura de los datos

Cada tarea se representa como un objeto:

```js
{
  id: number,
  text: string,
  completed: boolean
}
```

---

## 🗂️ Estructura del Proyecto

```bash
src/
│
├── components/        # componentes reutilizables
│   └── TaskInput.jsx
│
├── features/
│   └── tasks/
│       ├── TaskList.jsx
│       └── TaskItem.jsx
│
├── hooks/
├── styles/            #  estilos globales
│
├── App.jsx            # logica principal de la app
└── main.jsx
```

---

## 🛠️ Instalación y configuración

1. Clona el repositorio:

```bash
git clone https://github.com/your-username/react-task-app.git
```

2. Navega a la carpeta del proyecto:

```bash
cd react-task-app
```

3. Instala dependencias:

```bash
npm install
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

---

## 🧪 Mejoras futuras

This project is intentionally simple but designed with scalability in mind. Possible next steps:

- 💾 Persistencia de datos usando `localStorage`
- 🔍 Filtro de tareas (Todas / Completadas / Pendientes)
- ✏️ Editar tareas existentes
- 🎨 Mejora de UI (animaciones, tema, accesibilidad)
- 🧪 Agregar pruebas unitarias y de integración
- 📱 Mejora de diseño responsive

---

## 📅 Plan de desarrollo

- **Day 1:** Configuración del proyecto + funcionalidad para agregar tareas
- **Days 2-3:** Implementar la función de eliminar y alternar la finalización
- **Days 4-5:** Mejoras de la UX/UI y pruebas básicas

---

## 📸 Screenshots

_(Add screenshots here once UI is implemented)_

---

## 🤝 Autor

Developed as part of a frontend take-home challenge.

---

## 📄 Licencia

This project is open-source and available under the [MIT License](./LICENSE).
