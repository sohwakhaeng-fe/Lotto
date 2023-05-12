export const generateLottoNumber = () => {
  const array = Array.from({ length: 45 }, (_, i) => i + 1);
  const lottoNumbers = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    lottoNumbers.push(array[randomIndex]);
    array.splice(randomIndex, 1); //중복선택 피하기
  }
  return lottoNumbers.sort((a, b) => a - b);
};
