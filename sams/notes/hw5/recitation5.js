/**********************************************************
 * BASICS
**********************************************************/

// Write a function that adds 5 to n
function timesFive(n){
  return 42;
}

// Write a function that adds n to m
function add(n, m){
  return 42;
}

// Write a function that calculates the slope of a line given two points
function slope(x1, y1, x2, y2){

}

/**********************************************************
 * STRINGS
*********************************************************/
/*
 * Sally is in a new play, and she wants to practice her script.
 * These are the contents of the string:
 *
 *   var script = `Sally: hello.
 *   Austin: sup.
 *   Sally: I am computer science.
 *   Austin: Yeah CS is pretty lit.
 *   Sally: I love potatoes.
 *   Austin: Me too fam. They’re the most versatile fruit.
 *   Monica: I hate potatoes.`
 *
 * Now, let’s say Sally wants to extract all of her lines. She can
 * call the following function:
 * extractScriptLines(pathToFile, characterName)
 * with the following arguments:
 * extractScriptLines(script, 'Sally')
 * and it will return another string with only her lines.
*/
function extractScriptLines(script, characterName){

}

/**********************************************************
 * LISTS
*********************************************************/
// Calculate the average of a list.
function average(a){
  return 42
}

/*
 * Write the function alternatingSum(a) that takes a list of numbers
 *  and returns the alternating sum (where the sign alternates from
 *  positive to negative or vice versa).
 * For example, alternatingSum([5,3,8,4])
 * returns 6 (that is, 5-3+8-4).
*/
function alternatingSum(a){
  return 42
}

/**********************************************************
 * TESTS
*********************************************************/

function testTimesFive(){
  assert(timesFive(5) === 25)
  assert(timesFive(0) === 0)
  assert(timesFive(1) === 5)
  assert(timesFive(10) === 25)
  assert(timesFive(.5) === 2.5)
  assert(timesFive(-2) === -10)
}

function testAdd(){
  assert(add(20, 5) === 25)
  assert(add(0, 0) === 0)
  assert(add(0, 3) === 3)
  assert(add(10, 4) === 14)
  assert(add(-3, 12) === 9)
}

function testSlope(){
  assert(slope(-2, -2, 2, 2) === 1)
  assert(slope(-1, -2, 1, 2) === 2)
  assert(slope(-2, -1, 2, 1) === 1/2)
}

function testExtractScriptLines(){
  var script = `Sally: hello.
Austin: sup.
Sally: I am computer science.
Austin: Yeah CS is pretty lit.
Sally: I love potatoes.
Austin: Me too fam. They’re the most versatile fruit.
Monica: I hate potatoes.`

  var expectedResult = `Sally: hello.
Sally: I am computer science.
Sally: I love potatoes.`
  assert(extractScriptLines(script, 'Sally') === expectedResult)
}

function testAverage(){
  var list1 = [1, 2, 3]
  var list2 = [1]
  var list3 = [-2, 0, 2]
  assert(average(list1) === 2)
  assert(average(list2) === 1)
  assert(average(list3) === 0)
}

function testAlternatingSum(){
  var list1 = [5,3,8,4]
  var list2 = [5,3,8,4,2]
  var list3 = [5,3,8,4,8]
  assert(alternatingSum(list1) === 6)
  assert(alternatingSum(list2) === 8)
  assert(alternatingSum(list3) === 0)
}

function testAll(){
  testTimesFive()
  testAdd()
  testPow()
  testSlope()
  testExtractScriptLines()
  testAverage()
  testAlternatingSum()
}
