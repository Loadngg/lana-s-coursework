import { useState } from 'react'
import { Course } from '../types/course.type'
import { Lecture } from '../types/lecture.type'
import Content from './Content'
import Sidebar from './Sidebar'

interface Props {
	content: Course[]
}

export default function Wrapper({ content }: Props) {
	const baseTitle = 'Лингвистические средства вычислительных систем'
	const [activeCourseId, setActiveCourseId] = useState(content[0].id)
	const [currentLecture, setCurrentLecture] = useState<Lecture | undefined>()

	const [title, setTitle] = useState(baseTitle)

	const activeCourseContent = content.find(
		c => c.id === activeCourseId
	) as Course

	const handleBackClick = () => {
		setCurrentLecture(undefined)
		setTitle(baseTitle)
	}

	const resetTitle = () => {
		setTitle(baseTitle)
	}

	return (
		<div className='wrapper'>
			<div className='customBlock flex flex-col items-center text-center justify-center mb-10'>
				<div className='font-bold text-3xl'>{title}</div>
				{currentLecture && (
					<button
						className='font-bold text-l bg-purple-900 hover:bg-purple-600 transition-colors text-white rounded-3xl py-2 px-6'
						onClick={handleBackClick}
					>
						Назад к курсу
					</button>
				)}
			</div>
			<div className='flex gap-10 flex-1 mb-16'>
				<Sidebar
					activeCourseId={activeCourseId}
					setActiveCourseId={setActiveCourseId}
					setCurrentLecture={setCurrentLecture}
					content={content}
					resetTitle={resetTitle}
				/>

				<Content
					lectures={activeCourseContent.lectures}
					currentLecture={currentLecture}
					setCurrentLecture={setCurrentLecture}
					setTitle={setTitle}
				/>
			</div>
		</div>
	)
}
