import { Button } from "antd";
import { useHistory } from "react-router-dom";
function Mint({ tx, address, writeContracts, setRoute }) {
  let history = useHistory();
  return (
    <Button
      type="primary"
      onClick={async () => {
        await tx(writeContracts.YourCollectible.mintItem(address, "Qmc9hvaC9EUK7efbCfJc2QESB9NxW84jbPiTvz1p6Lh91d"));
        history.push("/nfts");
        setRoute("/nfts");
      }}
    >
      Mint 🐈‍⬛ ️
    </Button>
  );
}

export default Mint;
