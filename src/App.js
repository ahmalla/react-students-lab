
import './App.css';
import { useState } from 'react';
import Student from './Student';




function App() {
  const [students, setStudents] = useState ([
    {
      name: 'Cait Yomorta',
      bio: 'Priority lines bumps stab mag left, fog spitting barrels nuggets of heaven alley-oop.',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Foam whips one WQS short period mental radical indy soft lip. Hot glass Bells, cranking muscle shaka a-frame offshore fin.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'Tail click wedge factory thick back dooring rookie brah deep shred Waimea. Ride carve high on the face precise ripping psyching flow, puff wall. Wiggolly stale fish alley-oop heavy section full rote firing shorebreak paddle.',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]
    }
  ]);
  
  return (
    <div>
      {students.map(function (student) {
        return  <Student key={student.name} name={student.name} bio={student.bio} student={student} />     
 })}
              
      
    </div>

  
    
  )

}


export default App
