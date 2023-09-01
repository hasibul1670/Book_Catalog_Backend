import express from 'express';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from '../modules/book/academicDepartment.routes';
import { BuildingRoutes } from '../modules/orderedBook/building.routes';
import { CourseRoutes } from '../modules/category/course.routes';
import { FacultyRoutes } from '../modules/reviewRating/faculty.routes';
import { AcademicSemesterRoutes } from '../modules/order/academicSemester.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { StudentRoutes } from '../modules/user/student.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/buildings',
    route: BuildingRoutes,
  },
  {
    path: '/rooms',
    route: RoomRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
