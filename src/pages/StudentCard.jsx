
function StudentCard({ student, index }) {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`p-6 rounded-2xl border-2 shadow-md
      transition duration-300 hover:scale-105 hover:shadow-xl
      ${
        isEven
          ? "bg-pink-50 border-pink-300"
          : "bg-indigo-50 border-indigo-300"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-14 h-14 rounded-full flex items-center
          justify-center text-xl font-bold text-white
          ${isEven ? "bg-pink-500" : "bg-indigo-500"}`}
        >
          {student.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {student.name}
          </h2>
          <p className="text-sm text-gray-500">
            Student ID: {student.id}
          </p>
        </div>
      </div>

      <div className="space-y-3 text-gray-700 break-words">
        <p>
          <span className="font-semibold">📧 Email:</span>
          <br />
          {student.email}
        </p>

        <p>
          <span className="font-semibold">🏙️ City:</span>{" "}
          {student.address.city}
        </p>

        <p>
          <span className="font-semibold">🏢 Company:</span>{" "}
          {student.company.name}
        </p>
      </div>

      <div
        className={`mt-5 text-center rounded-lg py-2 font-semibold
        ${
          isEven
            ? "bg-pink-200 text-pink-800"
            : "bg-indigo-200 text-indigo-800"
        }`}
      >
        {isEven ? "Even Record" : "Odd Record"}
      </div>
    </div>
  );
}

export default StudentCard;