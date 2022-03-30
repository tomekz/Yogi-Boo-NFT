import { Fragment } from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const tokenUris = [
  "QmRZ5JT4qBUDLeb3Mag1EwWWa4vsxPScYVDcgvVVy5mbb8",
  "QmPEvxzdPtodag8Qx8ZqhJs2Z2LxdpqrfBqKNrvMKpu4mn",
  "QmUM9c9cJabqJxvLTKWErDaqCWyCBChWrDgrqrs4ai1S2c",
  "QmdHEdnocHse2aNgwuoPrdDoDRsCYtxwjxGDQuUqESMdW2",
  "QmaWkNYFjUvwXs2oST9yFoco1K1cnu3AY4299rUvmQMdvv",
  "Qmbim98G2niyjkutTctCjYuTVybQCnXoyxiqSTR6PcyZ5z",
  "QmVK97JDXw8DtRKogJ3ucRuDkBCdCurQiecPuz4yvfFXxk",
];

const getRandomInt = max => {
  return Math.floor(Math.random() * max);
};

function Mint({ tx, address, writeContracts, setRoute, setIsUpdatingCollectibles }) {
  let history = useHistory();
  const randomUri = tokenUris[getRandomInt(7)];
  console.log({ randomUri });
  return (
    <Fragment>
      <Button
        type="primary"
        onClick={async () => {
          const res = await tx(writeContracts.YogiBooNFT.mintItem(address, randomUri));
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
