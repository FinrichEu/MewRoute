import { test, expect } from "vitest";
import selectJobs from "./selectJobs";

/* Test that the function finds a job opening by its title */

test("Finds a job opening by its title", () => {
  const jobs = [
    {
      title: "React Developer",
      company_name: "Google",
      location: "Berlin",
      remote: true,
      created_at: 200,
    },
    {
      title: "Python Developer",
      company_name: "Microsoft",
      location: "London",
      remote: false,
      created_at: 100,
    },
  ];

  const result = selectJobs(jobs, {
    search: "React",
    location: "",
    workformat: "all",
    sortBy: "newest",
  });

  expect(result).toEqual([jobs[0]]);
});

/* Test that the function returns an empty array if no job openings match the search criteria*/

test("Returns an empty array if nothing is found", () => {
  const jobs = [
    {
      title: "React Developer",
      company_name: "Google",
      location: "Berlin",
      remote: true,
      created_at: 200,
    },
  ];

  const result = selectJobs(jobs, {
    search: "Python",
    location: "",
    workformat: "all",
    sortBy: "newest",
  });

  expect(result).toEqual([]);
});

/* Test that the function sorts job postings from oldest to newest */

test("Sorts job postings from oldest to newest", () => {
  const jobs = [
    { created_at: 300 },
    { created_at: 100 },
  ];

  const result = selectJobs(jobs, {
    search: "",
    location: "",
    workformat: "all",
    sortBy: "oldest",
  });

  expect(result).toEqual([jobs[1], jobs[0]]);
});