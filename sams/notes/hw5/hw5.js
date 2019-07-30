// Write a function that adds 10 to n
function plusTen(n) {
  return 42;
}

// Write a function that returns n multiplied by m
function mult(n,m) {
  return 42;
}

// Write a function that calculates the slope of a line given two points
function slope(x1, y1, x2, y2) {
  return 42;
}

/*
 * Write the function areParallel(x1,y1,x2,y2,x3,y3,x4,y4) that
 * takes 8 numbers (ints or floats) -- x1, y1, x2, y2, x3, y3,
 * x4, y4 -- that describe two lines (one that contains
 * points (x1, y1) and (x2,y2) and one that contains points
 * (x3, y3) and (x4,y4)), and returns True if the two
 * lines are parallel and False otherwise. Hint: You can
 * look up what makes two lines parallel.
*/
function areParallel(x1, y1, x2, y2, x3, y3, x4, y4){
  return 42;
}

/*
 * Each row of the gradebook string contains a student's
 * name (one word, all lowercase), followed by one or more
 * comma-separated integer grades. A gradebook always contains at
 * least one student, and each row always contains at least one
 * grade. Gradebooks can also contain blank lines and lines starting
 * with the "#" character, which should be ignored.
 *
 * With this in mind, write the function
 * gradebookSummary(gradebook) that takes the gradebook
 * as a string as an argument and returns a summary of the
 * gradebook as a string. This summary string should show each
 * student followed by a tab followed by their average grade
 * (rounded to the hundreth place). The summary string should
 * have the students listed in their original order (separated
 * by newlines, but without a newline at the end), but should
 * get rid of any comments or blank lines.
 *
 * For examples, please see the test case below.
 *
 * Hint: You may wonder how to locate and distinguish the name
 * on each gradebook line from the scores... one approach
 * would be to look for the first comma after a newline.
*/
function gradebookSummary(gradebook){
  return 42;
}

/*
 * Write the function isSorted(a) that takes a list of numbers
 * and returns True if the list is sorted (either smallest-first
 * or largest-first) and False otherwise. Your function must only
 * consider each value in the list once (so, in terms of big-oh,
 * which we will learn soon, it runs in O(n) time, where n=len(a)),
 * and so in particular you may not sort the list.
*/
function isSorted(a){
  return 42;
}

/*
 * OPTIONAL + EXTRA CREDIT:
 * Write the function join(L, delimiter), without using the
 * builtin join function (of course), that takes a list and
 * a delimiter and returns the string composed of each element
 * in the list separated by the delimiter. So,
 * join(["ab", "cd", "efg"], ",") returns "ab,cd,efg".
*/
function join(L, delimiter){
  return 42;
}

/*
 * OPTIONAL + EXTRA CREDIT:
 * Write the function arePerpendicular(x1, y1, x2, y2, x3, y3, x4, y4)
 *  that takes 8 numbers (ints or floats) -- x1, y1, x2, y2, x3, y3,
 * x4, y4 -- that describe two lines (one that contains points
 * (x1, y1) and (x2,y2) and one that contains points (x3, y3)
 * and (x4,y4)), and returns True if the two lines are perpendicular
 * and False otherwise. Hint: You can look up what makes two lines
 * perpendicular.
*/
function arePerpendicular(x1, y1, x2, y2, x3, y3, x4, y4){
  return 42;
}

/******************************************************
 * TESTS
******************************************************/

function testPlusTen(){
  assert(plusTen(1) === 11)
  assert(plusTen(10) === 20)
  assert(plusTen(0) === 10)
  assert(plusTen(-10) === 0)
}

function testMult(){
  assert(mult(1, 5) === 5)
  assert(mult(0, 5) === 0)
  assert(mult(-1, 2) === -2)
  assert(mult(-1, -5) === 5)
}

function testSlope(){
  assert(slope(-2, -2, 2, 2) === 1)
  assert(slope(-1, -2, 1, 2) === 2)
  assert(slope(-2, -1, 2, 1) === 1/2)
}

function testAreParallel(){
  assert(areParallel(-2, -2, 2, 2, -1, -1, 0, 0) === true)
  assert(areParallel(-1, -2, 1, 2, -2, -4, 0, 0) === true)
  assert(areParallel(-1, -2, 1, 2, -1, -4, 0, 0) === false)
}

function testGradebookSummary(){
  var gradebook = `wilma,91,93
fred,80,85,90,97,100
betty,88`

  var expectedResult = "wilma\t92\nfred\t90.4\nbetty\t88"
  assert(gradebookSummary(gradebook) === expectedResult)
}

function testIsSorted(a){
  var list1 = [1, 2, 3]
  var list2 = [1, 3, 2]
  var list3 = [1]
  assert(isSorted(list1) === true)
  assert(isSorted(list2) === false)
  assert(isSorted(list3) === true)
}
