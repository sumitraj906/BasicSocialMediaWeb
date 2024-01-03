const FoodItem = () => {
    let FoodItem=["Dal","Idli","Salad","Rice","Milk","Ghee"]
  return (
    <ul class="list-group">
      {FoodItem.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
      
    </ul>
  );
};
export default FoodItem;