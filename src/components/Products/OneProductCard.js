import { Link } from "react-router-dom";
import "./card.css";
import { useDispatch } from "react-redux";
import { increment } from "../../action/index";
import { useSelector } from "react-redux";



const OneProductCard = ({ item }) => {
  let store =useSelector((stete=> stete.count));
  const dispatch = useDispatch();

  const handlerAdd = (e, index) => {
    const filter= store.some(i=>i.id===index)
    if(!filter){
    let productbasket = {
        id: item.id,
        name: item.name,
        red_money: item.red_money,
        black_money: item.black_money,
        img_url: item.img_url,
        money: item.money,
        nam:item.nam
      };
      dispatch({ type: "AddBasket", product: productbasket });
    } else {
      store.filter(i=>i.id===index)[0].nam++
      store.filter(i=>i.id===index)[0].money+=store.filter(i=>i.id===index)[0].money
    }
  };

  return (
    <div className="Card">
      <Link to={"/" + item.id} className="card_img">
        <img src={item.img_url} />
      </Link>
      <div className="card_mony">
        <div className="card_taitl">
          <p>
            <span>{item.red_money}</span>
            <span>{item.black_money} </span>
          </p>
          <h4>{item.name}</h4>
        </div>
        <div onClick={(e, index)=>handlerAdd(e, item.id)}>
          <div className="card_icon" onClick={() => dispatch(increment())}>
            <img src="/products/puls.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductCard;
