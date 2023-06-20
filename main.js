const closureSum = () => {
  let rememberedVariable = 0;

  return (num) => {
    if (typeof num !== "number" || Number.isNaN(num)) {
      return "Entered wrong value";
    }

    return (rememberedVariable += num);
  };
};

const sum = closureSum();

console.log(sum(3));
console.log(sum(6));
console.log(sum(NaN));
console.log(sum(62));
console.log(sum(6865));
