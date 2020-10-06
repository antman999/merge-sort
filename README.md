# merge-sort
*Merge sort is a combination of 2 two things (merging and sorting)*
*Much faster than bubble sort, insertion, selection sort*

# BIG O O(n log n)

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