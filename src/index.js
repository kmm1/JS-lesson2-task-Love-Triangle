/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var counter = 0;
    var visited = [];
    for (var i = 0; i < preferences.length; i++) {
        if (preferences[i] === 0) {
            continue;
        }
        var lover1 = preferences[i];
        var lover2 = preferences[lover1 - 1];
        var lover3 = preferences[lover2 - 1];
        if (parseInt(i + 1) === lover3 && parseInt(i + 1) != lover2) {
            if (!visited.includes(lover1) && !visited.includes(lover2) && !visited.includes(lover3)) {
                counter++;
                visited.push((lover1));
                visited.push(lover2);
                visited.push(lover3);
            }
        }
    }
    return counter;
};
