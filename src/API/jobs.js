const url = "https://www.arbeitnow.com/api/job-board-api";

export async function getJobs(signal) {
    /* fetch() returns Promise, await gives us Response */
    const response = await fetch(url, { signal });

    if (!response.ok) {
        throw new Error("Failed to load jobs");
    }

    /* response.json() returns Promise, await gives us parsed JS data */
    const json = await response.json();

    if (!Array.isArray(json?.data)) {
        throw new Error("Invalid response: jobs data must be an array");
    }

    return {
        data: json.data
    };
}