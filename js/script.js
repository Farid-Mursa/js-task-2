// Task. 1
var studentInfo = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function listProperties(object) {
  var properties = [];
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      properties.push(key);
    }
  }

  return properties.join(",");
}

var propertyList1 = listProperties(studentInfo);
console.log(propertyList1);
// Task. 2
var studentData = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log("Object before deleting the 'rollno' property:");
console.log(studentData);

delete studentData.rollno;

console.log("Object after deleting the 'rollno' property:");
console.log(studentData);

// Task. 3
var objectWithSum = {
  a: 10,
  b: 10,
};

const newObjectWithSum = {
  ...objectWithSum,
  sum: objectWithSum.a + objectWithSum.b,
};

console.log(newObjectWithSum);

// Task. 4
const obj = {
  n: 9,
  info: "n is smaller than 20",
};

if (obj.n > 10) {
  const newObj = {
    ...obj,
    info: "n is bigger than 10",
  };

  console.log(newObj);
} else {
  console.log(obj);
}
