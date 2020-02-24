module.exports = function createDreamTeam(members) {
  let newlyTeam = [];
  if (!Array.isArray(members)) {
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        newlyTeam.push(
          members[i]
            .trim()
            .toUpperCase()
            .slice(0, 1)
        );
      }
    }
    return newlyTeam.sort().join('');
  }
};
