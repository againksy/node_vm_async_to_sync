const fs = require('fs');
const vm = require('vm');

function theTopRatedScript3000(fileName, callback){
  function testQuery(callback) { 
    setTimeout(function() { callback(100500); }, 2000); 
  }

  function testResult(result) { 
    callback(result); // В данном случае callback это функция переданная при инициализации
  }

  const sand = {
    testResult: testResult,
    testQuery: () => {
      let resp
      testQuery(res => resp = res)
      while(resp === undefined) {
        require('deasync').sleep(100);
      }
      return resp
    },
  };

  const file = fs.readFileSync(__dirname + '/' + fileName);

  const script = new vm.Script(file);

  const context = vm.createContext(sand);

  script.runInContext(context);
}

module.exports = theTopRatedScript3000
