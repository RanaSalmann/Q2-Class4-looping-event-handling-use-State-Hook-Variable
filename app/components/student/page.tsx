import {studentType} from "@/types/commonTypes"

export default function students(){

    const studentsRecord:studentType []= [
        {
            name:   'Arun',
            gender: 'Male',
            physics: 88,
            maths:   87,
            english: 78,
        },
        {
            name:   'Rajesh',
            gender: 'Male',
            physics: 96,
            maths:   100,
            english: 95,
        },
        {
            name:   'Richi',
            gender: 'Male',
            physics: 98,
            maths:   96,
            english: 100,
        }
    ]

    return (
        <div>
            <table>
                <tr>
                    <th>Name:</th>
                    <th>Gender</th>
                    <th>Math</th>
                    <th>Physics</th>
                    <th>English</th>
                </tr>
                {studentsRecord.map((student, index) => {
                    return (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.gender}</td>
                            <td>{student.maths}</td>
                            <td>{student.physics}</td>
                            <td>{student.english}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
