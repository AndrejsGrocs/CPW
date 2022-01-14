import nutritionApi from '../../services/NutritionApi';
import nutritionApiImg from '../../services/NutritionApiImg';

export default function SearchMenu({
  searchInput,
  setSearchInput,
  setFacts,
  setImageFromEdamam,
  setProductTitle,
}) {
  //*********************************************** */
  const onChangeSearchInput = (e) => {
    console.log('e.target.value console-log', e.target.value);
    return setSearchInput(e.target.value);
  };

  //*********************************************** */

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setProductTitle(searchInput);
    const nutrtionApiResult = await nutritionApi(searchInput);
    setFacts(nutrtionApiResult);
    const setImageFromEdamamResult = await nutritionApiImg(searchInput);
    setImageFromEdamam(setImageFromEdamamResult);
  };

  //*********************************************** */

  return (
    <form
      onSubmit={onSubmitHandle}
      className="container form-container mb-5 mt-5"
    >
      <div className="input-group input-group-lg d-flex justify-content-center align-items-center flex-column subcontainer">
        <input
          id="search"
          type="text"
          className="form-control input w-100 shadow-lg p-3 mb-5 bg-body rounded"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Enter your food here"
          onChange={onChangeImage}
        />
        <button
          id="submitButton"
          type="submit"
          className="btn-lg btn"
          onClick={onClickButton}
        >
          search
        </button>
      </div>
    </form>
  );
}
