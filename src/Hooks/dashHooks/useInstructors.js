import { useEffect, useState } from "react"

const useInstructors = email => {
    const [isInstructor, setIsInstructor] = useState(false);
    const [isInstructorLoading, setIsInstructorLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://school-photography-server.vercel.app/users/instructor/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsInstructor(data.isInstructor);
                    setIsInstructorLoading(false);
                })
        }
    }, [email])
    return [isInstructor, isInstructorLoading]
}

export default useInstructors;