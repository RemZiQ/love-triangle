module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for (let i = 1; i <= preferences.length; i++) {
      if (preferences[i-1] <= preferences.length) {
        var A = preferences[i-1];
      }
      if (preferences[A-1] <= preferences.length && preferences[A-1] != A) {
        var B = preferences[A-1];
      }
      if (preferences[B-1] <= preferences.length && preferences[B-1] != B) {
        var C = preferences[B-1];
      }
      if (C === i) {
        count++;
      }
    }
    return count/3;
  };