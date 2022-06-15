import { insertAddress } from "./endpoints/insertAddress";
import { AddressInfo } from "net";
import app from "./app";
import { getAddress } from "./endpoints/getAddress";

app.get("/enderecos/:cep", getAddress)

app.post('/user/:cep', insertAddress)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});