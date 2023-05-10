import Input from "../Input";
import Button from "../Button";

const LottoPurchase = () => {
  return (
    <form className="mt-5">
      <label htmlFor="price" className="mb-2 d-inline-block">
        구입할 금액을 입력해주세요.
      </label>
      <div className="d-flex">
        <Input priceInput />
        <Button>확인</Button>
      </div>
    </form>
  );
};

export default LottoPurchase;
