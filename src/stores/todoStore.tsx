import { create } from 'zustand';

export interface Task {
  id: number;
  text: string;
  selected: boolean;
}

interface TodoStore {
  tasks: Task[];
  storeTask: (text: string) => void;
  deleteTaskById: (id: number) => void;
  deleteSelectedTasks: () => void;
  toggleTaskSelection: (id: number) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  tasks: [],
  storeTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now(), text, selected: false },
      ],
    })),
  deleteTaskById: (id) =>
    set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
    })),
  deleteSelectedTasks: () =>
    set((state) => ({
      tasks: state.tasks.filter((task) => !task.selected),
    })),
  toggleTaskSelection: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, selected: !task.selected }
          : task
      ),
    })),
}));

export default useTodoStore;
