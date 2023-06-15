

****ANs1****


let studentRecords = [
    {name: 'John', id: 123, marks: 98},
    {name: 'Baba', id: 101, marks: 23},
    {name: 'yaga', id: 200, marks: 45},
    {name: 'Wick', id: 115, marks: 75}
  ];
  
  const studentNames = studentRecords.map(record => record.name.toUpperCase());
  
  console.log(studentNames);


  ******ANS2*******


  let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
  ];
  
  let highScorers = studentRecords.filter((student) => student.marks > 50);
  
  console.log(highScorers);

  
********ANS3******
  let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
  ];
  
  const filteredStudents = studentRecords.filter(student => {
    return student.marks > 50 && student.id > 120;
  });
  
  console.log(filteredStudents);


  ********ANS4*****
  let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 }
  ];
  
  let totalMarks = 0;
  
  for (const record of studentRecords) {
    totalMarks += record.marks;
  }
  
  console.log("Total Marks:", totalMarks);


  *********ANS5*******
  let studentRecords = [
    {name: 'John', id: 123, marks: 98},
    {name: 'Baba', id: 101, marks: 23},
    {name: 'yaga', id: 200, marks: 45},
    {name: 'Wick', id: 115, marks: 75}
  ];
  
  const names = studentRecords
    .filter(record => record.marks > 50)
    .map(record => record.name);
  
  console.log(names); 
  
  

  *******ANS6****
  let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
  ];
  
  function calculateSumOfMarks(records) {
    let sum = 0;
  
    for (const record of records) {
      if (record.id > 120) {
        sum += record.marks;
      }
    }
  
    return sum;
  }
  
  const sumOfMarks = calculateSumOfMarks(studentRecords);
  console.log(sumOfMarks);  

  

  ******ANS7*****
  let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
  ];
  
  studentRecords.forEach((student) => {
    if (student.marks < 50) {
      student.marks += 15;
    }
  
    const totalMarks = student.marks;
  
    if (totalMarks > 50) {
      console.log(`${student.name}: ${totalMarks}`);
    }
  });

  
*******ANS8*****
const studentRecords = [
    { name: 'John', class: 'A', rollNo: 1 },
    { name: 'Baba', class: 'B', rollNo: 2 },
    { name: 'Yaga', class: 'A', rollNo: 3 },
    { name: 'Wick', class: 'C', rollNo: 4 },
    { name: 'Emma', class: 'B', rollNo: 5 },
    { name: 'Oliver', class: 'A', rollNo: 6 }
  ];
  
  for (const student of studentRecords) {
    console.log(`Name: ${student.name}`);
    console.log(`Class: ${student.class}`);
    console.log(`Roll No: ${student.rollNo}`);
    console.log('------------------------');
  }
  
  
  
  