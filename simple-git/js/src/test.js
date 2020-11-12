import simpleGit from 'simple-git';

const options = {
    baseDir: 'd:/Coding/Sandbox/simplegit/',
    binary: 'git',
    maxConcurrentProcesses: 6,
 };
  
 // when setting all options in a single object
 const git = simpleGit(options);


 git.status(onStatus);

 git.log(onStatus);

  function onStatus (err, statusResult) {
    console.dir(statusResult);
 };
