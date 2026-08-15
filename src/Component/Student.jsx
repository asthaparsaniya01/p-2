function Student({ name, rollNo, course, email, image }) {
  return (
    <div className="w-80 rounded-2xl bg-white shadow-xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-4">
        <h2 className="text-xl font-bold">ABC COLLEGE</h2>
        <p className="text-sm">STUDENT ID CARD</p>
      </div>

      {/* Student Image */}
      <div className="flex justify-center mt-5">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />
      </div>

      {/* Student Details */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>

        <div className="mt-4 text-left space-y-2 text-sm">
          <p>
            <span className="font-semibold">Roll No:</span> {rollNo}
          </p>
          <p>
            <span className="font-semibold">Course:</span> {course}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 text-center py-3">
        <p className="text-xs text-gray-500">Valid Student ID</p>
      </div>
    </div>
  );
}

export default Student;
