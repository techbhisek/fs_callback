const fs = require('fs');
function fsProblem2() {
  readlipsum();
}

module.exports = fsProblem2;

function delet(name, array, index) {
  if (name) {
    fs.unlink(`/home/abhishek/fileSystem/${name}`, (error) => {
      if (error) {
        console.log(error);
      } else {
        if (index < array.length - 1) {
          console.log(`sucessfully deleted ${name}`);
          index++;
          delet(array[index], array, index);
        }
      }
    });
  }
}
function fileread() {
  fs.readFile(
    //starts from here
    '/home/abhishek/fileSystem/fileNames.txt',
    'utf-8',
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        let a = data.split('\n');
        // for (let index = 0; index < 3; index++) {
        let index = 0;
        setTimeout(() => {
          delet(a[index], a, index);
        }, 1000);
        // }
      }
    }
  ); // remove from heree
}
function filewrite(dd) {
  fs.writeFile(
    '/home/abhishek/fileSystem/filesystem3.txt',
    dd.toString('utf-8'),
    () => {
      fs.appendFile(
        '/home/abhishek/fileSystem/fileNames.txt',
        'filesystem3.txt\n',
        () => {
          console.log(
            'filesystem3.txt inserted  name in fileNames.txt\n'
          );
          //fileread();
          setTimeout(() => {
            fileread();
          }, 1000);
        }
      );
    }
  );
}

function flread() {
  fs.readFile(
    '/home/abhishek/fileSystem/filesystem2.txt',
    'utf-8',
    (error, data) => {
      if (error) {
        console.log('error');
      } else {
        console.log(
          ` created filefilesystem3.txt and converted filesystem2.txt data to  sorted`
        );

        setTimeout(() => {
          filewrite(data.split(' ').sort().join('\n'));
        }, 1000);
      }
    }
  );
}

function flwrite(data) {
  fs.writeFile(
    '/home/abhishek/fileSystem/filesystem2.txt',
    data.toLowerCase().split('.').join('\n'),
    () => {
      console.log(
        ` created file filesystem2.txt and converted filesystem1.txt data to Lowercase`
      );
      fs.appendFile(
        '/home/abhishek/fileSystem/fileNames.txt',
        'filesystem2.txt\n',
        () => {
          console.log(
            'filesystem2.txt inserted  name in fileNames.txt\n'
          );
          let sorted = [];
          //  flread(sorted);
          setTimeout(() => {
            // flread();
            readllFiles();
          }, 1000);
        }
      );
    }
  );
}

function filesystem() {
  fs.readFile(
    '/home/abhishek/fileSystem/filesystem1.txt',
    'utf-8',
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        setTimeout(() => {
          flwrite(data);
        }, 1000);
      }
    }
  );
}

function filesName() {
  fs.writeFile(
    '/home/abhishek/fileSystem/fileNames.txt',
    'filesystem1.txt\n',
    () => {
      console.log(
        'filesystem1.txt inserted  name in fileNames.txt\n'
      );
    }
  );
  // filesystem();
  setTimeout(() => {
    filesystem();
  }, 1000);
}

function uppercase(data) {
  fs.writeFile(
    '/home/abhishek/fileSystem/filesystem1.txt',
    data.toUpperCase(),
    (error) => {
      if (error) {
        console.log('something went wrong');
      } else {
        console.log(
          ` created file filesystem1.txt and converted lipsum.txt data to uppercase`
        );
        setTimeout(() => {
          filesName();
        }, 1000);
      }
    }
  );
}

function readlipsum() {
  fs.readFile(
    '/home/abhishek/fileSystem/lipsum.txt',
    'utf-8',
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        setTimeout(() => {
          uppercase(data);
        }, 1000);
      }
    }
  );
}

function readllFiles() {
  var sorted = [];
  fs.readFile(
    //starts from here
    '/home/abhishek/fileSystem/fileNames.txt',
    'utf-8',
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        let filesarray = data.split('\n');

        for (let index = 0; index < 2; index++) {
          fs.readFile(
            `/home/abhishek/fileSystem/${filesarray[index]}`,
            'utf-8',
            (error, data) => {
              if (error) {
                console.log(error);
              } else {
                sorted = [...sorted, ...data.split(' ')];
                if (index == 1) {
                  console.log(
                    ` created filefilesystem3.txt and converted filesystem2.txt data to  sorted`
                  );
                  setTimeout(() => {
                    filewrite(sorted.sort().join('\n'));
                  }, 1000);
                }
              }
            }
          );
        }
      }
    }
  );
}
