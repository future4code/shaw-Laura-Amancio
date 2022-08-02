import { app } from "./app";
import BuyerController from "./controller/BuyerController";
import ClientConroller from "./controller/ClientConroller";
import PaymentController from "./controller/PaymentController";

const buyerConroller = new BuyerController()
const clientController = new ClientConroller()
const paymentController = new PaymentController()

app.get("/payment/:payment_id", paymentController.getPaymentById)
app.post("/buyers", buyerConroller.addBuyer)
app.post("/clients", clientController.addClient)
app.post("/payment/:client_id/:buyer_id", paymentController.generatePayment)