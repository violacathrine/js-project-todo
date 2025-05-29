// src/stores/useTaskStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (text, dueDate) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              text,
              isCompleted: false,
              isStarred: false,
              createdAt: new Date().toISOString(),
              dueDate: dueDate ? new Date(dueDate).toISOString() : null,
            },
          ],
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      completeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
          ),
        })),

      completeAllTasks: () =>
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, isCompleted: true })),
        })),

      uncompleteAllTasks: () =>
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, isCompleted: false })),
        })),

      removeAllTasks: () => set({ tasks: [] }),

      toggleStarred: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isStarred: !task.isStarred } : task
          ),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);
