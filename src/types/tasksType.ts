
export type TaskStatusType = "active" | "deleted" | "done";

export interface TaskType {
    id: string,
    created_at: number,
    text: string,
    isCompleted: boolean,
    status: TaskStatusType,
}