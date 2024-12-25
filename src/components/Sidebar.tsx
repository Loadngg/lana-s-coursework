import { Course, SidebarCourse } from '../types/course.type'
import { Lecture } from '../types/lecture.type'

interface Props {
	content: Course[]
	activeCourseId: number
	setActiveCourseId: React.Dispatch<React.SetStateAction<number>>
	setCurrentLecture: React.Dispatch<React.SetStateAction<Lecture | undefined>>
	resetTitle: () => void
}

const Sidebar = ({
	content,
	activeCourseId,
	setActiveCourseId,
	setCurrentLecture,
	resetTitle,
}: Props) => {
	const sidebarContent = content.map(
		c =>
			({
				id: c.id,
				title: c.title,
			}) as SidebarCourse
	)

	const handleCourseClick = (id: number) => {
		setActiveCourseId(id)
		setCurrentLecture(undefined)
		resetTitle()
	}

	return (
		<aside className='customBlock flex-col max-w-[400px] min-w-[400px] flex-1 overflow-y-auto'>
			<h2 className='w-full text-2xl font-bold'>Содержание</h2>
			<div className='w-full'>
				<ul>
					{sidebarContent.map(item => (
						<li key={item.id}>
							<button
								className={`w-full transition-colors hover:text-purple-600 font-bold text-lg text-left mb-2 ${activeCourseId === item.id ? 'text-purple-900' : ''}`}
								onClick={() => handleCourseClick(item.id as number)}
							>
								{item.title}
							</button>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar
