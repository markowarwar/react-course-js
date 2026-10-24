const withStatus = (studentsList) => {
  return studentsList.map(student => ({
    ...student,
    status: student.grade >= 56 ? "pass" : "fail"
  }));
};

export default withStatus;