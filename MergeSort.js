function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	//this will only check for the same length
	//if one array is bigger then it will stop at the shortest
	//[1,2,3,4] , [4,5,6,7,7,8,8]
	// ^ ^ ^ ^     ^ ^ ^ ^
	//will stop right there

	while (i < arr1.length && j < arr2.length) {
		//here we are saying if arr2 is bigger than 1 then push
		// the results
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			//else push arr2 into results
			//here we are sorting them and checking each loop
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}
