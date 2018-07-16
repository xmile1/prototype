function search (haystack, needle) {

    let start = 0
    let stop = haystack.length - 1
    let middle = Math.floor((start + stop) / 2)

    while (haystack[middle] !== needle && start < stop) {
        if (needle < haystack[middle]) {
            stop = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + stop) / 2)
    }
    return (haystack[middle] !== needle) ? -1 : middle
}

let b = search([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 8)
console.log(b)

// O(log n)
// space : constant(O(1))

// Where is binary search used.
// Fellow assessment score data that are sort