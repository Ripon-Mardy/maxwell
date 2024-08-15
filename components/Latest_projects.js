import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ==== images === 
import latest1 from '../public/Image/latest projects/1.jpg'
import latest2 from '../public/Image/latest projects/2.jpg'
import latest3 from '../public/Image/latest projects/3.jpg'
import latest4 from '../public/Image/latest projects/4.jpg'
import latest5 from '../public/Image/latest projects/5.jpg'
import latest6 from '../public/Image/latest projects/6.jpg'
import latest7 from '../public/Image/latest projects/7.jpg'
import latest8 from '../public/Image/latest projects/8.webp'


const Latest_projects = () => {

    const latestProjectList = [
        {
            "projectImage" : latest1,
            "projectTitle" : "Automatic door"
        },
        {
            "projectImage" : latest2,
            "projectTitle" : "Automatic door"
        },
        {
            "projectImage" : latest3,
            "projectTitle" : "Automatic door"
        },
        {
            "projectImage" : latest4,
            "projectTitle" : "Automatic door"
        },
        {
            "projectImage" : latest5,
            "projectTitle" : "Automatic door"
        },
        {
            "projectImage" : latest6,
            "projectTitle" : "Automatic door"
        },
        {
            "projectImage" : latest7,
            "projectTitle" : "Automatic door"
        },
        {
            "projectImage" : latest8,
            "projectTitle" : "Automatic door"
        }
    ]


  return (
    <>
    <section className='py-10'>
        <div className='container mx-auto px-3'>

{/* ==== latest projects title ===  */}
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Veiw Our Latest Projects</h1>
                <div className='w-28 h-1 bg-red-500 mx-auto mt-6'></div>
            </div>

            {/* === latest projects list ===  */}
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 pt-10'>

                {latestProjectList.map((list) => (
                    <Link href={'#'}>
                        <Image src={list.projectImage} className='w-full h-44 object-cover rounded-sm hover:-translate-y-1 duration-200 ease-in-out' width={200} height={200} alt='porject' />
                        <h1 className='text-xl font-semibold bg-gray-500 text-center text-white'> {list.projectTitle} </h1>
                    </Link>
                ))}

            </div>

        </div>
    </section>
    </>
  )
}

export default Latest_projects
