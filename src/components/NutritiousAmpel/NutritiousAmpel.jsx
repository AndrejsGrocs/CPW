import picC from '../../assets/images/Nutrition_Ampel/C.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import picD from '../../assets/images/Nutrition_Ampel/D.png';
import picE from '../../assets/images/Nutrition_Ampel/E.png';

export default function NutritiousAmpel({ facts }) {
  const nutriAmpFunction = () => {
    console.log(facts);
    if (facts.calories <= 150) {
      return picA;
    }
    if (facts.calories <= 250) {
      return picB;
    }
    if (facts.calories <= 350) {
      return picC;
    }
    if (facts.calories >= 400) {
      return picD;
    }
    if (facts.calories >= 500 || facts.totalNutrients.SUGAR.unit > 25) {
      return picE;
    }
  };

  // useEffect(() => {
  //   nutriAmpFunction();
  // }, []);

  return (
    <div>
      <img style={{ width: '250px' }} src={nutriAmpFunction()} alt="" />
    </div>
  );
}
