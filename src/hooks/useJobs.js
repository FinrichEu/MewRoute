import { useState, useEffect } from 'react';
import { getJobs } from '../API/jobs.js';

export default function useJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        /* SETUP */

        const controller = new AbortController();

        async function loadJobs() {
            setLoading(true);
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