import Square from "./Square.js";

const origArray = ["blue-100", "green-500", "red-200", "pink-400"];

const shuffleArray = array => {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const array = shuffleArray(origArray);

const Row = () => {
  return (
    <div className="flex">
      {array.map(i => {
        return (
          <div className={`bg-${i}`} style={{ height: "15vw", width: "25%" }} />
        );
      })}
    </div>
  );
};

export default Row;
