import { useState, useEffect } from 'react';
import { getJobs } from '../API/jobs.js';

/* Custom hook to fetch jobs from the API and manage loading, error, and retry states */

export default function useJobs() {
    /* State to hold the fetched jobs */
    const [jobs, setJobs] = useState([]);

    /* While the job openings are loading, I am displaying the loading status */
    const [loading, setLoading] = useState(true);

    /* I store the error message; initially, there is no error */
    const [error, setError] = useState(null);

    /* State to track the number of retry attempts */
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        /* SETUP */

        const controller = new AbortController();

        async function loadJobs() {
            /* I inform the interface that the loading has started */
            setLoading(true);

            /* Reset the error state before making a new request */
            setError(null);

            try {
                const result = await getJobs(controller.signal);

                if (controller.signal.aborted) return;
                /* If the fetch was aborted, do not update the state */
                setJobs(result.data);

            } catch (error) {

                if (controller.signal.aborted || error.name === "AbortError") {
                    return; /* Ignore abort errors */
                }

                /* If the fetch fails, set the error state to display an error message */
                setError(error.message);

            } finally {

                if (!controller.signal.aborted) {
                    /* Set loading to false only if the fetch was not aborted */
                    setLoading(false);
                }
            }
        }

        loadJobs();

        /* CLEANUP */
        return () => {
            controller.abort();
        };

    }, [retryCount]); /* Which values ​​should trigger a re-run of this useEffect when they change? */

    function retry() {
        setRetryCount((count) => count + 1);
    }

    return { jobs, loading, error, retry };
}