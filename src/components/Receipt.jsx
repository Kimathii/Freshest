import { useState, useMemo } from "react";
import generateReceipt from "../utils/generateReceipt";
import "../styles/receipt.css";

const Receipt = () => {
  const [receipt, setReceipt] = useState(generateReceipt());

  const handleGenerateNew = () => {
    setReceipt(generateReceipt());
  };

  const LOGO_MAP = {
    "Eukanuba Pet Food": "/logos/ekunaba.png",
    "Pure Encapsulations": "/logos/pure.png",
    "Bacardi Ocho": "/logos/bacardi.png",
    "Tractor Supply Co": "/logos/tractor.png",
    "The Vitamin Shoppe": "/logos/vitamin.png",
    "Amazon": "/logos/amazon.png",
    "Sam's Club": "/logos/sams.png",
    "Petco": "/logos/petco.png",
    "Target": "/logos/Target.jpg",
    "Chipotle Mexican Grill": "/logos/chipotle.png",
    "Burger King": "/logos/burger.png",
    "Subway": "/logos/subway.png",
    "KFC": "/logos/kfc.png",
    "McDonald's": "/logos/mcdonalds.png",
    "Walmart": "/logos/walmart.png",
    "Chewy": "/logos/chewy.png",
    "WholeFoods": "/logos/wholefoods.png",
  };

  const barcodeBars = useMemo(() => {
    return Array.from({ length: 45 }).map(() => ({
      width: Math.random() * 4 + 1,
      marginRight: Math.random() * 3 + 1
    }));
  }, [receipt]);

  const barcodeNumber = useMemo(() => {
    return `${receipt.orderNumber.replace("#", "")}${receipt.cardLast4}${Math.floor(Math.random() * 900000 + 100000)}`;
  }, [receipt]);

  return (
    <div
      className={`receipt ${receipt.company === "Petco" ? "petco" : ""} ${receipt.company === "Sam's Club" ? "sams-club" : ""} target`}
      onDoubleClick={handleGenerateNew}
    >
      <div className="logo-container">
        <img
          src={LOGO_MAP[receipt.company]}
          alt={`${receipt.company} logo`}
          className="receipt-logo"
        />
      </div>

      <div className="target-header">
        <p className="center" style={{textTransform: "uppercase"}}>{receipt.company}</p>
        <p className="center">{receipt.address.split(',')[0]}</p>
        <p className="center">{receipt.address.split(',').slice(1).join(',').trim()}</p>
        <p className="center">{receipt.phone}</p>
      </div>

      <div className="target-meta">
        <p>
          <span>Date: {receipt.date.split(" ")[0]}</span>
          <span>Time: {receipt.date.split(" ")[1]} {receipt.date.split(" ")[2]}</span>
          <span>Register: 03</span>
        </p>
        <p>
          <span>Transaction: {receipt.orderNumber.replace("#", "")}</span>
          <span>Cashier: David R.</span>
        </p>
      </div>

      <div className="dotted-line"></div>

      <ul>
        {receipt.items.map((item, index) => (
          <li key={index} className="target-item">
            <span>{item.name}</span>
            <span>{item.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="totals">
        <p>
          <span>SUBTOTAL</span>
          <span className="amount">{Number(receipt.subtotal).toFixed(2)}</span>
        </p>
        <p>
          <span>TAX 1 8.25%</span>
          <span className="amount">{Number(receipt.tax).toFixed(2)}</span>
        </p>
        <p>
          <span>TOTAL</span>
          <span className="amount">{Number(receipt.total).toFixed(2)}</span>
        </p>
        <p>
          <span>PAID CREDIT CARD</span>
          <span className="amount">{Number(receipt.total).toFixed(2)}</span>
        </p>
      </div>

      <div className="payments">
        {receipt.payments.card > 0 && (
          <div className="target-payments">
            <p>PAID: CREDIT CARD</p>
            <p>Card: **** **** **** {receipt.cardLast4}</p>
            <p>Auth: {receipt.authCode}</p>
            <p>CHIP READ</p>
          </div>
        )}
      </div>

      <div className="barcode-container">
        <div className="barcode-visual" style={{display: 'flex', height: '40px', justifyContent: 'center'}}>
          {barcodeBars.map((bar, i) => (
            <div key={i} style={{
              width: `${bar.width}px`,
              height: '100%',
              backgroundColor: '#000',
              marginRight: `${bar.marginRight}px`
            }}></div>
          ))}
        </div>
        <div className="barcode-label">
          {barcodeNumber}
        </div>
      </div>

      <div className="target-footer" style={{marginTop: "20px"}}>
        <p className="center"># ITEMS SOLD {receipt.items.length}</p>
        <p className="center">THANK YOU FOR SHOPPING AT {receipt.company.toUpperCase()}!</p>
        <p className="center">EARN REWARDS JOIN Circle Rewards</p>
        <p className="center">Go to: {receipt.company.toLowerCase().replace(/[^a-z]/g, "")}.com/circle</p>
      </div>
    </div>
  );
};

export default Receipt;
