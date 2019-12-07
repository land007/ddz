var fs = require('fs');
var name = 'start_1.js';
fs.readFile(__dirname + '/' + name + '.bs', {encoding: 'utf-8'}, function(err, data) {
	console.log(data);
	this.exports = exports;
	this.require = require;
	this.module = module;
	this.__filename = __filename;
	this.__dirname = __dirname;
	require('vm').runInThlsContext(data);//(exports, require, module, __filename, __dirname)
});
//require('vm').runInThlsContext('rVSSEyN7/uwGnUAkJKAkVetuEsioWpM0DE1OjMzM/Vr5tmwyfWpFxhJhlzZgDIHbxnUmMWSVUkga32WrvGfXzntNmylyZihwQO6CH9pFRRsVYx3GfdMo1pHCf9k+UdQssF5+IUOfqZF1ig210A950wor6a8OK7/h0AgGx6env+xzaJaQHvfXCBs1gxdyb7FGcJAidkq1FLEJyodtVa8rvvqgXGdbCDNu7zy/rF2fuS+N/VbIi7Y35QoUlznnbV53e+GYdPuVaKjSBnXiCSUo8B2fRn5F72dN707sZU0wzYauA0SgyIEM/UrZNJ8fQP3iORb+AknpwAo2U3CviCFphOXtJh8vB8Ao6Otmqp02sU/jn7SHMzZLFcrl0SoeVXkQnfxqz1G1EsK5yvYgKczq8WbYg6/41ax5j2SPKm9KMkfRKK3zEn03umgPKmTZmO8dRqo/HSh1Dy7wclEKSImE3RWS8Y9FLM6DbGsSfvAX848HP44mywC7SqX8K2iw3lvd3L6/0C90u2zXujWUn3aAnH0ojeTo4E5Qb/rGescikNc9H0MGNo+zKfzTwS7Zbgko0Nob/Yw2nnBY6IpPg1+ZCOzk7M67LxOLbejVqx/FiA+Fx37EW8Kxzs8qtePd6rqhvf1ZP/W0ermKGhNoPeYM3A+ExU2E6x3xBHOAkAuJ13hl2+OnMxKdRDMgJOyRG9jq3bVYOJNsR/gaYZ579D28H3EuXnsBSy+7vD4nGAqhcH7cYS8tRBKyOKc+jXGsLZnK83vezj8cEfLUB1y0hKd+OE3drN+pSjzxMrka6r1CrcMUcNP5sRl4AVdQxTHr8y4tUrSrd7Cy007CRCg5BGlyefO68WqH1oGgTcKqhMVQvp1jhCubs5JLM4Z52eVZ6/c0HvD86jK+3bUHOT/4FLaz00b7lMiT0eG8lfz6sUTZNI6oclao7FuXwGsFxQrEvS1Shz2MEB0rVrIn+6BlWwHAiavGixhb4QXJB+GV682hWMSPfMEarczDQEynZxrVwZXjDOtpxMpWjQh5SqccXOGVE88vcnB0aH0hRwlmTmNvwwqtuZ2UuhE0PIioRD+DwHHX3tXWnGXItoOnzZkcA2Z5kq06u5AC6c0bYevNAfYzWSEQWb2WvMkNcfmMkksPDNMpiWE8dFz3yQ5YJ79RNeV/Iq3dzx29wNwleyZqbSTxwis8v1vJqhlE3KJHkpAA4+EmQmmDMAmJYo1DzGBzdb+r7BoSOD4JcbMqnmUNHJ24Nr7iGodBkwjwuNVOE6kjGoUljMSXCiioiqyUc5+7/bKQ6uG4Q+IpPiIkrUDbbHWo1n4=')(exports, require, module, __filename, __dirname);