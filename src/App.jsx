import Student from "./Component/Student";

function App() {
  const students = [
    {
      name: "Astha Parsaniya",
      rollNo: "101",
      course: "BCA",
      email: "astha@gmail.com",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Rahul Sharma",
      rollNo: "102",
      course: "BCA",
      email: "rahul@gmail.com",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Priya Patel",
      rollNo: "103",
      course: "BCA",
      email: "priya@gmail.com",
      image: "https://i.pravatar.cc/150?img=32",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Student ID Cards
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {students.map((student) => (
          <Student
            key={student.rollNo}
            name={student.name}
            rollNo={student.rollNo}
            course={student.course}
            email={student.email}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
