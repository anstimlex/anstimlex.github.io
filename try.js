alert("welcome")

var student1 = yatim
var student2 = mengLai


alert("names are:" + student1 + "and " + student2)


function () {

}



alert


// Start writing JS code

// alert("Welcome to JS class")



var student = "bala"



// Create 2 variables

// variable_name should follow this syntax

// student_1

// ..

// student_2

var student_1 = "bala"

var student_2 = "ken"



// values should be , you and your peer.



var welcome_msg = "Hai. We are friends.. " + student_1 + " , " + student_2

console.log(welcome_msg)





function greet(nameOfPerson) {



    var greeting_message = "Welcome , Mr " + nameOfPerson



    console.log(greeting_message)

}



greet("Bala ")



greet("Zin min")



greet("Kenneth")





/*



1. Create a function which takes two inputs (names)

2. inside that function , concatenate those two inputs  using + operator

3. return the resulted_string



4. Call that function, with u and ur's friends name

5. print the returned result.



---------------------------



6. Advanced optional

It should look like this.

If i pass "bala" and "ken" as inputs to the funtion, it should return 

"Bala Bala | Ken Ken"



*/



function doubleTheGivenName(name) {

    return name + " " + name

}



function joinNames(name1, name2) {

    // This function is going to join two names ( name1, name2)

    // It is going to return the joined_string in the following format

    //Returns : "name1 name2"

    // var space = " "

    // var joined_string = name1 + " " + name2

    // var advanced_string = name1 + " " + name1  + " | " +  name2 + " " + name2

    var advanced_string = doubleTheGivenName(name1) + " | " + doubleTheGivenName(name2)

    return advanced_string

}



console.log(joinNames("Bala", "Ken"))





function add(a, b) {

    console.log(a + b)

    return a + b

}





function processInput() {

    var input1 = document.getElementById("input1").value

    var input2 = document.getElementById("input2").value



    var num1 = parseInt(input1)

    var num2 = parseInt(input2)



    var result = add(num1, num2)



    // UPDATE THE HTML HEADER

    document.getElementById("result_header").innerHTML = result

}

function doubleTheGivenName(name) {
    var i = 100
    while (i > 1) {
        console.log(i + " bottles of beer on the wall," + i + " bottles of beer.")

        console.log("Take one down and pass it around," + --i + " bottles of beer on the wall.")
    }
    if (i == 1) {
        console.log(i + " bottles of beer on the wall," + i + " bottles of beer.")
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }


    var i = 99
    while (i > 0) {
        console.log(i + " bottles of beer on the wall," + i-- + " bottles of beer.")
        if (i > 0) {
            console.log("Take one down and pass it around," + i + " bottles of beer on the wall.")
        } else
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }



    Objects
    var student = {
        name: "Ken",
        age: 20,
        marks: [80, 89, 67, 90, 100],
        subjects: ["Math", "CS", "EC", "Math2", "Math3"],
        avg: 0,
        young: false,
        welcome_function: function () {
            console.log("WELCOME BLA BLA BLA..")
        },
        bmi: {
            height: 200,
            weight: 70
        }
    }

    // Access the value of name "property" from student object ?? 

    console.log(student.name) var mymarks_list = student.marks
    var no_of_items = mymarks_list.length
    var index = 0
    var total = 0
    while (index < no_of_items) {
        total = total + mymarks_list[index] index++
    }
    var average = total / no_of_items student.avg = average