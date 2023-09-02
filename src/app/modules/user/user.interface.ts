export type IUserFilterRequest = {
  searchTerm?: string | undefined;
  academicFacultyId?: string | undefined;
  academicDepartmentId?: string | undefined;
  academicSemesterId?: string | undefined;
  UserId?: string | undefined;
  email?: string | undefined;
  contactNo?: string | undefined;
  gender?: string | undefined;
  bloodGroup?: string | undefined;
}

export type IUserMyCoursesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
}

export type IUserMyCourseSchedulesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
}

export type UserCreatedEvent = {
  id: string;
  name: {
      firstName: string;
      lastName: string;
      middleName?: string;
  };
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  email: string;
  contactNo: string;
  profileImage: string;
  academicFaculty: {
      syncId: string;
  };
  academicDepartment: {
      syncId: string;
  };
  academicSemester: {
      syncId: string;
  };
};

export type UserUpdatedEvent = {
  id: string;
  name: {
      firstName: string;
      lastName: string;
      middleName?: string;
  };
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  email: string;
  contactNo: string;
  profileImage: string;
  academicFaculty: {
      syncId: string;
  };
  academicDepartment: {
      syncId: string;
  };
  academicSemester: {
      syncId: string;
  };
};