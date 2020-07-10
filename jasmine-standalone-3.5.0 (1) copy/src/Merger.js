function Merger(arrayA, arrayB) {
  const lenA = arrayA.length;
  const lenB = arrayB.length;
  const arrayC = []
  if (lenA != lenB) {
    if (lenA > lenB) {
      for (let index = 0; index < lenB; index++) {
        const elA = arrayA[index];
        const elB = arrayB[index];
        arrayC.push(elA);
        arrayC.push(elB);
      }
      for (let index = lenB; index < lenA; index++) {
        const element = arrayA[index];
        arrayC.push(element);
      }
    } else {
      for (let index = 0; index < lenA; index++) {
        const elA = arrayA[index];
        const elB = arrayB[index];
        arrayC.push(elA);
        arrayC.push(elB);
      }
      for (let index = lenA; index < lenB; index++) {
        const element = arrayB[index];
        arrayC.push(element);
      }
    }
  } else {
    for (let index = 0; index < arrayA.length; index++) {
      const elA = arrayA[index];
      const elB = arrayB[index];
      arrayC.push(elA);
      arrayC.push(elB);
    }
  }
  return arrayC;
}