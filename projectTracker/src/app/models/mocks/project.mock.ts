import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1, 'Kredi yönetimi', 'Bireysel kredi yönetim',
        2, 30, new Date(2022, 0, 13),
        [
            new Task(1, 'Arayüzün oluşturulması', new Date(2022, 0, 31), 1, false),
            new Task(1, 'DB oluşturulması', new Date(2022, 1, 10), 1, false),

        ]
    ),
    new Project(2, 'Project A', 'Açıklama A',
        2, 30, new Date(2022, 0, 13),
        [
            new Task(1, 'Arayüzün oluşturulması', new Date(2022, 0, 31), 1, false),
            new Task(1, 'DB oluşturulması', new Date(2022, 1, 10), 1, false)

        ]),
    new Project(3, 'Project B', 'Açıklama B',
        2, 30, new Date(2022, 0, 13),
        [
            new Task(1, 'Arayüzün oluşturulması', new Date(2022, 0, 31), 1, false),
            new Task(1, 'DB oluşturulması', new Date(2022, 1, 10), 1, false)

        ]),
    new Project(4, 'Project C', 'Açıklama C',
        2, 30, new Date(2022, 0, 13),
        [
            new Task(1, 'Arayüzün oluşturulması', new Date(2022, 0, 31), 1, false),
            new Task(1, 'DB oluşturulması', new Date(2022, 1, 10), 1, false)

        ])


]
