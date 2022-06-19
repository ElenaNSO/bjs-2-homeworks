function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age; 
}

const student1 = new Student ('Даша','женский',19);
const student2 = new Student ('Ольга','женский',20); 
const student3 = new Student ('Саша','мужской',19); 
const student4 = new Student ('Андрей','мужской',18); 

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
   }
  
  this.marks.push(mark);
  
}

Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) {
    this.marks = [];
    }
  for(let i of mark) {
    this.marks.push(i);
  }
}

Student.prototype.getAverage = function() {
  const average = this.marks.reduce((acc, mark) => {
    return acc + mark;
    })
  
  return  average / this.marks.length;    
};

Student.prototype.exclude = function(reason) {
  delete Student.prototype.subject;
  delete Student.prototype.marks;

  this.excluded = reason;
}

