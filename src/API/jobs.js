const url = "https://www.arbeitnow.com/api/job-board-api";


export async function getJobs(signal, page) {
    /* fetch() returns Promise, await gives us Response */
    /* url + "?page=" + page */
    const response = await fetch(`${url}?page=${page}`, { signal });
    /* response.json() returns Promise, await gives us parsed JS data */
    if (!response.ok) {
        throw new Error("Failed to load jobs");
    }

    const json = await response.json();

    if (!Array.isArray(json?.data)) { /* Is the passed value an array? */
        throw new Error("Invalid response: jobs data must be an array");
    }

    return {
        data: json.data,
        links: json.links,
        meta: json.meta,
    };
}