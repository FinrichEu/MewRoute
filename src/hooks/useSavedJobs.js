import { useState, useEffect } from 'react';

export default function useSavedJobs() {
    const [savedJobIds, setSavedJobIds] = useState(() => {
        /* read saved IDs from localStorage on initialization */
        const savedIds = localStorage.getItem('savedJobIds');
        if (!savedIds) {
            return [];
        }

        try {
            const parsedIds = JSON.parse(savedIds);
            if (!Array.isArray(parsedIds)) {
                return [];
            }

            /* API jobs use string slugs discard old numeric IDs and null entries */
            return parsedIds.filter((id) => typeof id === 'string' && id.length > 0);
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('savedJobIds', JSON.stringify(savedJobIds));
        /* Save the IDs to localStorage whenever savedJobIds changes */
    }, [savedJobIds]); /* Which values ​​should trigger a re-run of this useEffect when they change? */

    function saveJob(jobId) {
        setSavedJobIds((currentIds) => {
            /* If the job is already saved, leave the array unchanged */
            if (currentIds.includes(jobId)) {
                return currentIds;
            }
            
            /* Create a new array: existing IDs plus the new one */
            return [...currentIds, jobId];
        });
    }

    function removeJob(jobId) {
        setSavedJobIds((currentIds) => {
            return currentIds.filter((id) => id !== jobId);
        });
    }

    return { savedJobIds, saveJob, removeJob };
}