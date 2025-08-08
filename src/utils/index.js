export const getSavedJobs = () => {
  return JSON.parse(localStorage.getItem('savedJobs')) || [];
};

export const saveJob = (job) => {
  const jobs = getSavedJobs();
  const exists = jobs.some(j => j.id === job.id);
  if (!exists) {
    jobs.push(job);
    localStorage.setItem('savedJobs', JSON.stringify(jobs));
  }
};

export const removeJob = (jobId) => {
  const jobs = getSavedJobs().filter(j => j.id !== jobId);
  localStorage.setItem('savedJobs', JSON.stringify(jobs));
};

export const toggleJob = (job) => {
  const jobs = getSavedJobs();
  const exists = jobs.some(j => j.id === job.id);

  if (exists) {
    removeJob(job.id);
  } else {
    saveJob(job);
  }
};
