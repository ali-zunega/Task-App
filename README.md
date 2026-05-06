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

### ✅ Funcionalidades Implementadas

- **Gestión de Tareas:** Agregar, completar y eliminar tareas con una interfaz fluida.
- **Persistencia Local:** Integración con `localStorage` para que tus tareas no se borren al recargar el navegador.
- **Arquitectura Limpia:** Separación de lógica en componentes funcionales y utilidades (`utils`) para el formateo de texto.

### 💡 Experiencia de Usuario (UX/UI)

- **Micro-interacciones:** Animaciones personalizadas ("pop") al completar tareas para un feedback visual dinámico.
- **Diseño Responsive:** Optimizado para dispositivos móviles y escritorio (breakpoints ajustados a 576px).
- **Formateo Inteligente:** Implementación de _Sentence case_ mediante JS para mantener la consistencia visual.

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
├── components/          # componentes reutilizables
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── TaskInput.jsx
├── context/             # contexto
│   ├── TaskContext.jsx
│   └── useTasksContext.js
├── hooks/
│   └── useTasks.js
├── utils/               #  funciones de ayuda
├── styles/              #  estilos globales
│
├── App.jsx              # logica principal de la app
└── main.jsx
```

---

## 🛠️ Instalación y configuración

1. Clona el repositorio:

```bash
git clone https://github.com/ali-zunega/Task-App.git
```

2. Navega a la carpeta del proyecto:

```bash
cd Task-App
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

## 🧪 Próximos Pasos (Scalability)

- **Categorización:** Agregar etiquetas o prioridades a las tareas.
- **Modo Oscuro:** Implementar un switch de tema (Light/Dark mode) usando variables CSS.
- **Búsqueda y Filtros:** Filtrar por tareas pendientes, completadas o por texto.
- **Testing:** Cobertura de pruebas unitarias con Vitest y React Testing Library.

---

## 📅 Plan de desarrollo

- **Day 1:** Configuración del proyecto + funcionalidad para agregar tareas
- **Days 2-3:** Implementar la función de eliminar y alternar la finalización
- **Days 4-5:** Mejoras de la UX/UI y pruebas básicas

---

## 📸 Screenshots

---

## 🤝 Autor

Developed as part of a frontend take-home challenge.

---

## 📄 Licencia

This project is open-source and available under the [MIT License](./LICENSE).
