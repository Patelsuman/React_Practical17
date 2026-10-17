
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load students. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-3">
          Student Records
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Total Students: {students.length}
        </p>

        {loading && (
          <p className="text-center text-indigo-600 text-lg">
            Loading students...
          </p>
        )}

        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <StudentCard
                key={student.id}
                student={student}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentList;
