console.group("Group 1");
console.log("message one");
console.log("message two");
console.groupCollapsed("Child Group");
console.log("message one");
console.log("message two");
console.groupCollapsed("Grand Child Group");
console.log("message one");
console.log("message two");
console.groupEnd();  // هنا عشان اطلع برا الجروب اللي اسمه Gran Child Group  لازم اعمل دا عشان انهي الجروب 
console.groupEnd();  // هنا عشان اخرج برا الجروب بخطوه وافضل واقف في نفس المشتوي بتاع ال Gran Child Group 
console.groupEnd();  // هنا عشان اخرج برا الجروب بخطوه وافضل واقف في نفس المشتوي بتاع ال Group 1


console.group("Group 2");
console.log("message one");
console.log("message two");
