/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  // 에너지를 위한 휴식필요 모든 적을 상태하려면 모든 적의 에너지 합에 초기 에너지를 뺸 후 +1
  const totalNecessaryEnergy = energy.reduce((sum, num) => sum + num, 0) - initialEnergy + 1;

  // 경험치
  let totalNecessaryExp = 0;
  for (let i = 0; i < experience.length; i++) {
    const exp = experience[i];
    if (initialExperience > exp) {
      initialExperience += exp;
    } else {
      // 경험치가 부족한 경우 부족한만큼의 값 + 1로 우위를 점함
      const trainingTime = exp - initialExperience + 1;
      totalNecessaryExp += trainingTime;
      initialExperience += trainingTime + exp; // 필요한 경험치 만큼 필요하고 이겨서 +exp;
    }
  }
  // 에너지 계산에 음수가 나올 수 있음
  // 음수가 나온다면 훈련이 필요없이 기본 에너지가 충분하다는 뜻임으로 0으로 변경
  return Math.max(0, totalNecessaryEnergy) + totalNecessaryExp;
};
