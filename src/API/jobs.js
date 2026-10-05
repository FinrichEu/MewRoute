const url = "https://www.arbeitnow.com/api/job-board-api";

export async function getJobs() {
    /* fetch() returns Promise, await gives us Response */
    const response = await fetch(url);
    /* response.json() returns Promise, await gives us parsed JS data */
    if (!response.ok) {
        throw new Error("Failed to load jobs");
    }

    const json = await response.json();

    return json;
}