abstract class TaskManager{
    
    abstract addTask(task: string): void;

    abstract listTask(): string[];

}

class Project extends TaskManager{
    private task: string[];

    constructor(task: string[]) {
        super();
        this.task = [];
    }
    addTask(task: string): void {
        this.task.push(task);
    }

    listTask() {
        return this.task;
    }
}

class DailyTask extends TaskManager{
    private task: string[];

    constructor(task: string[]) {
        super();
        this.task = [];
    }

    addTask(task: string): void {
        this.task.push(task);
    }

    listTask() {
        return this.task;
    }

}

const project = new Project([]);

project.addTask('Criar viajar');
project.addTask('Criar Site');
project.addTask('Criar Planner de Rotas');

const dailyTask = new DailyTask([]);

dailyTask.addTask('Ligar para o João');
dailyTask.addTask('Ligar para o Maria');
dailyTask.addTask('Estudar programação')

console.log(project.listTask());
console.log(dailyTask.listTask());