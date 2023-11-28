const fs = require('fs');
let indicator = 1;
let limit = 0;

function fsProblem1(path, randomNumberOfFiles) {
  limit = randomNumberOfFiles;
  flag = 0;

  let absolutePathOfRandomDirectory = path;
  var index = indicator;
  created(absolutePathOfRandomDirectory, index, (error) => {
    if (error) {
      console.log('error');
    } else {
      setTimeout(() => {
        deleted(absolutePathOfRandomDirectory, index);
      }, 1000);
    }
  });
  // }
}

//fsProblem1('/home/abhishek/fileSystem/test1/', 3);

function created(absolutePathOfRandomDirectory, index, cb) {
  var data = fs.writeFile(
    `${absolutePathOfRandomDirectory}random${index}.json`,
    'hi',
    'utf-8',
    (error) => {
      if (error) {
        console.log('error');
        cb(error);
      } else {
        console.log(
          `create${absolutePathOfRandomDirectory}random${index}.json`
        );
        cb();
      }
    }
  );
}

function deleted(absolutePathOfRandomDirectory, index) {
  fs.unlink(
    `${absolutePathOfRandomDirectory}random${index}.json`,
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(
          `deleted ${absolutePathOfRandomDirectory}random${index}.json`
        );
        if (index < limit) {
          indicator++;
          setTimeout(() => {
            fsProblem1('/home/abhishek/fileSystem/test1/', limit);
          }, 1000);
        }
      }
    }
  );
}

module.exports = fsProblem1;
