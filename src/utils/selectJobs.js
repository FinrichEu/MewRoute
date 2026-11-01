export default function selectJobs(
    jobs,
    { search, location, workformat, sortBy }
) {
    
    /* Create a copy of the jobs array and sort it by date */
    /* [...jobs] copies the array. .sort() modifies the array it is called on */

    const jobssorted = [...jobs].sort((job1, job2) => {
        if (sortBy === "newest") {
            return job2.created_at - job1.created_at;
        }
        if (sortBy === 'oldest') {
            return job1.created_at - job2.created_at;
        }

        return 0
    })

    /* Remove whitespace from the edges (.trim) and convert the query to lowercase */
    const normalizedSearch = search.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();

    const searchedJobs = jobssorted.filter((job) => {
        if (normalizedSearch === "") {
            return true;
        }

        return (
            job.title.toLowerCase().includes(normalizedSearch) ||
            job.company_name.toLowerCase().includes(normalizedSearch)
        );
    });

    const filteredJobs = searchedJobs.filter((job) => {
        if (normalizedLocation === "") {
            return true;
        }

        if (!job.location) {
            return false;
        }

        return job.location.toLowerCase().includes(normalizedLocation);
    });

    const remoteSearched = filteredJobs.filter((job) => {
        if (workformat === "remote") {
            return job.remote === true;
        }

        if (workformat === "not-remote") {
            return job.remote === false;
        }

        return true;
    });

    return remoteSearched;
}
