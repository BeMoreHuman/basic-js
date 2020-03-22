module.exports = function createDreamTeam(members) {
  if (!members || members.length < 0) {
    return false;
  }
  let secretName = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      secretName += String(members[i].trim().slice(0, 1)).toUpperCase();
    }
  }
  return secretName.split('').sort((a, b) => a.localeCompare(b)).join('');
};