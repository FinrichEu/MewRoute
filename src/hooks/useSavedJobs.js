import { useState, useEffect } from 'react';

/* Store saved job snapshots so they remain available after the API feed changes. */

export default function useSavedJobs(jobs) {
    const [savedItems, setSavedItems] = useState(() => {
        try {
            /* Read snapshots, or fall back to IDs saved by the old version. */
            const storedItems = localStorage.getItem('savedJobs') ?? localStorage.getItem('savedJobIds');
            if (!storedItems) {
                return [];
            }

            const parsedItems = JSON.parse(storedItems);
            if (!Array.isArray(parsedItems)) {
                return [];
            }

            /* Keep old string IDs and job objects with the fields needed by cards. */
            return parsedItems.filter((item) => {
                if (typeof item === 'string') {
                    return item.length > 0;
                }

                return item &&
                    typeof item.slug === 'string' && item.slug.length > 0 &&
                    typeof item.title === 'string' &&
                    typeof item.company_name === 'string' &&
                    Array.isArray(item.tags);
            });
        } catch {
            return [];
        }
    });

    /* Replace old IDs with snapshots when their jobs are available from the API. */
    useEffect(() => {
        if (jobs.length === 0) return;

        setSavedItems((currentItems) => currentItems.map((item) => {
            if (typeof item === 'string') {
                return jobs.find((job) => job.slug === item) ?? item;
            }

            return item;
        }));
    }, [jobs]);

    useEffect(() => {
        try {
            localStorage.setItem('savedJobs', JSON.stringify(savedItems));
        } catch {
            /* The list still works in memory until the page is reloaded. */
        }
    }, [savedItems]);

    /* Display and count stored cards; unresolved old IDs stay available for migration. */
    const savedJobs = savedItems.filter((item) => typeof item !== 'string');
    const savedJobIds = savedJobs.map((job) => job.slug);

    function saveJob(job) {
        setSavedItems((currentItems) => {
            /* Check the slug before saving the complete job object. */
            if (currentItems.some((item) => item === job.slug || item.slug === job.slug)) {
                return currentItems;
            }

            return [...currentItems, job];
        });
    }

    function removeJob(jobId) {
        /* Remove either a stored job or an old ID with the matching slug. */
        setSavedItems((currentItems) => {
            return currentItems.filter((item) => item !== jobId && item.slug !== jobId);
        });
    }

    function clearSavedJobs() {
        setSavedItems([]);
    }

    return { savedJobs, savedJobIds, saveJob, removeJob, clearSavedJobs };
}
