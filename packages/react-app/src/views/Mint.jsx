import { Button } from "antd";

function Mint() {
  return (
    <Button
      type="primary"
      onClick={() => {
        // TODO implement transaction
        // faucetTx({
        //   to: address,
        //   value: ethers.utils.parseEther("0.01"),
        // });
        // setFaucetClicked(true);
      }}
    >
      Mint 🐈‍⬛ ️
    </Button>
  );
}

export default Mint;
