import { Fragment } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
function Mint({ tx, address, writeContracts, setRoute, setIsUpdatingCollectibles }) {
  let history = useHistory();
  return (
    <Fragment>
      {/*  TODO remove image */}
      {/* <img style={{ height: "50px" }} src={process.env.PUBLIC_URL + "/img/1.jpg"} /> */}
      <Button
        type="primary"
        onClick={async () => {
          const res = await tx(
            writeContracts.YogiBooNFT.mintItem(address, "QmRZ5JT4qBUDLeb3Mag1EwWWa4vsxPScYVDcgvVVy5mbb8"),
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
