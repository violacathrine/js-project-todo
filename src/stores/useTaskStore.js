import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],

  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text, isCompleted: false }],
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
      
      removeAllTasks: () => set({ tasks: [] }),
    })),
}));