# merge-sort
*Merge sort is a combination of 2 two things (merging and sorting)*
*Much faster than bubble sort, insertion, selection sort*

## Time complexity O(n log n)

## How does it work?
Works by decomposing an array into smaller arrays of 0,1 elements, then building up a newly sorted array

```
//                 [8,3,5,4,7,6,1,2]
//               /                   \
//        [8,3,5,4]                [7,6,1,2]
//          /  \                     /  \
//       [8,3] [5,4]              [7,6] [1,2]
//        / \   / \                / \   / \
//     [8] [3] [5] [4]         [7] [6] [1] [2]
//      \   /   \   /           \   /   \   / 
//      [3,8]   [4,5]           [6,7]   [1,2]
//        \       /               \      / 
//        [3,4,5,8]              [1,2,6,7]
//                \              /       
//               [1,2,3,4,5,6,7,8]

```

## Steps
1. Merge starts off by dividing the array and it wont stop until they are a 1 or 0 array. If it wasnt even it would have a 0 array. 
2. After it split them into one array it will place them back into an array of 2 but sorted
3. Repeat and keep merging 

## Merging arrays
In order to implement merge sort, it is useful to first implement a function responsible for merging already sorted arrays.

Given a new array which are sorted this helper function should create a new array which is also sorted and consist of all the elements in the 2 arrays. The function should run in O(n+m )time and should not 
modify the given arrays.

## Merging Arrays Pseudocode
1. Create an array(empty), take a look at the smallest value in each input array
2. While there are still values we havent looked at....
   - If the value in the first array is smaller than the value
   - in the second array push the value in the first array Into our results and move on to the next value in the first array 

```
  //this will only check for the same length 
  //if one array is bigger then it will stop at the shortest
  //[1,2,3,4] , [4,5,6,7,7,8,8]
  // ^ ^ ^ ^     ^ ^ ^ ^
  //will stop right there 

```
