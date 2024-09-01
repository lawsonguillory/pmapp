import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const ProjectManagementAssistant: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <h1 className="text-2xl font-bold">Project Management Assistant</h1>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            <Input
              type="text"
              value={newTask}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
              className="mr-2"
            />
            <Button onClick={addTask}>Add Task</Button>
          </div>
          <ul>
            {tasks.map((task: Task) => (
              <li key={task.id} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="mr-2"
                  />
                  <span className={task.completed ? 'line-through' : ''}>
                    {task.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectManagementAssistant;