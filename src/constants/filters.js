// Filter values for 'Roles' filter
export const ROLES = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "FullStack", value: "fullstack" },
];

// Filter values for 'Number of Employees' filter
export const EMPLOYEE_COUNT_RANGES = [
  { label: "0 - 100", value: { min: 0, max: 100 } },
  { label: "101 - 200", value: { min: 101, max: 200 } },
  { label: "201 - 500", value: { min: 201, max: 500 } },
  { label: "500+", value: { min: 500 } },
];

// Filter values for 'Experience' filter
export const EXPERIENCE_RANGES = [
  { label: "0 - 2", value: { min: 0, max: 2 } },
  { label: "3 - 5", value: { min: 3, max: 5 } },
  { label: "5 - 10", value: { min: 5, max: 10 } },
  { label: "10+", value: { min: 10 } },
];

// Filter values for 'Remote' filter
export const REMOTE_OPTIONS = [
  { label: "Remote", value: "remote" },
  { label: "In-office", value: "in-office" },
  { label: "Hybrid", value: "hybrid" },
];

// Filter values for 'Minimum Base Salary' filter
export const MINIMUM_SALARY_RANGES = [
  { label: "0 - 10", value: { min: 0, max: 10 }, currency: "USD" },
  { label: "11 - 20", value: { min: 11, max: 20 }, currency: "USD" },
  { label: "21 - 40", value: { min: 21, max: 40 }, currency: "USD" },
  { label: "40+", value: { min: 40 }, currency: "USD" },
];

export const FILTER_ITEMS = [
  { label: "Roles", filterValues: ROLES },
  { label: "Number of Employees", filterValues: EMPLOYEE_COUNT_RANGES },
  { label: "Experience", filterValues: EXPERIENCE_RANGES },
  { label: "Remote", filterValues: REMOTE_OPTIONS },
  { label: "Minimum Base Salary", filterValues: MINIMUM_SALARY_RANGES },
];

export const FILTER_QUERY_MAPPINGS = {
  Roles: "jobRole",
  "Number of Employees": "employeeCount",
  Experience: {
    min: "minExp",
    max: "maxExp",
  },
  Remote: "location",
  "Minimum Base Salary": {
    min: "minJdSalary",
    max: "maxJdSalary",
  },
  Company: "companyName",
};
