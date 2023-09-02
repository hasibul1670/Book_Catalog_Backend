export const userFilterableFields: string[] = [
  'searchTerm',
  'userId',
  'email',
  'contactNo',
  'gender',
  'bloodGroup',
  'gender',
  'academicFacultyId',
  'academicDepartmentId',
  'academicSemesterId'
];

export const userSearchableFields: string[] = [
  'firstName',
  'lastName',
  'middlename',
  'email',
  'contactNo',
  'userId'
];

export const userRelationalFields: string[] = [
  'academicFacultyId',
  'academicDepartmentId',
  'academicSemesterId'
];
export const userRelationalFieldsMapper: { [key: string]: string } = {
  academicFacultyId: 'academicFaculty',
  academicDepartmentId: 'academicDepartment',
  academicSemesterId: 'academicSemester'
};
