let sub = prompt("ENTER NO OF SUBJECTS:");
let subject = [];
let txt = "<table><tr><th>SUBJECT</th><th>MARKS</th></tr>"
let total = 0;
for (i = 0; i < sub; i++) {
    subject[i] = prompt("ENTER NAME OF SUBJECT:");
}

for (i = 0; i < sub; i++) {
    let marks = prompt("Enter marks of" + subject[i]);
    total += parseInt(marks);
    txt += "<tr><td>" + subject[i] + "</td><td>" + marks + "</td></tr>";
}


txt += "<tr><td>TOTAL</td><td>" + total + "</td></tr><tr><td>PERCENTAGE</td><td>" + total / subject.length + "</td></tr></table > ";
document.write(txt);