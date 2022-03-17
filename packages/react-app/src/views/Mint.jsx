import { Fragment } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
function Mint({ tx, address, writeContracts, setRoute, setIsUpdatingCollectibles }) {
  let history = useHistory();
  return (
    <Fragment>
      <Button
        type="primary"
        onClick={async () => {
          const res = await tx(
            writeContracts.YourCollectible.mintItem(address, "Qmc9hvaC9EUK7efbCfJc2QESB9NxW84jbPiTvz1p6Lh91d"),
          );
          if (res) {
            res.wait();
            setIsUpdatingCollectibles(true);
            setRoute("/nfts");
            history.push("/nfts");
          }
        }}
      >
        Mint 🐈‍⬛ ️
      </Button>
    </Fragment>
  );
}

export default Mint;
