import { Lecture } from './lecture.type'

export interface Course {
	id: number
	title: string
	lectures: Lecture[]
}

export type SidebarCourse = Partial<Omit<Course, 'lectures'>>
